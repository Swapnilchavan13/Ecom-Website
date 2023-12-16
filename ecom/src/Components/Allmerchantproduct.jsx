import React, { useEffect, useState } from 'react';
import { Navbarmarchant } from './Navbarmarchant';
import '../Styles/allmerchantproduct.css';

export const Allmerchantproduct = () => {
  const [merchantId, setMerchantId] = useState('');
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedMerchantId = localStorage.getItem('merchantid');
    if (storedMerchantId) {
      setMerchantId(storedMerchantId);

      fetch(`http://localhost:3008/allproducts/${storedMerchantId}`)
        .then(response => response.json())
        .then(data => {
          setProductData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, []);

  const handleDelete = async (productId) => {
    try {
      // Make a DELETE request to your API endpoint
      await fetch(`http://localhost:3008/deleteProduct/${productId}`, {
        method: 'DELETE',
      });

      // Update the state to reflect the changes
      setProductData(productData.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <Navbarmarchant />
      <div className="all-merchant-product-container">
        <h1 className="title">All Merchant Products</h1>
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : (
          <div className="product-list">
            {productData.map(product => (
              <div key={product._id} className="product-item">
                <h6 className="product-name">{product.productname}</h6>
                <img className="product-image" src={product.productimage} alt={product.productname} />
                <p className="product-price">Price: {product.productprice}</p>
                <p className="product-discount">Discount: {product.productdiscount}%</p>
                <p className="product-quantity">Quantity: {product.productquantity}</p>
                <button className="delete-button" onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
