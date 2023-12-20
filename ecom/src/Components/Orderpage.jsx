import React, { useState, useEffect } from 'react';
import '../Styles/order.css';

export const Orderpage = () => {
  const [orders, setOrders] = useState([]);
  const uid = localStorage.getItem('uid');

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://62.72.59.146:3008/allorders')
      .then(response => response.json())
      .then(data => {
        // Filter orders based on the username
        const userOrders = data.filter(order => order.userId === uid);
        setOrders(userOrders);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [uid]);


  const handleDelete = async (orderId) => {
    try {
      await fetch(`http://62.72.59.146:3008/allorders/${orderId}`, {
        method: 'DELETE',
      });
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };
  
  return (
    <div className="order-page">
      <h1 className="page-title">My Orders</h1>
      {orders.length === 0 ? (
        <h1 className="no-orders-message">🚫 You have no orders.</h1>
      ) : (
        <ul className="order-list">
          {orders.map(order => (
            <li key={order._id} className="order-item">
              <h3 className="order-id">Order ID: {order._id}</h3>
              <p className="order-total">Total: ₹{order.total}</p>
              <p className="order-address">Address: {order.address}</p>
              <p className="order-payment-method">Payment Method: {order.paymentMethod}</p>
              <p className="order-payment-method">Order Date: {order.orderdate}</p>
              <h4 className="product-title">Products:</h4>
              <ul className="product-list">
                {order.products.map(product => (
                  <li key={product._id} className="product-item">
                    {product.quantity} x {product.productName} - ₹{product.price}
                    <br />
                    <br />
                    <img width="50px" src={product.productImage} alt="" />
                  </li>
                ))}
              </ul>
              <br />
              <button
                className={`cancel-button ${order.status ? 'grey-bg' : ''}`}
                onClick={() => handleDelete(order._id)}
                disabled={order.status}
              >
                Cancel Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};