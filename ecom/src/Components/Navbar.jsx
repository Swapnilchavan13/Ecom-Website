import React, { useEffect, useState } from 'react';
import '../Styles/navbar.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const Uname = localStorage.getItem('username') || "Account";
    const [currlocation, setCurrlocation] = useState({});

    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        try {
            const response = await axios.get("https://ipapi.co/json");
            setCurrlocation(response.data);
        } catch (error) {
            console.error('Error getting location:', error);
        }
    };

    const types = ['Electronics', 'Clothing', 'Shoes', 'Cosmetics'];

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        localStorage.setItem("type", searchInput);
        navigate('/products');
        window.location.reload();
    };

    

    return (
        <>
            <div id='navbarmain'>
                <div>
                    <Link to="/">
                        <img width="120px" src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="" />
                    </Link>
                </div>
                <div>
                    <h3>🌍{currlocation.city ? currlocation.city : "Location"}</h3>
                </div>
                <div id='searchdiv'>
                    <input 
                        placeholder='Search Greyowl.in' 
                        type="text"
                        list="types-list"
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    <datalist id="types-list">
                        {types.map((type, index) => (
                            <option key={index} value={type} />
                        ))}
                    </datalist>
                    <button onClick={handleSearch}>🔍</button>
                </div>
                <div>
                    <Link to='login'>
                        <h3>👨🏻‍💼 {Uname}</h3>
                    </Link>
                </div>

                <div>
                    <Link to='merchantregistration'>
                        <h3>Merchant</h3>
                    </Link>
                </div>

                <div>
                    <Link to="orderpage">
                        <p>🔁 Returns</p>
                        <h4>& Orders</h4>
                    </Link>
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
