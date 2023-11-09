import React from 'react';
import '../Styles/singleproduct.css'

export const Singleproductpage = () => {
  // Retrieve the product details from local storage
  const storedProductJSON = localStorage.getItem('selectedProduct');
  const product = JSON.parse(storedProductJSON);

  // Check if there is a selected product in local storage
  if (!product) {
    return <div>No product selected.</div>;
  }

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
      <p className='psze'>-{product.discount} {product.price}</p>
      <p>Discount: {product.discount} Off</p>
</div>

<div className='thirddiv'>
      <p>Delivery: {product.delevery}</p>
      <p className='tprice'>Price: {product.price}</p>
      <p>Or fastest delivery Tomorrow, 10 November. Order within 12 hrs. Details</p>
      <p className='stock'>In stock</p>
      <p>Sold by Darshita E-Zone and Fulfilled by Amazon.
      <p>GreyOwl Pvt Ltd, Juhu, Mumbai.</p>
<br />
        <button className='btn1'>Add To Cart</button>
        <br />
        <button className='btn2'>Buy Now</button>

</p>
</div>
    </div>
    <img src="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_01._CB640700609_.jpg" alt="" />
   <img src="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_06._CB640700609_.jpg" alt="" />
    <img src="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Aplus_content/13_desk/iPhone_13_Product_Page_Flex_Module_Amazon_Desktop_Avail_1500__en-IN_08._CB640700609_.jpg" alt="" />
    </>
  );
};
