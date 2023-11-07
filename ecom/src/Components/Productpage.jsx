import React from 'react'
import '../Styles/product.css'

const ProductCard = ({ product }) => {
    return (
      <div key={product.productname} className="product-card">
        <br />
        <div className='imgdiv'>

        <img src={product.image} alt={product.productname} />
        </div>
        <br />
        <h4>{product.productname}</h4>
        <p>{product.rating} Star ⭐⭐⭐⭐⭐</p>
        <span style={{display:'inline'}}>
            <p className='pricefont'>Price: {product.price}
            </p>
            <p>M.R.P:{product.discount} Off</p>
            </span>
        <p>{product.delevery}</p>
      </div>
    );
  };
  

export const Productpage = () => {

    const productarr=[
    {"productname":"Apple iPhone 13 (128GB) - Midnight",
    "image":"https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Starlight",
"image":"https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Blue",
"image":"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Pink",
"image":"https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Green",
"image":"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"OnePlus 11R 5G (Sonic Black, 16GB RAM, 256GB Storage)",
"image":"https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UL320_.jpg",
"price":"₹44,999","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Midnight",
    "image":"https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Starlight",
"image":"https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Blue",
"image":"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Pink",
"image":"https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Green",
"image":"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"OnePlus 11R 5G (Sonic Black, 16GB RAM, 256GB Storage)",
"image":"https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UL320_.jpg",
"price":"₹44,999","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Midnight",
    "image":"https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Starlight",
"image":"https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Blue",
"image":"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Pink",
"image":"https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Green",
"image":"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"OnePlus 11R 5G (Sonic Black, 16GB RAM, 256GB Storage)",
"image":"https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UL320_.jpg",
"price":"₹44,999","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Midnight",
    "image":"https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Starlight",
"image":"https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Blue",
"image":"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Pink",
"image":"https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"Apple iPhone 13 (128GB) - Green",
"image":"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
"price":"₹50,749","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},

{"productname":"OnePlus 11R 5G (Sonic Black, 16GB RAM, 256GB Storage)",
"image":"https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UL320_.jpg",
"price":"₹44,999","discount":"27%", "rating":"5", "delevery":"FREE delivery by Amazon"},


]
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
