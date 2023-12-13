import React, { useState } from 'react';
import styled from 'styled-components';

const CardFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
`;

const Card = styled.div`
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
  margin-left:-750px
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const Cardpayment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('cardFormData', JSON.stringify(formData));
    // You can also send this data to the server or perform additional actions as needed
    alert("Card Details Saved")
  };

  return (
    <CardFormContainer>
      <Card>
        <h2>Card Payment</h2>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="card-number">Card Number</Label>
          <Input
            type="text"
            id="card-number"
            name="cardNumber"
            placeholder="Enter card number"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />

          <Label htmlFor="expiry-date">Expiry Date</Label>
          <Input
            type="text"
            id="expiry-date"
            name="expiryDate"
            placeholder="MM/YYYY"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />

          <Label htmlFor="cvv">CVV</Label>
          <Input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="Enter CVV"
            value={formData.cvv}
            onChange={handleChange}
            required
          />

          <Label htmlFor="card-holder">Card Holder Name</Label>
          <Input
            type="text"
            id="card-holder"
            name="cardHolder"
            placeholder="Enter card holder name"
            value={formData.cardHolder}
            onChange={handleChange}
            required
          />

          <Button type="submit">Submit Payment</Button>
        </form>
      </Card>
    </CardFormContainer>
  );
};
