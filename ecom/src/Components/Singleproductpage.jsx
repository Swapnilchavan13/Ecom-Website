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
    <div id='singleproduct'>
        <div>
      <img src={product.image} alt={product.productname} />
        </div>

    <div>
      <h2>{product.productname}</h2>
      <p>Visit the Apple Store</p>
      <p>{product.rating} Star ⭐⭐⭐⭐⭐</p>
      <p className='psze'>Price: {product.price}</p>
      <p>Discount: {product.discount} Off</p>
</div>

<div className='thirddiv'>
      <p>Delivery: {product.delevery}</p>
      <h3>In stock</h3>
      <p>Sold by Darshita E-Zone and Fulfilled by Amazon.
<br />
        <button className='btn1'>Add To Cart</button>
        <br />
        <button className='btn2'>Buy Now</button>

</p>
</div>
    </div>
  );
};
