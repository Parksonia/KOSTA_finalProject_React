import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // index.html에 자동으로 stylesheet가 링크됨
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'flowbite/dist/flowbite.min.css';
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
