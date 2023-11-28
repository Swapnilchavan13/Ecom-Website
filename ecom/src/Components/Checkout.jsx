import React, { useState, useEffect } from 'react';
import '../Styles/checkout.css'
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const navigate = useNavigate()
    const isLogin = localStorage.getItem('isLoginSuccessful') || false;
    const username = localStorage.getItem('username');
    const user = localStorage.getItem('username')
    const usermobile = localStorage.getItem('usermobile');
    // Retrieve the product details from local storage
    const storedProductJSON = localStorage.getItem('cart');

    const [userData, setUserData] = useState('');
    const [products, setProducts] = React.useState(JSON.parse(storedProductJSON) || []);

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [address, setAddress] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3005/userdata`);
                const data = await response.json();

                if (response.ok) {
                    // Find the user that matches both username and usernumber
                    const matchingUser = data.find(user => user.username === username && user.usernumber === usermobile);

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


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRemoveProduct = (index) => {
        // Remove the product at the specified index from the products array
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        // Update local storage and state
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    };

    const subtotal = products.reduce((acc, product) => acc + +product.productprice, 0);

    const Placeorder = () => {
        if (isLogin) {
            alert("Page Under Construction")
        }
        else {
            alert("Please Login First")
            navigate('/login')
        }
    }

    const showPopup = () => {
        setPopupVisible(true);
    };

    const saveAddress = async () => {
        try {
            const userId = userData._id;
            const response = await fetch(`http://localhost:3005/userdata/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    useraddress: address,
                }),
            });

            const data = await response.json();
            console.log(data.message);

            setPopupVisible(false);
        } catch (error) {
            console.error('Error saving address:', error);
        }
        window.location.reload()
    };

    const cancelButton = () => {
        setPopupVisible(false);
    }

    return (
        <div id='maincheckoutdiv'>
            <div>
                <div id='checkoutnav'>
                    <h2>Checkout</h2>
                </div>
                <div id='checkoutmain'>
                    <div>
                        <div className='ckeckoutdetails'>
                            <div className='middiv'>
                                <h3>1 Delivery address</h3>
                            </div>
                            <div className='middiv'>
                                <h4>{user} <br /> {userData.useraddress}</h4>
                            </div>
                            <h4 className='change' onClick={showPopup}>Change/Add</h4>
                            <br />
                        </div>

                        {isPopupVisible && (
                            <div className="popup">
                                <input
                                    className="address-input"
                                    placeholder='Enter Your House No. Street with City And Pincode'
                                    type="text"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <br />
                                <button onClick={saveAddress} className="save-button">
                                    Save Address
                                </button>

                                <button onClick={cancelButton} className="cancel-button">
                                    Cancel
                                </button>
                            </div>
                        )}
                        <hr />
                        <div className='ckeckoutdetails'>
                            <div className='middiv'>
                                <h3>2 Payment method</h3>
                            </div>
                            <div className='middiv'>
                                <label htmlFor="Cod">
                                    <input type="radio" />
                                    COD
                                </label>
                                <br />
                                <label htmlFor="Upi">
                                    <input type="radio" />
                                    UPI
                                </label>
                                <br />
                                <label htmlFor="Net">
                                    <input type="radio" />
                                    Net Banking
                                </label>
                            </div>
                            <p>Change</p>
                        </div>
                        <hr />
                        <div className='ckeckoutdetails'>
                            <div className='middiv'>
                                <h3>3 Review Items</h3>
                            </div>
                            <div>
                                {products.map((product, index) => (
                                    <div style={{ border: "1px solid grey", borderRadius: '10px', padding: '20px', marginTop: '5px' }} key={index} className='middiv'>
                                        <img src={product.productimage} alt="" />
                                        <p>{product.productname}</p>
                                        <select name="" id="">
                                            <option value="1">Qty</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                        <p>₹ {product.productprice}/-</p>
                                        <button className='backto' onClick={() => handleRemoveProduct(index)}>Remove</button>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <p>Change</p>
                        </div>
                        <hr />
                    </div>
                    <div id='rightdiv'>
                        <button onClick={Placeorder}>Place Your Order and Pay</button>
                        <p>By placing your order, you agree to Amazon's <br /> privacy notice and conditions of use.</p>
                        <hr />
                        <h3>Order Summary</h3>
                        <div className='ordersubdiv'>
                            <p>Item:</p>
                            <p>{products.length} Items</p>
                        </div>
                        <div className='ordersubdiv'>
                            <p>Delivery:</p>
                            <p>FREE</p>
                        </div>
                        <div className='ordersubdiv'>
                            <p>Total:</p>
                            <p>₹ {subtotal}/-</p>
                        </div>
                        <div className='ordersubdiv'>
                            <p>Promotion Applied:</p>
                            <p>₹ 0.00 /-</p>
                        </div>
                        <hr />
                        <div className='ordersubdiv'>
                            <h3>Order Total:</h3>
                            <h3>₹ {subtotal} /-</h3>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='lastdiv'>
                <button onClick={Placeorder} className='lastbtn'>Place Your Order and Pay</button>
                <h3>Order Total:₹ {subtotal}/-</h3>
            </div>
        </div>
    )
}