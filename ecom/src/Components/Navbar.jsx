import React from 'react';
import '../Styles/navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const Uname = localStorage.getItem('username') || "Account";

  return (
    <>
    <div id='navbarmain'>
        <div>
            <Link to="/">
            <img width="120px" src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="" />
            </Link>
        </div>
        <div>
            <h3>🌍 Location</h3>
        </div>
        <div id='searchdiv'>
            <input placeholder='Search Greyowl.in' type="text" name="" id="" />
            <button>🔍</button>
        </div>
        <div>
            <Link to='login'>
            <h3>👨🏻‍💼 {Uname}</h3>
            </Link>
        </div>

        <div>    
        <p>🔁 Returns</p>
        <h4>& Orders</h4>
        </div>

        <div>
            <Link to="cartpage">
            <h3>🛒 Cart</h3>
            </Link>
        </div>
    </div>
    <div id='subnavbar'>
<h5>All</h5>
<h5>Amazon MiniTV</h5>
<h5>Sell</h5>
<h5>Amazon Pay</h5>
<h5>Gifts Cards</h5>
<h5>Buy Again</h5>
<h5>Gift Ideas</h5>
<h5>Haelth, Household & Personal Care</h5>
</div>
 </>
  )
}
