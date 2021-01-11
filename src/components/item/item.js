import React from "react";
import "./item.css";

export default function Item({ id, title, image, price, rating }) {
  return (
    <div className='item'>
      <img src={image} className='item-img' alt='' />
      <div className='item-info'>
        <p className='item-title'>{title}</p>
        <p className='item-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='item-rating'>
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
}
