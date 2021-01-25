import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contex/stateProvider";
import { auth } from "../../config/firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthantecation = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className='header'>
      <Link to='/'>
        <div>
          <img className='header-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazone logo' />
        </div>
      </Link>

      <div className='header-search'>
        <input type='text' className='header-search-input' />
        <SearchIcon className='header-search-icon' />
      </div>

      <div className='header-nav'>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthantecation} className='header-option'>
            <span className='header-option-one'>hello,{user?.email || "guest"} </span>

            <span className='header-option-two'>{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className='header-option'>
            <span className='header-option-one'>Returns</span>
            <span className='header-option-two'>& Orders</span>
          </div>
        </Link>

        <div className='header-option'>
          <span className='header-option-one'>Your</span>
          <span className='header-option-two'>Prime</span>
        </div>

        <Link to='/basket'>
          <div className='header-option-basket'>
            <ShoppingBasket />
            <span className='header-option-basket-count'>{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
