import React from 'react';
import '../Styles/cartpage.css'

export const Cartpage = () => {
    // Retrieve cart data from local storage and parse it
    const cartData = JSON.parse(localStorage.getItem('cart'));

    // Check if cartData is not null or undefined before rendering
    if (!cartData) {
        return (
            <div>
                <div>
                    <h1>Shopping Cart</h1>
                    <p>No items in the cart.</p>
                </div>
            </div>
        );
    }

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
                                <img src={product.image} alt={product.productname} />
                            </div>

                            <div>
                                <h2>{product.productname}</h2>
                                <p>Price: {product.price}</p>
                                <p>Discount: {product.discount}</p>
                                <p>Delivery: {product.delevery}</p>
                            <hr />
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className='subtotaldiv'>
                        <h3>Subtotal: Rs. 96,498.00 /-</h3>
                        <button className='cartbtn'>Proceed to Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
