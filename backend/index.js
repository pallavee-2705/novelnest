require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4242;
const stripe = require('stripe')(process.env.PUBLIC_STRIPE_SECRET_KEY); // Replace with your actual secret key

app.use(express.json());
app.use(cors());

app.post('/checkout', async (req, res) => {
    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
           
            line_items: req.body.cartItems.map((item) =>{
                
                return {
                    price_data: {
                        currency: 'cad',
                        product_data: {
                            name: item.title,
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity
                }
            }), 
            success_url: `${req.headers.origin}/payment/success`,
            cancel_url: `${req.headers.origin}/payment/canceled`,
            }

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);
        res.status(200).json(session);
        } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
        }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
