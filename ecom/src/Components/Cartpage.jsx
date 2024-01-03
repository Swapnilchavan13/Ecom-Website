import React, { useState } from 'react';
import '../Styles/cartpage.css';
import { useNavigate } from 'react-router-dom';

export const Cartpage = () => {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    // Function to remove a product from the cart
    const removeProduct = (index) => {
        const updatedCart = [...cartData];
        updatedCart.splice(index, 1);
        setCartData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Check if cartData is not null or undefined before rendering
    if (!cartData || cartData.length === 0) {
        return (
            <div>
                <div>
                    <h1>Shopping Cart</h1>
                    <h1>😕 No items in the cart.</h1>
                </div>
            </div>
        );
    }

    const ProceedBuy = () => {
        navigate('/checkoutpage')
    }

    // Calculate subtotal dynamically
    const subtotal = cartData.reduce((acc, product) => acc + +product.productprice, 0);

    return (
        <div className='maincartdiv'>
            <div>
                <h1>Shopping Cart</h1>
                <hr />
                <div className='smaincart'>
                    <div>
                        {cartData.map((product, index) => (
                            <div className='secondcart' key={index}>
                                <div>
                                    <img src={product.image_one} alt={product.productname} />
                                </div>
                                <div>
                                    <h2>{product.productname}</h2>
                                    <p>Price: ₹ {product.productprice} /-</p>
                                    <p>Discount: {product.productdiscount}%</p>
                                    <p>Delivery: Free Delivery by Amazon</p>
                                    <button className='removebtn' onClick={() => removeProduct(product._id)}>Remove</button>
                                    <hr />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='subtotaldiv'>
                        <h3>Subtotal: ₹ {subtotal} /-</h3>
                        <button onClick={ProceedBuy} className='cartbtn'>Proceed to Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
