import React, { useEffect, useState } from 'react';
import '../Styles/singleproduct.css';
import { useNavigate } from 'react-router-dom';

export const Singleproductpage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Retrieve the product details from local storage
  const storedProductJSON = localStorage.getItem('selectedProduct');
  const product = JSON.parse(storedProductJSON);

  // Check if there is a selected product in local storage
  if (!product) {
    return <div>No product selected.</div>;
  }

  const addToCart = () => {
    // Retrieve existing cart data from local storage
    const existingCartJSON = localStorage.getItem('cart');
    const existingCart = existingCartJSON ? JSON.parse(existingCartJSON) : [];

    // Merge the new product with the existing cart data
    const updatedCart = [...existingCart, product];
    
    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Update the cart state
    setCart(updatedCart);

    alert("Added To The Cart")
  };

  const Buynow = () => {

    const existingCartJSON = localStorage.getItem('cart');
    const existingCart = existingCartJSON ? JSON.parse(existingCartJSON) : [];

    // Merge the new product with the existing cart data
    const updatedCart = [...existingCart, product];
    
    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Update the cart state
    setCart(updatedCart);


    navigate('/checkoutpage');
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div id='singleproduct'>
        <div>
          <img src={product.image} alt={product.productname} />
        </div>

        <div>
          <p className='pname'>{product.productname}</p>
          <p>Visit the Apple Store</p>
          <p>{product.rating} Star ⭐⭐⭐⭐⭐</p>
          <p className='psze'>-{product.discount} ₹ {product.price}/-</p>
          <p>Discount: {product.discount} Off</p>
        </div>

        <div className='thirddiv'>
          <p>Delivery: {product.delevery}</p>
          <p className='tprice'>Price: ₹ {product.price}/-</p>
          <p>Or fastest delivery Tomorrow, 10 November. Order within 12 hrs. Details</p>
          <p className='stock'>In stock</p>
          <p>Sold by Darshita E-Zone and Fulfilled by Amazon.</p>
          <p>GreyOwl Pvt Ltd, Juhu, Mumbai.</p>
          <br />
          <button className='btn1' onClick={addToCart}>
            Add To Cart
          </button>
          <br />
          <button onClick={Buynow} className='btn2'>
            Buy Now
          </button>
        </div>
      </div>
      <img
        src='https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_01._CB640700609_.jpg'
        alt=''
      />
      <img
        src='https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_06._CB640700609_.jpg'
        alt=''
      />
      <img
        src='https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_08._CB640700609_.jpg'
        alt=''
      />
    </>
  );
};
