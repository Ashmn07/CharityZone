import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Components/Login';
import Register from './Components/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);