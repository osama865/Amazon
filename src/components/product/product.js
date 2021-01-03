import React from "react";
import "./product.css";
export default function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <div className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className='product-rate'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button>Add To Basket</button>
    </div>
  );
}
