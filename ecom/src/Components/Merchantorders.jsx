import React, { useEffect, useState } from 'react';
import { Navbarmarchant } from './Navbarmarchant';
import '../Styles/merchantorder.css';

export const Merchantorders = () => {
  const [merchantId, setMerchantId] = useState(""); // State to store the merchantId
  const [orders, setOrders] = useState([]); // State to store orders

  useEffect(() => {
    // Step 1: Retrieve merchantId from local storage
    const storedMerchantId = localStorage.getItem('merchantid');
    if (storedMerchantId) {
      setMerchantId(storedMerchantId);

      // Step 2: Make a request to the API endpoint
      fetch('http://localhost:3008/allorders')
        .then(response => response.json())
        .then(data => {
          // Step 3: Filter orders based on merchantId
          const filteredOrders = data.filter(order => {
            if (order.products && order.products.length > 0) {
              return order.products.some(product => product.merchantId === storedMerchantId);
            }
            return false;
          });
          setOrders(filteredOrders);
        })
        .catch(error => console.error('Error fetching orders:', error));
    }
  }, []); 
  // Empty dependency array means this effect will only run once on component mount

  return (
    <>
      <Navbarmarchant />
        <h2>Merchant Orders</h2>
      <div className="merchant-orders-container">
        {orders.map(order => (
          <div key={order._id} className="order-card">
            {/* Display relevant order details here */}
            <p className="order-info">Order ID: {order._id}</p>
            <p className="order-info">User ID: {order.userId}</p>
            <p className="order-info">Order Date: {new Date(order.orderdate).toLocaleString()}</p>
            <p className="order-info">Address: {order.address}</p>
            <p className="order-info">Payment Method: {order.paymentMethod}</p>
            <p className="order-info">Total: {order.total}</p>
            <p className="order-info">Status: {order.status ? 'Completed' : 'Pending'}</p>

            <h3 className="product-heading">Products:</h3>
            {order.products.map(product => (
              <div key={product._id} className="product-card">
                <p className="product-info">Product Name: {product.productName}</p>
                <img src={product.productImage} alt="" className="product-image" />
                <p className="product-info">Quantity: {product.quantity}</p>
                <p className="product-info">Price: {product.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};