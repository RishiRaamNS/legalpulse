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
import Login from "./pages/login"
import Search from "./pages/search"
import Join from "./pages/join"
import Education from './pages/addeducation';
import Experience from './pages/addexperience';
import Addbio from './pages/addbio';
import Addcert from './pages/addcertification';
import Freelancersignup from './pages/freelancersignup';
import Clientsignup from './pages/clientsignup';
import Home from './pages/clienthome';
import Message from './pages/message';
import Addrole from "./pages/addrole"
import Providerhome from './pages/providerhome';
import Learn from './pages/learn';
import Profile from './pages/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path="/signup-provider" element={<Freelancersignup />} />
          <Route path='/signup-client' element={<Clientsignup />} />
          <Route path="/" element={<App hide1={{display: 'none'}}/>} />
          <Route path="/home" element={<Home hide={{display: 'none'}}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/getting-started/join' element={<Join />} />
          <Route path='/getting-started/education' element={<Education />} />
          <Route path='/getting-started/experience' element={<Experience />} />
          <Route path="/getting-started/bio" element={<Addbio />} />
          <Route path='/getting-started/certification' element={<Addcert />} />
          <Route path='/message' element={<Message />} />
          <Route path='/getting-started/role' element={<Addrole />} />
          <Route path='/providerhome' element={<Providerhome hide={{display: 'none'}}/>} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/profile' element={<Profile />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
