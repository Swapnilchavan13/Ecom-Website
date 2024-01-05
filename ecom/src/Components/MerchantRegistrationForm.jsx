import React, { useState } from 'react';
import '../Styles/merchant.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const MerchantRegistrationForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    loaction: '',
    businessAddress: '',
    businessPhone: '',
    businessEmail: '',
    ownerName: '',
    ownerPhone: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://62.72.59.146:3008/merchantdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {

          console.log('Merchant registered successfully!');
          toast.success('Merchant Register Successful', {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          navigate('/merchantlogin');
          // You can handle success as needed
        } else {
          alert(data.errorMessage);
          console.error('Failed to register merchant');
          // Handle errors appropriately
        }
      } else {
        alert('Business Email or phone number already in use');
        console.error('Failed to register merchant');
        // Handle errors appropriately
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <form className="merchant-form" onSubmit={handleSubmit}>
      <Link to="/merchantlogin">
        <h3 style={{ color: "blue" }}>Already have an account</h3>
      </Link>
      <h2>Merchant Registration Form</h2>
      <label htmlFor="businessName" className="form-label">
        Business Name:
        <input
          type="text"
          id="businessName"
          name="businessName"
          className="form-input"
          value={formData.businessName}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="businessType" className="form-label">
        Business Type:
        <select
          id="businessType"
          name="businessType"
          className="form-input"
          value={formData.businessType}
          onChange={handleInputChange}
        >
          <option value="">Select Business Type</option>
          <option value="soleProprietorship">Sole Proprietorship</option>
          <option value="llc">Limited Liability Company (LLC)</option>
          <option value="corporation">Corporation</option>
          <option value="partnership">Partnership</option>
          <option value="nonProfit">Non-Profit Organization</option>
          <option value="cooperative">Cooperative</option>
        </select>
      </label>

      <label htmlFor="loaction" className="form-label">
        Location:
        <input
          type="text"
          id="loaction"
          name="loaction"
          className="form-input"
          value={formData.loaction}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="businessAddress" className="form-label">
        Business Address:
        <input
          type="text"
          id="businessAddress"
          name="businessAddress"
          className="form-input"
          value={formData.businessAddress}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="businessPhone" className="form-label">
        Business Phone:
        <input
          type="tel"
          id="businessPhone"
          name="businessPhone"
          className="form-input"
          value={formData.businessPhone}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="businessEmail" className="form-label">
        Business Email:
        <input
          type="email"
          id="businessEmail"
          name="businessEmail"
          className="form-input"
          value={formData.businessEmail}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="ownerName" className="form-label">
        Owner Name:
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          className="form-input"
          value={formData.ownerName}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="ownerPhone" className="form-label">
        Owner Phone:
        <input
          type="tel"
          id="ownerPhone"
          name="ownerPhone"
          className="form-input"
          value={formData.ownerPhone}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="password" className="form-label">
        Password:
        <input
          type="text"
          id="password"
          name="password"
          className="form-input"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit" className="form-button">
        Register
      </button>
    </form>
  );
}  
