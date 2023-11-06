import React from 'react';
import '../Styles/navbar.css';

export const Navbar = () => {
  return (
    <div id='navbarmain'>
        <div>
            <img width="120px" src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="" />
        </div>
        <div>
            <h3>📍Location</h3>
        </div>
        <div id='searchdiv'>
            <input placeholder='Search Greyowl.in' type="text" name="" id="" />
            <button>🔍</button>
        </div>
        <div>
            <h3>Account</h3>
        </div>
        <div>
            <h3>Returns <br />& Orders</h3>
        </div>
        <div>
            <h3>🛒(0) Cart</h3>
        </div>
    </div>
  )
}
