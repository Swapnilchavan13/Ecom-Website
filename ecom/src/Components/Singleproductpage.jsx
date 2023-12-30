import React, { useEffect, useState } from 'react';
import '../Styles/singleproduct.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Singleproductpage = () => {
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [cart, setCart] = useState([]);
  const [mainImage, setMainImage] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Retrieve the product details from local storage
  const storedProductJSON = localStorage.getItem('selectedProduct');
  const product = JSON.parse(storedProductJSON);

  useEffect(() => {
    if (product && product.image_one) {
      setMainImage(product.image_one);
    }
  }, [product]);

 
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
  
  
  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };


  const discountedPrice = (product.productprice * (1 - product.productdiscount / 100)).toFixed(0);

  return (
    <>
      <ToastContainer />
      <div id='singleproduct'>
        <div>
          <img src={mainImage} alt={product.productname} style={{ maxWidth: '100%' }} />
          <div className="thumbnails">
            {[product.image_one, product.image_two, product.image_three, product.image_four, product.image_five].map((image, index) => (
              image && (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleImageClick(image)}
                  className="thumbnail"
                  style={{ maxWidth: '20%', cursor: 'pointer' }}
                />
              )
            ))}
          </div>
        </div>

        <div>
          <p className='pname'>{product.productname}</p>
          <p>Visit the Merchant Store {product.merchantid}</p>
          <p>{product.rating} Star Rating ⭐⭐⭐⭐⭐</p>
          <hr />
          <p className='psze'>₹ {discountedPrice}/-</p>
          <p>Discount: {product.productdiscount}% Off</p>
          <p style={{ textDecoration: 'line-through', fontSize:'15px' }} className='psze'>₹ {product.productprice}/-</p>
        <p>Inclusive of all taxes</p>
        <hr />
          <p>🔖% Offers: {product.productoffer}</p>
          <hr />
          <h5 style={{textAlign:'left'}}>Brand : {product.brand}</h5>
          <h5 style={{textAlign:'left'}}>Storage : {product.storage}</h5>
          <h5 style={{textAlign:'left'}}>Operating System : {product.operatingSystem}</h5>
          <h5 style={{textAlign:'left'}}>Cellular Technology : {product.cellularTechnology}</h5>
<hr />
          <h5 style={{textAlign:'left'}}>About this item</h5>
      {showFullDescription ? (
        <p>{product.productdescription}</p>
      ) : (
        <p>
          {product.productdescription.split('\n').slice(0, 1).join('\n')}
          <br />
          {product.productdescription.split('\n').length > 1 && (
            <p style={{color:'blue'}} onClick={toggleDescription}>See More Details</p>
          )}
        </p>
      )}
        </div>
        <div className='thirddiv'>
          <p>Delivery: Within {product.productdeliveryDate} days</p>
          <p className='tprice'>Price: ₹ {discountedPrice}/-</p>
          <p>Or fastest delivery, {Date()}. Order will be delivered Within {product.productdeliveryDate} days. Details</p>
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
