import React, { useEffect, useState } from 'react'
import '../Styles/product.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleSaveToLocalStorage = (product) => {
    navigate('/singleproductpage');
    const productJSON = JSON.stringify(product);
    localStorage.setItem('selectedProduct', productJSON);
    localStorage.setItem('selectedmi', product.merchantid);

  };

  const discountedPrice = (product.productprice * (1 - product.productdiscount / 100)).toFixed(0);

  return (
    <div style={{ display: product.productblock ? 'none' : 'block' }} onClick={() => handleSaveToLocalStorage(product)} key={product.productname} className="product-card">
      <br />
      <div className='imgdiv'>
        <img src={product.image_one} alt={product.productname} />
      </div>
      <br />
      <h4>{product.productname}</h4>
      <p>{product.rating} Rating ⭐⭐⭐⭐⭐</p>
      <span style={{ display: 'inline' }}>
        <p style={{ textDecoration: 'line-through', color: 'grey' }} className='pricefont'>Price: ₹ {product.productprice} /-</p>
        <p>On M.R.P {product.productdiscount}% Off</p>
        <p>{product.merchantid}</p>
        <p className='pricefont'>Price: ₹ {discountedPrice} /-</p>
      </span>
      <p>FREE delivery by Amazon</p>
    </div>
  );
};

export const Merchantproductpage = () => {
  const selectedType = localStorage.getItem('type');
  const [productarr, setProductsarr] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [merchantId, setMerchantId] = useState('');


  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        const storedMerchantId = localStorage.getItem('selectedmi');

    fetch(`http://62.72.59.146:3008/allproducts/${storedMerchantId}`)

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
            <h4>Customer Reviews</h4>
            <p>⭐⭐⭐⭐⚝ & Up</p>
            <p>⭐⭐⭐⚝ ⚝ & Up</p>
            <p>⭐⭐⚝ ⚝ ⚝ & Up</p>
            <p>⭐⚝ ⚝ ⚝ ⚝ & Up</p>
          </div>

        </div>
        <div style={{marginLeft:'-300px'}} id="product-list" className="product-list">
          {productarr.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>

  )
}
