import React, { useEffect, useState } from 'react'
import '../Styles/product.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const handleSaveToLocalStorage = (product) => {
    navigate('/singleproductpage')
    // Convert the product object to a JSON string
    const productJSON = JSON.stringify(product);
    // Save the product details in local storage
    localStorage.setItem('selectedProduct', productJSON);
  };

  return (
    <div onClick={() => handleSaveToLocalStorage(product)} key={product.productname} className="product-card">
      <br />
      <div className='imgdiv'>

        <img src={product.productimage} alt={product.productname} />
      </div>
      <br />
      <h4>{product.productname}</h4>
      <p>{product.rating} Rating ⭐⭐⭐⭐⭐</p>
      <span style={{ display: 'inline' }}>
        <p className='pricefont'>Price: ₹ {product.productprice} /-
        </p>
        <p>On M.R.P {product.productdiscount}% Off</p>
      </span>
      <p>FREE delivery by Amazon</p>
    </div>
  );
};


export const Productpage = () => {

  const selectedType = localStorage.getItem('type');
  const [productarr, setProductsarr] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3005/allproducts')
      .then(response => response.json())
      .then(data => {
        // Filter data based on the selected type
        const filteredData = data.filter(product => product.producttype === selectedType);
        setProductsarr(filteredData);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [selectedType]);

  return (
    <div className='mainpro'>
      <div id='productmaindiv'>
        <div id='filterdiv'>
          <div>
            <h4>Price</h4>
            <p>Under ₹1,000</p>
            <p>₹1,000 - ₹5,000</p>
            <p>₹5,000 - ₹10,000</p>
            <p>₹10,000 - ₹20,000</p>
            <p>Over ₹20,000</p>
          </div>

          <div>
            <h4>Brands</h4>
            <label htmlFor="">
              <input type="checkbox" />
              Samsung
            </label>
            <br />
            <label htmlFor="">
              <input type="checkbox" />
              Apple
            </label>
            <br />
            <label htmlFor="">
              <input type="checkbox" />
              Oneplus
            </label>
          </div>

          <div>
            <h4>Operating System</h4>
            <label htmlFor="">
              <input type="checkbox" />
              Android 10.0
            </label>
            <br />
            <label htmlFor="">
              <input type="checkbox" />
              Android 12.0
            </label>
            <br />
            <label htmlFor="">
              <input type="checkbox" />
              Android 13.0
            </label>
          </div>

          <div>
            <h4>Customer Reviews</h4>
            <p>⭐⭐⭐⭐⚝ & Up</p>
            <p>⭐⭐⭐⚝ ⚝ & Up</p>
            <p>⭐⭐⚝ ⚝ ⚝ & Up</p>
            <p>⭐⚝ ⚝ ⚝ ⚝ & Up</p>
          </div>

          <div>
            <h4>Battery Capacity </h4>
            <label htmlFor="">
              <input type="checkbox" />
              3,000 to 3,999 mAh
            </label>
            <br />
            <label htmlFor="">
              <input type="checkbox" />
              4,000 to 4,999 mAh
            </label>
            <br />
            <label htmlFor="">
              <input type="checkbox" />
              5,000 to 5,999 mAh
            </label>
            <br />
            <label htmlFor="">
              <input type="checkbox" />
              6,000 mAh & Above
            </label>
          </div>

        </div>
        <div className="product-list">

          {productarr.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>

  )
}
