import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import Register from './Components/Register';
import Beneficiary from './Components/Beneficiary';
import Donor from './Components/Donor';
import Validator from './Components/Validator';
import CreateProject from './Components/CreateProject';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="register" element={<Register />} />
        <Route path="beneficiary" element={<Beneficiary />} />
        <Route path="beneficiary/createproject" element={<CreateProject />} />
        <Route path="donor" element={<Donor />} />
        <Route path="validator" element={<Validator />} />
    </Routes>
  </BrowserRouter>
);