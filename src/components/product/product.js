import React from "react";
import "./product.css";
import { useStateValue } from "../../contex/stateProvider";

export default function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("$" + basket[0]?.price);

  const addToBasket = () => {
    // dispatch the item into the context
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}
