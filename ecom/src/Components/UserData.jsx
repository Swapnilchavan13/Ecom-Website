import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/userdetails.css';


export const UserData = () => {
 const navigate = useNavigate();
 const username = localStorage.getItem('username');
 const usermobile = localStorage.getItem('usermobile');
 const uid = localStorage.getItem('uid');
 
   const [isPopupVisible, setPopupVisible] = useState(false);
  //  const [address, setAddress] = useState('');
   const [address, setAddresses] = useState([{ street: '', city: '', pincode: '' }]);

   const [userData, setUserData] = useState(null);
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(`http://62.72.59.146:3008/userdata`);
         const data = await response.json();
 
         if (response.ok) {
           // Find the user that matches both username and usernumber
           const matchingUser = data.find(user => user._id === uid);
 
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
      const response = await fetch(`http://62.72.59.146:3008/userdata/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          useraddress: address.map(addr => `${addr.street}, ${addr.city}, ${addr.pincode}`).join(' | '),
        }),
      });
 
      const data = await response.json();
      console.log(data.message);
 
      setPopupVisible(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
    window.location.reload();
  };
 
   const showPopup = () => {
     setPopupVisible(true);
   };

   const hidePopup = () => {
    setPopupVisible(false);
  };
 
  const handleAddressChange = (index, e) => {
    const newAddresses = address.map((address, addrIndex) => {
      if (index !== addrIndex) return address;
      return { ...address, [e.target.name]: e.target.value };
    });
    setAddresses(newAddresses);
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
         {address.map((address, index) => (
           <div key={index}>
             <input
               className="address-input"
               placeholder='House No. and Street'
               name="street"
               type="text"
               value={address.street}
               onChange={(e) => handleAddressChange(index, e)}
             />
             <br />
             <input
               className="address-input"
               placeholder='Enter City'
               name="city"
               type="text"
               value={address.city}
               onChange={(e) => handleAddressChange(index, e)}
             />
             <br />
             <input
               className="address-input"
               placeholder='Enter Pincode'
               name="pincode"
               type="text"
               value={address.pincode}
               onChange={(e) => handleAddressChange(index, e)}
             />
           </div>
         ))}
        
         <br />
         <button onClick={saveAddress} className="save-button">
           Save Address
         </button>
         <button onClick={hidePopup} className="cancel-button">
           Cancel
         </button>

           
         </div>
       )} 
       <button className="logout-button" onClick={handleLogout}>
         Logout
       </button>
     </div>
   );
 };
