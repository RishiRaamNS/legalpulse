import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import $ from 'jquery'; 
import Popper from 'popper.js'; 
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Pages 
import App from './App';
import Signup from "./pages/signup"
import Login from "./pages/login"
import Search from "./pages/search"
import Join from "./pages/join"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/getting-started/join' element={<Join />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
