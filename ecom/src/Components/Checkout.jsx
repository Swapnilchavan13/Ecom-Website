import React, { useEffect } from 'react';
import '../Styles/checkout.css'

export const Checkout = () => {

    // Retrieve the product details from local storage
    const storedProductJSON = localStorage.getItem('cart');
    // const products = JSON.parse(storedProductJSON);
    const [products, setProducts] = React.useState(JSON.parse(storedProductJSON) || []);


    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount


    const handleRemoveProduct = (index) => {
        // Remove the product at the specified index from the products array
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        // Update local storage and state
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
      };

    const subtotal = products.reduce((acc, product) => acc + +product.productprice, 0);

    

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
                                <h3>1  Delivery address</h3>
                            </div>
                            <div className='middiv'>
                                <p>User Name <br /> Home No. 333, Juhu , Mumbai <br />
                                    Near Of Iskon Temple</p>
                            </div>
                            <p>Change</p>
                        </div>
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
                                <h3>3  Review Items</h3>
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
                        <button>Place Your Order and Pay</button>
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
                <button className='lastbtn'>Place Your Order and Pay</button>
                <h3>Order Total:₹ {subtotal}/-</h3>
            </div>

        </div>

    )
}
