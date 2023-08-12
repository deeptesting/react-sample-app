import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/routing-components/Home';
import { Address } from './components/routing-components/Address';
import { Navigate, Route, Routes } from 'react-router';
import { AboutUs } from './components/routing-components/AboutUs';
import { Navbar } from './components/shared-components/Navbar';
import { ContactUs } from './components/routing-components/ContactUs';
import { NotFound } from './components/routing-components/NotFound';
import { Employee } from './components/routing-components/Employee';

function App() {
  return (
      <Routes>
        <Route path="/"  element={<><Navbar/><Home/></>} />
        <Route path="/about-us" element={<><Navbar/><AboutUs/></>} />
        <Route path="/contact-us" element={<><Navbar/><ContactUs/></>} />
        <Route path="/employee/:empId" element={<><Navbar/><Employee/></>} />

        
        <Route path='/old-application' element={<Navigate to='/' />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
}
 

export default App;