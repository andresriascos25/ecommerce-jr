import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'>e-commerce</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink  className="header__link" to='/login'>
              <ion-icon  name="person-outline"></ion-icon>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/purchases'>
              <ion-icon name="archive-outline"></ion-icon>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/cart'>
              <ion-icon name="cart-outline"></ion-icon>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;