import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { StateContext } from './context/ShareContext';
import { WishListContext } from './context/WishContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="244875472353-ra2j18m0rkp8lhu8glt9lhtbcl6b3cpq.apps.googleusercontent.com">
    <StateContext>
    <WishListContext>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </WishListContext>
    </StateContext>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
