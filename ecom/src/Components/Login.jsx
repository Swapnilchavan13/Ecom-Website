import React, { useState } from 'react';
import '../Styles/login.css';
import { useNavigate } from 'react-router-dom';
import { UserDetails } from './UserDetails';

export const Login = () => {
  const navigate = useNavigate();
  const isloggedin= localStorage.getItem('isLoginSuccessful')  || false;

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3005/allusers');
      const users = await response.json();

      // Find the user with matching credentials
      const matchingUser = users.find(
        (user) => user.usernumber === mobileNumber && user.userpassword === password
      );

      if (matchingUser) {
        // Login successful
        localStorage.setItem('username', matchingUser.username);
        localStorage.setItem('isLoginSuccessful', true);
        alert('Login Successful');
        navigate('/');
       window.location.reload();

      } else {
        // Login failed
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const newAccount = () => {
    navigate('/register');
  };

  return (
    <div id='logindiv'>
      {isloggedin ? (
        <UserDetails />
      ) : (
        <>
          <br />
          <img width='180px' src='https://pngimg.com/d/amazon_PNG9.png' alt='' />

          <div className='mainlogindiv'>
            <h1>Sign in</h1>
            <label htmlFor=''>Mobile Number</label> <br />
            <input
              placeholder='Enter Mobile Number'
              type='number'
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <br />
            <label htmlFor=''>Enter Password</label>
            <br />
            <input
              placeholder='Enter Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div>
              <br />
              <button className='btn' onClick={handleLogin}>
                Continue
              </button>
              <p>
                By continuing, you agree to Amazon's Conditions <br /> of Use and
                Privacy Notice.
              </p>
            </div>
            <p>New to Amazon?</p>
            <button onClick={newAccount} className='btn2'>
              Create your Amazon account
            </button>
            <br />
            <br />
          </div>
        </>
      )}
    </div>
  );
};
