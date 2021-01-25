import React from "react";
import { useStateValue } from "../../contex/stateProvider";
import "./item.css";

export default function Item({ id, title, image, price, rating, hiddeButton }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

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
        {!hiddeButton && <button onClick={removeFromBasket}>Remove From Basket</button>}
      </div>
    </div>
  );
}
