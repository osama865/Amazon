import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contex/stateProvider";

export default function Header() {
  const [state, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazone logo' />
      </Link>

      <div className='header-search'>
        <input type='text' className='header-search-input' />
        <SearchIcon className='header-search-icon' />
      </div>

      <div className='header-nav'>
        <div className='header-option'>
          <span className='header-option-one'>hello guest</span>
          <span className='header-option-two'>Sign In</span>
        </div>
        <div className='header-option'>
          <span className='header-option-one'>Returns</span>
          <span className='header-option-two'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-option-one'>Your</span>
          <span className='header-option-two'>Prime</span>
        </div>

        <Link to='/basket'>
          <div className='header-option-basket'>
            <ShoppingBasket />
            <span className='header-option-basket-count'>{state.basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
