import { useContext } from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { usePrice } from "../hooks/usePrice";

export const Header = ({ handleBasketOpened }) => {
  const { totalPrice } = usePrice();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logoContainer}>
        <img
          className={styles.header__logo}
          src={process.env.PUBLIC_URL + "/img/header__logo.svg"}
          alt=" Лого."
        />
        <div className={styles.header__logoInfo}>
          <h1 className={styles.header__title}>REACT SNEAKERS</h1>
          <p className={styles.header__subtitle}>Магазин лучших кроссовок</p>
        </div>
      </Link>
      <ul className={styles.profile}>
        <li className={styles.profile__basket} onClick={handleBasketOpened}>
          <img
            className={styles.profile__image}
            src={process.env.PUBLIC_URL + "/img/header__basket.svg"}
            alt=""
          />
          {totalPrice ? (
            <span className={styles.profile__title}> {totalPrice} руб.</span>
          ) : null}
        </li>
        <li className={styles.profile__heart}>
          <Link to="/favorites">
            <img
              className={styles.profile__image}
              src={process.env.PUBLIC_URL + "/img/header__heart.svg"}
              alt=""
            />
          </Link>
        </li>
        <li className={styles.profile__user}>
          <Link to="/orders">
            <img
              className={styles.profile__image}
              src={process.env.PUBLIC_URL + "/img/header__profile.svg"}
              alt=""
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};
