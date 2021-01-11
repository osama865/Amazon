import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../contex/reducer";
import { useStateValue } from "../../contex/stateProvider";
import "./subtotal.css";

export default function Subtotal() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket[0].price);
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Basket</button>
    </div>
  );
}
