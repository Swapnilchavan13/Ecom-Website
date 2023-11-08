import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from './Components/Homepage';
import { Navbar } from './Components/Navbar';
import { Productpage } from './Components/Productpage';
import { Bottomnavbar } from './Components/Bottomnavbar';
import { Login } from './Components/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="products" element={<Productpage />} />
          <Route path="login" element={<Login />} />
      </Routes>
      <Bottomnavbar />
    </BrowserRouter>
    </div>
  );
}

export default App;
