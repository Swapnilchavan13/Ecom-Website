import React, { useEffect, useState } from 'react'
import '../Styles/allmerchantproduct.css'
import { useNavigate } from 'react-router-dom';
import { Navbarmarchant } from './Navbarmarchant';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleSaveToLocalStorage = (product) => {
    navigate('/singleproductpage');
    const productJSON = JSON.stringify(product);
    localStorage.setItem('selectedProduct', productJSON);
  };

  const discountedPrice = (product.productprice * (1 - product.productdiscount / 100)).toFixed(0);

  return (
    <div style={{ backgroundColor: product.productblock ? '#f68585' : '' }} onClick={() => handleSaveToLocalStorage(product)} key={product.productname} className="product-card">
      <br />
      <div className='imgdiv'>
        <img src={product.image_one} alt={product.productname} />
      </div>
      <br />
      <h4>{product.productname}</h4>
      <span style={{ display: 'inline' }}>
        <p style={{ textDecoration: 'line-through', color: 'grey' }} className='pricefont'>Price: ₹ {product.productprice} /-</p>
        <p>On M.R.P {product.productdiscount}% Off</p>
        <p className='pricefont'>Price: ₹ {discountedPrice} /-</p>
      </span>
    </div>
  );
};

export const Allmerchantproduct = () => {
  const selectedType = localStorage.getItem('type');
  const [productarr, setProductsarr] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [merchantId, setMerchantId] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


useEffect(() => {
  const storedMerchantId = localStorage.getItem('merchantid');

  if (storedMerchantId) {
    setMerchantId(storedMerchantId);
    fetch(`http://localhost:3008/allproducts/${storedMerchantId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let sortedData = data;
        if (sortOrder === 'asc') {
          sortedData = sortedData.sort((a, b) => parseFloat(a.productprice) - parseFloat(b.productprice));
        } else {
          sortedData = sortedData.sort((a, b) => parseFloat(b.productprice) - parseFloat(a.productprice));
        }
        setProductsarr(sortedData); // Update the state with the sorted data
      })
      .catch(error => console.error('Error fetching products:', error));
  }
}, [selectedType, sortOrder]);

const toggleSortOrder = () => {
  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
};

  const handleDelete = async (productId) => {
    try {
      // Make a DELETE request to your API endpoint
      await fetch(`http://localhost:3008/deleteProduct/${productId}`, {
        method: 'DELETE',
      });

      // Update the state to reflect the changes
      setProductsarr(productarr.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='mainpro'>
     <Navbarmarchant />

     <div id='filterdiv'>
          <div>
            <h4>Price</h4>
            <button onClick={toggleSortOrder}>
              Sort {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
            </button>
          </div>
        </div>

      <div id='productmaindiv'>
        <div id="product-list" className="product-list">
          {productarr.map((product) => (
            <>
            <div>
            <ProductCard product={product} />
            <button className="delete-button" onClick={() => handleDelete(product._id)}>
            Delete</button>
            </div>
            </>
          ))}
        </div>
      </div>
    </div>

  )
}

