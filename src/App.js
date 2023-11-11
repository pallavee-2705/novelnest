import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, BookDetail, Store, AllArticles } from './pages';
import { Navbar, Footer, Success, Cancel } from './components';
import { Toaster } from 'react-hot-toast';
 
function App() {
  return (
    // <StateContext>
      <Router>
        <Layout>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<BookDetail />} />
            <Route path="/store" element={<Store />} />
            <Route path="/allarticles/:id" element={<AllArticles />} />
            <Route path="/payment/success" element={<Success />} />
            <Route path="/payment/canceled" element={<Cancel />} />
          </Routes>
        </Layout>
      </Router>
    // </StateContext>
  );
}

function Layout({ children }) {
  // You can add any additional layout components or styling here
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default App;
