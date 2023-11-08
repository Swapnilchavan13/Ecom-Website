import React from 'react';
import '../Styles/login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate =useNavigate()

  const newaccount = ()=> {
    navigate('/register')
  }
  return (
    <div id='logindiv'>
        <br />
        <img width="180px" src="https://pngimg.com/d/amazon_PNG9.png" alt="" />

        <div className='mainlogindiv'>
            <h1>Sign in</h1>
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

            <button className='btn'>Continue</button>

            <p>By continuing, you agree to Amazon's Conditions <br /> of Use and Privacy Notice.
</p>
        </div>
        <div>
        <p>New to Amazon?</p>
        <button onClick={newaccount} className='btn2'>Create your Amazon account</button>
<br />
<br />

        </div>
    </div>
  )
}
