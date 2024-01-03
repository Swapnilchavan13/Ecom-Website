import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/merchantdata.css'; // Import the CSS file
import { Navbarmarchant } from './Navbarmarchant';

export const Merchantdatapage = () => {
  const navigate = useNavigate();
  const [merchantData, setMerchantData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the merchant id from localStorage
        const merchantId = localStorage.getItem('merchantid');

        if (!merchantId) {
          navigate('/merchantlogin');
          return;
        }

        // Fetch all merchants
        const response = await fetch('http://62.72.59.146:3008/allmerchants');
        const merchants = await response.json();

        const matchingMerchant = merchants.find((merchant) => merchant._id === merchantId);

        if (matchingMerchant) {
          setMerchantData(matchingMerchant);
        } else {
          console.error('Merchant not found');
        }
      } catch (error) {
        console.error('Error fetching merchant data:', error);
      }
    };
    fetchData();
  }, [navigate]);

  const handleBack = () => {
    localStorage.removeItem('merchantid');
    navigate('/merchantlogin'); 
    window.location.reload();
  };

  return (
    <>
    <Navbarmarchant />
    <div className="merchant-data-container">
      {merchantData ? (
      <>
          <h1 className="merchant-title">Merchant Details</h1>
          <div className="merchant-details">
            <p><span className="detail-label">Business Name:</span> {merchantData.businessName}</p>
            <p><span className="detail-label">Business Type:</span> {merchantData.businessType}</p>
            <p><span className="detail-label">Location:</span> {merchantData.loaction}</p>
            <p><span className="detail-label">Business Address:</span> {merchantData.businessAddress}</p>
            <p><span className="detail-label">Business Phone:</span> {merchantData.businessPhone}</p>
            <p><span className="detail-label">Business Email:</span> {merchantData.businessEmail}</p>
            <p><span className="detail-label">Owner Name:</span> {merchantData.ownerName}</p>
            <p><span className="detail-label">Owner Phone:</span> {merchantData.ownerPhone}</p>
          </div>
          <button className="back-button" onClick={handleBack}>Logout</button>
      </>
      ) : (
        <p>Loading...</p>
        )}
    </div>
    </>
  );
};
