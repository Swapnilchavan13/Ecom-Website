import React, { useState } from 'react';
import '../Styles/login.css';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3005/userdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          usernumber: number,
          userpassword: password,
        }),
      });

      if (response.ok) {
        // Registration successful, you can handle the success here
        alert('User registered successfully');
        // Optionally, you can navigate to another page after successful registration
        navigate('/login');
      } else {
        // Registration failed, handle the error
        alert('Failed to register user');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div id='logindiv'>
      <br />
      <img width='180px' src='https://pngimg.com/d/amazon_PNG9.png' alt='' />

      <div className='mainlogindiv'>
        <h1>Create Account</h1>
        <label htmlFor=''>Your Name</label> <br />
        <input
          placeholder='Enter Your Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor=''>Mobile Number</label> <br />
        <input
          placeholder='Enter Mobile Number'
          type='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
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
        <br />
        <button className='btn' onClick={handleRegister}>
          Create Account
        </button>
        <p onClick={() => navigate('/login')}>
          Already have an account? Sign in
        </p>
      </div>
    </div>
  );
};
