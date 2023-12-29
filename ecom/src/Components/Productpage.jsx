import React, { useEffect, useState } from 'react'
import '../Styles/product.css'
import { useNavigate } from 'react-router-dom';

  const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleSaveToLocalStorage = (product) => {
    navigate('/singleproductpage');
    const productJSON = JSON.stringify(product);
    localStorage.setItem('selectedProduct', productJSON);
  };

  const discountedPrice = (product.productprice * (1 - product.productdiscount / 100)).toFixed(0);

  return (
    <div style={{display: product.productblock? 'none' : 'block'}} onClick={() => handleSaveToLocalStorage(product)} key={product.productname} className="product-card">
      <br />
      <div className='imgdiv'>
        <img src={product.image_one} alt={product.productname} />
      </div>
      <br />
      <h4>{product.productname}</h4>
      <p>{product.rating} Rating ⭐⭐⭐⭐⭐</p>
      <span style={{ display: 'inline' }}>
        <p style={{textDecoration:'line-through', color:'grey'}} className='pricefont'>Price: ₹ {product.productprice} /-</p>
        <p>On M.R.P {product.productdiscount}% Off</p>
        <p className='pricefont'>Price: ₹ {discountedPrice} /-</p>
      </span>
      <p>FREE delivery by Amazon</p>
    </div>
  );
};

export const Productpage = () => {
  const selectedType = localStorage.getItem('type');
  const [productarr, setProductsarr] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch('http://localhost:3008/allproducts')
      .then(response => response.json())
      .then(data => {
        let filteredData = data.filter(product => product.producttype === selectedType);

        if (sortOrder === 'asc') {
          filteredData = filteredData.sort((a, b) => parseFloat(a.productprice) - parseFloat(b.productprice));
        } else {
          filteredData = filteredData.sort((a, b) => parseFloat(b.productprice) - parseFloat(a.productprice));
        }

        setProductsarr(filteredData);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [selectedType, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className='mainpro'>
      <div id='productmaindiv'>
        <div id='filterdiv'>
          <div>
            <h4>Price</h4>
            <button onClick={toggleSortOrder}>
              Sort {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
            </button>
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
        <div id="product-list" className="product-list">
          {productarr.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>

  )
}
