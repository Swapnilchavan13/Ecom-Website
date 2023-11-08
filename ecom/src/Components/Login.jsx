import React from 'react';
import '../Styles/login.css'

export const Login = () => {
  return (
    <div id='logindiv'>
        <br />
        <img width="180px" src="https://pngimg.com/d/amazon_PNG9.png" alt="" />

        <div className='mainlogindiv'>
            <h1>Sign in</h1>
            <label htmlFor="">Enter Email Id
            </label> <br />
            <input placeholder='Enter Email Id' type="text" />
<br />
            <label htmlFor="">Mobile Phone Number
            </label> <br />
            <input placeholder='Enter Mobile Number' type="number" />
<br />
            <label htmlFor="">Enter Password
            </label>
            <br />
            <input placeholder='Enter Password' type="password" />
<br />
<br />

            <button>Continue</button>

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
</p>
        </div>
        <div>
        <p>New to Amazon?</p>

        </div>
    </div>
  )
}
