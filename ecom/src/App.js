import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from './Components/Homepage';
import { Navbar } from './Components/Navbar';
import { Productpage } from './Components/Productpage';
import { Bottomnavbar } from './Components/Bottomnavbar';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Singleproductpage } from './Components/Singleproductpage';
import { Checkout } from './Components/Checkout';
import { Cartpage } from './Components/Cartpage';
import { Orderpage } from './Components/Orderpage';
import { MerchantRegistrationForm } from './Components/MerchantRegistrationForm';
import { Merchantdatapage } from './Components/Merchantdatapage';
import { MerchantLoginForm } from './Components/MerchantLoginForm';
import { Addmerchantproduct } from './Components/Addmerchantproduct';
import { Allmerchantproduct } from './Components/Allmerchantproduct';
import { Merchantorders } from './Components/Merchantorders';
import { Merchantproductpage } from './Components/Merchantproductpage';

function App() {

  const shouldRenderNavbar = () => {
    const allowedPaths = [
      '/merchantdatapage',
      '/merchantdatapage/merchantadd',
      '/merchantdatapage/merchantproduct',
      '/merchantdatapage/merchantorders',
    ];
  
    return !allowedPaths.includes(window.location.pathname);
  };

  return (
    <div className="App">
      <BrowserRouter>
      {shouldRenderNavbar() && <Navbar />}
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="products" element={<Productpage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="singleproductpage" element={<Singleproductpage />} />
          <Route path="checkoutpage" element={<Checkout/>} />
          <Route path="orderpage" element={<Orderpage/>} />
          <Route path="cartpage" element={<Cartpage />} />
          <Route path="merchantregistration" element={<MerchantRegistrationForm />} />
          <Route path="merchantdatapage" element={<Merchantdatapage />} />
          <Route path="merchantlogin" element={<MerchantLoginForm />} />
          <Route path="merchantproductpage" element={<Merchantproductpage />} />
          <Route path="merchantdatapage/merchantadd" element={<Addmerchantproduct />} />
          <Route path="merchantdatapage/merchantproduct" element={<Allmerchantproduct />} />
          <Route path="merchantdatapage/merchantorder" element={<Merchantorders />} />
 </Routes>
      
 {shouldRenderNavbar() && <Bottomnavbar />}

    </BrowserRouter>
    </div>
  );
}

export default App;
