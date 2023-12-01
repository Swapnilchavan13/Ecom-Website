import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/userdetails.css';

export const Userdetails = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const usermobile = localStorage.getItem('usermobile');

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3005/userdata`);
        const data = await response.json();

        if (response.ok) {
          // Find the user that matches both username and usernumber
          const matchingUser = data.find(user => user.username === username && user.usernumber === usermobile);

          if (matchingUser) {
            setUserData(matchingUser);
          } else {
            console.error('User not found');
          }
        } else {
          console.error('Error fetching user data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
      }
    };

    fetchData();
  }, [username, usermobile]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLoginSuccessful');
    localStorage.removeItem('cart');
    localStorage.removeItem('usermobile');
    localStorage.removeItem('uid');

    navigate('/');
    window.location.reload();
  };

  const saveAddress = async () => {
    try {
      const userId = userData._id;
      const response = await fetch(`http://localhost:3005/userdata/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          useraddress: address,
        }),
      });

      const data = await response.json();
      console.log(data.message);

      setPopupVisible(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
    window.location.reload()
  };

  const showPopup = () => {
    setPopupVisible(true);
  };

  return (
    <div className="user-details-container">
      <h2 className="user-details-header">User Details</h2>
      {userData ? (
        <>
          <h2>Name: {userData.username}</h2>
          <h3>Mobile Number: {userData.usernumber}</h3>
          <h3>Address: {userData.useraddress}</h3>
        </>
      ) : (
        <p>Loading user data...</p>
      )}

      <button className='addadd' onClick={showPopup}>
        Add/Edit Address
      </button>
      <br />
      {isPopupVisible && (
        <div className="popup">
          <input
            className="address-input"
            placeholder='Enter Your House No. Street with City And Pincode'
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <button onClick={saveAddress} className="save-button">
            Save Address
          </button>
        </div>
      )}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};