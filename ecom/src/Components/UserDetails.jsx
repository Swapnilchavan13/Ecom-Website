// Userdetails.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/userdetails.css';

export const UserDetails = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLoginSuccessful');
    localStorage.removeItem('cart');
    navigate('/');
    window.location.reload();
  };

  const Saveaddress = () => {
    alert("Backend Is Not Connected")
  }

  return (
    <div className="user-details-container">
      <h2 className="user-details-header">User Details</h2>
      <h2>Name: {username}</h2>
      <h3>Address: {localStorage.getItem('address')}</h3>
      <div className="user-details-info">
        <input className="address-input" placeholder='Enter Your House No.' type="text" />
        <br />
        <label>
          <input className="address-input" placeholder='Enter The Landmark Or Near By' type="text" />
        </label>
        <br />
        <label>
          Select The City
          <br />
          <input className="address-input" type="text" />
        </label>
        <br />

        <label>
          Enter Pincode
          <br />
          <input className="address-input" placeholder='Enter Pincode' type="text" />
        </label>
        <br />
        <button onClick={Saveaddress} className="save-button">Save Address</button>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};
