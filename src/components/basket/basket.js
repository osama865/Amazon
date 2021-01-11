import React from "react";
import Subtotal from "../subtotal/subtotal";
import "./basket.css";

export default function Basket() {
  return (
    <div className='basket'>
      <div className='basket-main'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='ad'
          className='basket-ad'
        />
        <div>
          <h2 className='basket-title'>your shopping basket</h2>
        </div>
      </div>

      <div className='basket-totlal'>
        <Subtotal></Subtotal>
        <h2 className='shopping-basket'>the subtotal will go here</h2>
      </div>
    </div>
  );
}
