import React from 'react';
import '../Styles/checkout.css'

export const Checkout = () => {

    // Retrieve the product details from local storage
  const storedProductJSON = localStorage.getItem('selectedProduct');
  const product = JSON.parse(storedProductJSON);

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
                            <div className='middiv'>
                                <img src={product.image} alt="" />
                                <p>Name: {product.productname}</p>
                                <select name="" id="">
                                <option value="1">Qty</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                                <p>{product.price}/-</p>
                            </div>
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
                        <p>{product.price} /-</p>
                      </div>
                      <div className='ordersubdiv'>
                        <p>Delivery:</p>
                        <p>₹ 0.00 /-</p>
                      </div>
                      <div className='ordersubdiv'>
                        <p>Total:</p>
                        <p>{product.price} /-</p>
                      </div>
                      <div className='ordersubdiv'>
                        <p>Promotion Applied:</p>
                        <p>₹ 0.00 /-</p>
                      </div>
                      <hr />
                      <div className='ordersubdiv'>
                        <h3>Order Total:</h3>
                        <h3>{product.price} /-</h3>
                      </div>
                    </div>
                </div>
            </div>
           
            <br />
            <div className='lastdiv'>
                <button className='lastbtn'>Place Your Order and Pay</button>
            <h3>Order Total:{product.price} /-</h3>
            </div>

        </div>
        
    )
}
