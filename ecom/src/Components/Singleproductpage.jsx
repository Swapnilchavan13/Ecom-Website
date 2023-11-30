import React, { useEffect, useState } from 'react';
import '../Styles/singleproduct.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Singleproductpage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
  
    // Check if the product is already in the cart
    const isProductInCart = existingCart.some((item) => JSON.stringify(item) === JSON.stringify(product));
  
    if (isProductInCart) {
      // Product is already in the cart, display a message or handle as needed
      toast.warn("Product is already in the cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // Update the cart in local storage
      const updatedCart = [...existingCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  
      // Update the cart state
      setCart(updatedCart);
  
      toast("Added To The Cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        draggable: true,
         closeOnClick: true,
        pauseOnHover: true,
       progress: undefined,
        theme: "light",
      });
    }
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

  return (
    <>
      <ToastContainer />
      <div id='singleproduct'>

        <div>
          <img src={product.productimage} alt={product.productname} />
        </div>

        <div>
          <p className='pname'>{product.productname}</p>
          <p>Visit the Apple Store</p>
          <p>{product.rating} Star Rating ⭐⭐⭐⭐⭐</p>
          <p className='psze'>₹ {product.productprice}/-</p>
          <p>Discount: {product.productdiscount}% Off</p>
        </div>

        <div className='thirddiv'>
          <p>Delivery: Within 3-4 days</p>
          <p className='tprice'>Price: ₹ {product.productprice}/-</p>
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
      className='bannerimg'
        src='https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_01._CB640700609_.jpg'
        alt=''
      />
      <img
      className='bannerimg'

        src='https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_06._CB640700609_.jpg'
        alt=''
      />
      <img
      className='bannerimg'

        src='https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_08._CB640700609_.jpg'
        alt=''
      />
    </>
  );
};
