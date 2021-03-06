// vendors
import React from 'react';
import ReactDOM from 'react-dom';

//styles
import './index.css';

// components
import App from './App';

// utils
import reportWebVitals from './reportWebVitals';

// Deleted Strict mode deprecated with css transition
// <React.StrictMode></React.StrictMode>

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
