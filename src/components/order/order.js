import React from "react";
import { format, compareAsc, fromUnixTime } from "date-fns";
import Item from "../item/item";
import "./order.css";
import CurrencyFormat from "react-currency-format";

export default function Order({ order }) {
  console.log(order);
  console.log(order.data.created);
  // var timeCreated = fromUnixTime(order.data.created);
  return (
    <div className='order'>
      <h2>Order</h2>
      {/* <p>{timeCreated}</p> */}
      <p className='order-id'>
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map(item => (
        <Item id={item.id} title={item.title} image={item.image} rating={item.rating} price={item.price} hiddeButton />
      ))}
      <CurrencyFormat
        renderText={value => <h3 className='order-total'>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}
