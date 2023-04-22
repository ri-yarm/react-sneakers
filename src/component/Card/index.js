import { useState } from "react";

import styles from "./Card.module.scss";

const Card = ({ card, addToBasket, handleAddToFavorite, favorited = false, handleRemoveItemBasket }) => {
  // стейт добавления в корзину
  const [basketIn, setBasketIn] = useState(false);
  const [toFavorite, setToFavorite] = useState(favorited);

  /** Добавляем в корзину и меняем картинку */
  const onButtonToBasket = () => {
    setBasketIn(!basketIn);
    addToBasket(card);
  };


  /** Добавляем в избранное */
  const onClickFavorite = () => {
    setToFavorite(!toFavorite);
    console.log(card);
    handleAddToFavorite(card)
  };

  return (
    <article className={styles.card}>
      <img
        src={process.env.PUBLIC_URL + card.img}
        alt=""
        className={styles.card__image}
      />
      <button className={styles.card__like} onClick={onClickFavorite}>
        <img
          src={
            toFavorite
              ? process.env.PUBLIC_URL + "/img/card__liked.svg"
              : process.env.PUBLIC_URL + "/img/card__unliked.svg"
          }
          alt={` ${card.title}.`}
        />
      </button>
      <h3 className={styles.card__title}>{card.title}</h3>
      <div className={styles.card__info}>
        <span className={styles.card__priceContainer}>
          <p className={styles.card__subtitle}>ЦЕНА:</p>
          <p className={styles.card__price}>{card.price}</p>
        </span>
        <button className={styles.card__addBasket} onClick={onButtonToBasket}>
          <img
            src={
              !basketIn
                ? process.env.PUBLIC_URL + "/img/card__plus.svg"
                : process.env.PUBLIC_URL + "/img/card__checked.svg"
            }
            alt=""
          />
        </button>
      </div>
    </article>
  );
};

export default Card;
