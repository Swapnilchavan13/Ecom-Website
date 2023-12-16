import React, { useEffect, useState } from 'react';
import { Navbarmarchant } from './Navbarmarchant';

export const Merchantorders = () => {
  const [mercahntId, setMerchantId] = useState(""); // State to store the merchantId
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
  }, []); // Empty dependency array means this effect will only run once on component mount

  return (
    <>
      <Navbarmarchant />
      <div>
        <h2>Merchant Orders</h2>
        {orders.map(order => (
          <div key={order._id}>
            {/* Display relevant order details here */}
            <p>Order ID: {order._id}</p>
            <p>Total: {order.total}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </>
  );
};
