import React, { useState, useEffect } from 'react';
import '../Styles/checkout.css';
import { useNavigate } from 'react-router-dom';
import { Cardpayment } from './Cardpayment';

export const Checkout = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('isLoginSuccessful') || false;
  const username = localStorage.getItem('username');
  const user = localStorage.getItem('username');
  const usermobile = localStorage.getItem('usermobile');

  // Retrieve the product details from local storage
  const storedProductJSON = localStorage.getItem('cart');

  const [userData, setUserData] = useState('');
  const [products, setProducts] = React.useState(JSON.parse(storedProductJSON) || []);

  const [orderPopupVisible, setorderPopupVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [address, setAddresses] = useState([{ street: '', city: '', pincode: '' }]);

  const [quantity, setQuantity] = useState(products.map(() => 1)); // initialize with default quantity of 1 for each product

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://62.72.59.146:3008/userdata');
        const data = await response.json();

        if (response.ok) {
          // Find the user that matches both username and usernumber
          const matchingUser = data.find(user => user.username === username && user.usernumber === usermobile);

          if (matchingUser) {
            setUserData(matchingUser);
          } else {
            console.error('User not found');
          }
        } else {
          console.error('Error fetching user data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
      }
    };

    fetchData();
  }, [username, usermobile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemoveProduct = (index) => {
    // Remove the product at the specified index from the products array
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);

    // Update local storage and state
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  // const subtotal = products.reduce((acc, product) => acc + +product.productprice, 0);
  const subtotal = products.reduce((acc, product, _id) => acc + +
  (product.productprice * (1 - product.productdiscount / 100)).toFixed(0)* quantity[_id], 0);

  console.log(Date());
  

  const Placeorder = async () => {
    if (isLogin) {

    const addressValidationRegex = /[A-Za-z0-9]+/;
    if (!userData.useraddress || !addressValidationRegex.test(userData.useraddress)) {
      alert('Please enter a valid address');
      setPopupVisible(true)
      return; // Stop the function here if the address is invalid
    }
  
      try {
        // Create an order object with relevant data
        const orderData = {
            userId: userData._id,
            orderdate: Date(),
            products: products.map((product, index) => ({
            merchantId: product.merchantid,
            productId: product._id, // Assuming your product model has an "_id" property
            productName: product.productname,
            productImage: product.image_one,
            quantity: quantity[index],
            price: product.productprice * quantity[index],
          })),
          address: userData.useraddress,
          paymentMethod: selectedPaymentOption, // Update this based on the selected payment method
          total: subtotal,
          status: false,
        };

        // Make a POST request to your backend API
        const response = await fetch('http://62.72.59.146:3008/createorder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          console.log('Order placed successfully');
          localStorage.removeItem('cart');
          localStorage.removeItem('order');
          setorderPopupVisible(true); // Show the popup
        } else {
          console.error('Failed to place order:', response.statusText);
          alert('Failed to place order');
        }
      } catch (error) {
        console.error('Error placing order:', error);
        alert('Error placing order');
      }
    } else {
      alert('Please Login First');
      navigate('/login');
    }
  };

  const [selectedPaymentOption, setSelectedPaymentOption] = useState('COD'); // Set default payment option to COD

  const showPopup = () => {
    setPopupVisible(true);
  };

  const saveAddress = async () => {
    try {
      const userId = userData._id;
      const response = await fetch(`http://62.72.59.146:3008/userdata/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          useraddress: address.map(addr => `${addr.street}, ${addr.city}, ${addr.pincode}`).join(' | '),
        }),
      });
 
      const data = await response.json();
      console.log(data.message);
 
      setPopupVisible(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
    window.location.reload();
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const handleQuantityChange = (e, index) => {
    const newQuantity = [...quantity];
    newQuantity[index] = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const closePopup = () => {
    setorderPopupVisible(false);
    navigate('/');
  };

  const handleAddressChange = (index, e) => {
    const newAddresses = address.map((address, addrIndex) => {
      if (index !== addrIndex) return address;
      return { ...address, [e.target.name]: e.target.value };
    });
    setAddresses(newAddresses);
  };


  return (
    <div id="maincheckoutdiv">
      <div>
        <div id="checkoutnav">
          <h2>Checkout</h2>
        </div>
        <div id="checkoutmain">
          <div>
            <div className="ckeckoutdetails">
              <div className="middiv">
                <h3>1 Delivery address</h3>
              </div>
              <div className="middiv">
                <h4>{user} <br /> {userData.useraddress}</h4>
              </div>
              <h4 className="change" onClick={showPopup}>Change/Add</h4>
              <br />
            </div>

            {isPopupVisible && (
       <div className="popup2">
         {address.map((address, index) => (
           <div key={index}>
             <input
               className="address-input"
               placeholder='House No. and Street'
               name="street"
               type="text"
               value={address.street}
               onChange={(e) => handleAddressChange(index, e)}
             />
             <br />
             <input
               className="address-input"
               placeholder='Enter City'
               name="city"
               type="text"
               value={address.city}
               onChange={(e) => handleAddressChange(index, e)}
             />
             <br />
             <input
               className="address-input"
               placeholder='Enter Pincode'
               name="pincode"
               type="text"
               value={address.pincode}
               onChange={(e) => handleAddressChange(index, e)}
             />
           </div>
         ))}
        
         <br />
         <button onClick={saveAddress} className="save-button">
           Save Address
         </button>
         <button onClick={hidePopup} className="cancel-button">
           Cancel
         </button>

           
         </div>
       )} 
            <hr />

            <div className="ckeckoutdetails">
              <div className="middiv">
                <h3>2 Payment method</h3>
              </div>
              <div className="middiv">
                <label htmlFor="Cod">
                  <input
                    type="radio"
                    checked={selectedPaymentOption === 'COD'}
                    onChange={() => setSelectedPaymentOption('COD')}
                  />
                  COD
                </label>
                <br />
                <label htmlFor="Upi">
                  <input
                    type="radio"
                    checked={selectedPaymentOption === 'UPI'}
                    onChange={() => setSelectedPaymentOption('UPI')}
                    disabled
                  />
                  UPI
                </label>
                <br />
                <label htmlFor="Card">
                  <input
                    type="radio"
                    checked={selectedPaymentOption === 'Card Payment'}
                    onChange={() => setSelectedPaymentOption('Card Payment')}
                  />
                  Card Payment
                </label>
                {selectedPaymentOption === 'Card Payment' && <Cardpayment />}
              </div>
              <p>Change</p>
            </div>
            <hr />
            <div className="ckeckoutdetails">
              <div className="middiv">
                <h3>3 Review Items</h3>
              </div>
              <div className='pdata'>
                {products.map((product, index) => (
                  <div
                    style={{
                      border: '1px solid grey',
                      borderRadius: '10px',
                      padding: '20px',
                      marginTop: '5px',
                    }}
                    key={index}
                    className="middiv"
                  >
                    <img src={product.image_one} alt="" />
                    <p>{product.productname}</p>
                    <select
                      name=""
                      id=""
                      value={quantity[index]}
                      onChange={(e) => handleQuantityChange(e, index)}
                    >
                      <option value="1">Qty 1</option>
                      <option value="2">Qty 2</option>
                      <option value="3">Qty 3</option>
                      <option value="4">Qty 4</option>
                      <option value="5">Qty 5</option>
                      <option value="6">Qty 6</option>
                    </select>
                    <p>₹ {subtotal}/-</p>
                    <button className="backto" onClick={() => handleRemoveProduct(index)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <br />
              <p className='lstchange'>Change</p>
            </div>
            <hr />
          </div>
          <div id="rightdiv">
            <button onClick={Placeorder}>Place Your Order and Pay</button>
            <p>
              By placing your order, you agree to Amazon's <br />
              privacy notice and conditions of use.
            </p>
            <hr />
            <h3>Order Summary</h3>
            <div className="ordersubdiv">
              <p>Item:</p>
              <p>{products.length} Items</p>
            </div>
            <div className="ordersubdiv">
              <p>Delivery:</p>
              <p>FREE</p>
            </div>
            <div className="ordersubdiv">
              <p>Total:</p>
              <p>₹ {subtotal}/-</p>
            </div>
            <div className="ordersubdiv">
              <p>Promotion Applied:</p>
              <p>₹ 0.00 /-</p>
            </div>
            <hr />
            <div className="ordersubdiv">
              <h3>Order Total:</h3>
              <h3>₹ {subtotal} /-</h3>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="lastdiv">
        <button onClick={Placeorder} className="lastbtn">Place Your Order and Pay</button>
        <h3>Order Total:₹ {subtotal}/-</h3>
      </div>

      {orderPopupVisible && (
        <div className="popup-container">
          <div className="popup-content">
            <img onClick={closePopup} src="https://cdn.dribbble.com/users/282075/screenshots/4756095/icon_confirmation.gif" alt="Order Placed" />
            <h2> Order Placed Successfully! </h2>
          </div>
        </div>
      )}
    </div>
  );
};


