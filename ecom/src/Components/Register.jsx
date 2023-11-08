import React from 'react';
import '../Styles/login.css'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate()
  return (
    <div id='logindiv'>
        <br />
        <img width="180px" src="https://pngimg.com/d/amazon_PNG9.png" alt="" />

        <div className='mainlogindiv'>
            <h1>Create Account</h1>
            <label htmlFor="">Your Name
            </label> <br />
            <input placeholder='Enter Your Name' type="number" />
<br />
            <label htmlFor="">Mobile Number
            </label> <br />
            <input placeholder='Enter Mobile Number' type="number" />
<br />
            <label htmlFor="">Enter Password
            </label>
            <br />
            <input placeholder='Enter Password' type="password" />
<br />
<br />
            <button className='btn'>Create Account</button>
            <p onClick={()=> navigate('/login')}>Already have an account? 
                Sign in
</p>

        </div>

    </div>
  )
}
