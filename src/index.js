import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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



// React Strict Mode is a tool in React that helps in identifying potential issues in an application. 
//It does not render any visible UI but activates additional checks and warnings for its descendants.
//These checks are run only in development mode and do not affect the production build.

// With Strict Mode starting in React 18, whenever a component mounts in development, 
//React will simulate immediately unmounting and remounting the component: