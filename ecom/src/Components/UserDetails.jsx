import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/userdetails.css';

export const UserDetails = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLoginSuccessful');
    localStorage.removeItem('cart');
    navigate('/');
    window.location.reload();
  };

  const Saveaddress = () => {
    alert("Backend Is Not Connected");
    setPopupVisible(false); 
  };

  const showPopup = () => {
    setPopupVisible(true);
  };

  return (
    <div className="user-details-container">
      <h2 className="user-details-header">User Details</h2>
      <h2>Name: {username}</h2>
      <h3>Address:</h3>
      <button className='addadd' onClick={showPopup}>Add Address</button>
      <br />
      {isPopupVisible && (
        <div className="popup">
          <input className="address-input" placeholder='Enter Your House No. and Street' type="text" />
          <br />
          <label>
            Select The City
            <br />
            <input placeholder='Enter City' className="address-input" type="text" />
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
      )}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};
