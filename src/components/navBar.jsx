import React from "react";
import { Link } from "react-router-dom";
import { useBasket } from "../hooks/useBasket";

const NavBar = () => {
  const { basketLength } = useBasket();

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper">
          <div>
            <Link to="/" className="header-link">
              <h2 className="header-logo">WONDERFUL</h2>
            </Link>
          </div>

          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-item">
                <Link className="header-link" to="/">
                  Главная
                </Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to="/catalog">
                  Каталог
                </Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to="/delivery">
                  Доставка
                </Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to="/about">
                  О нас
                </Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to="/about">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 18 18"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </Link>
              </li>
              <li className="header-item">
                <Link className="header-link" to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  {basketLength !== 0 && (
                    <span className="cart-number">{basketLength}</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
