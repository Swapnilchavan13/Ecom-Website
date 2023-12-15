import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/merchantlogin.css'; // Import your CSS file

export const MerchantLoginForm = () => {
  const navigate = useNavigate();

  const [merchantemail, setMerchantemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3008/allmerchants');
      const merchants = await response.json();

      const matchingMerchant = merchants.find(
        (merchant) => merchant.businessEmail === merchantemail && merchant.password === password
      );

      if (matchingMerchant) {
        localStorage.setItem('merchantid', matchingMerchant._id);

        toast.success('Merchant Login Successful', {
          position: 'top-center',
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        navigate('/merchantdatapage');
      } else {
        toast.error('Invalid credentials. Please try again.', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const newAccount = () => {
    navigate('/merchantregistration');
  };

  return (
    <div className="merchant-login-container">
      <>
        <ToastContainer />
        <br />
        {/* <img className="logo" src="https://pngimg.com/d/amazon_PNG9.png" alt="" /> */}

        <div className="mainlogindiv">
          <h1>Sign in</h1>
          <label htmlFor="">Business Email Id</label> <br />
          <input
            className="input-field"
            placeholder="Enter Business Email Id"
            type="text"
            value={merchantemail}
            onChange={(e) => setMerchantemail(e.target.value)}
          />
          <br />
          <label htmlFor="">Enter Password</label>
          <br />
          <input
            className="input-field"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div>
            <br />
            <button className="btn" onClick={handleLogin}>
              Continue
            </button>
            <p>
              By continuing, you agree to Amazon's Conditions <br /> of Use and Privacy Notice.
            </p>
          </div>
          <p>New to Amazon?</p>
          <button onClick={newAccount} className="btn2">
            Create New Merchant account
          </button>
          <br />
          <br />
        </div>
      </>
    </div>
  );
};
