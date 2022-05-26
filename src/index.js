import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const firebaseConfig = {
  apiKey: "AIzaSyDQSU1T3Hxab7nS-BIZ9B07p5khvV3R9uo",
  authDomain: "react-coder-vivas.firebaseapp.com",
  projectId: "react-coder-vivas",
  storageBucket: "react-coder-vivas.appspot.com",
  messagingSenderId: "17491888944",
  appId: "1:17491888944:web:312bb35e54300558d3d6f5"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
