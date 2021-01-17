import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../../contex/reducer";
import { useStateValue } from "../../contex/stateProvider";
import Header from "../header/header";
import Item from "../item/item";
import "./payment.css";

export default function Payment() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setProcessing(true);

    // const payload = await stripe
  };
  const handleChange = e => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const stripe = useStripe();
  const elements = useElements();
  return (
    <>
      <Header />
      <div className='payment'>
        <div className='payment-container'>
          <h1>
            Checkout (<Link to='/basket'>{basket?.length} items</Link>)
          </h1>
          <div className='payment-section'>
            {/* payment section - delivery address */}
            <div className='payment-title'>
              <h3>delivery address </h3>
            </div>
            <div className='payment-address'>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          <div className='payment-section'>
            {/* payment section - review items */}
            <div className='payment-title'>
              <h3>Review items and delivery</h3>
            </div>
            <div className='payment-items'>
              {basket.map(item => (
                <Item id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
              ))}
            </div>
          </div>
          {/* Payment section - Payment method */}
          <div className='payment-section'>
            <div className='payment-title'>
              <h3>Payment Method</h3>
            </div>
            <div className='payment-details'>
              {/* Stripe magic will go */}

              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className='payment-price-container'>
                  <CurrencyFormat
                    renderText={value => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {/* Errors */}
                {/* {error && <div>{error}</div>} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
