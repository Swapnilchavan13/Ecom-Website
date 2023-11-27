import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Userdeails = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    // Clear the data in localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('isLoginSuccessful');
    localStorage.removeItem('address'); // If you have an 'address' stored
    navigate('/')

    window.location.reload();

  };

  return (
    <div>
      <h2>User Details</h2>
      <h2>Name: {username}</h2>
      <h3>Address: {localStorage.getItem('address')}</h3>
      <div>
        <input placeholder='Enter Your House No.' type="text" />
        <br />
        <label htmlFor="">
            <input placeholder='Enter The Landmark Or Near By' type="text" />
        </label>
        <br />
        <label htmlFor="">
            Select The City
            <br />
            <input type="text" />
        </label>
        <br />
        <button>Save Address</button>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
