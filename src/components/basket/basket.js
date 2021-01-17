import React from "react";
import { useStateValue } from "../../contex/stateProvider";
import Header from "../header/header";
import Item from "../item/item";
import Subtotal from "../subtotal/subtotal";
import "./basket.css";

export default function Basket() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className='basket'>
        <div className='basket-main'>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt='ad'
            className='basket-ad'
          />
          <div>
            <h3> hello {user?.email}</h3>
            <h2 className='basket-title'>your shopping basket</h2>
            {basket.map(item => (
              <Item id={item.id} title={item.title} image={item.image} rating={item.rating} price={item.price} />
            ))}
          </div>
        </div>

        <div className='basket-totlal'>
          <Subtotal></Subtotal>
        </div>
      </div>
    </>
  );
}
