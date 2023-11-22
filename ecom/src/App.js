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

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="products" element={<Productpage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="singleproductpage" element={<Singleproductpage />} />
          <Route path="checkoutpage" element={<Checkout/>} />
          <Route path="cartpage" element={<Cartpage />} />
      </Routes>
      <Bottomnavbar />
    </BrowserRouter>
    </div>
  );
}

export default App;
