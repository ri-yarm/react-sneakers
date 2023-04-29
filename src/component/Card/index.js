import { useState, useContext } from "react";

import { MyLoader } from "../ContentLoader";

import styles from "./Card.module.scss";

import { SneakersContext } from "../../contexts/SneakersContext";

const Card = ({
  card,
  addToBasket,
  handleAddToFavorite,
  isFavorited = false,
  loading,
}) => {
  const { hasAddedItems, hasFavoritesItems } = useContext(SneakersContext);
  const [toFavorite, setToFavorite] = useState(isFavorited);

  /** Добавляем в корзину и меняем картинку */
  const onButtonToBasket = () => {
    addToBasket({...card, itemId: card.id});
  };

  /** Добавляем в избранное */
  const onClickFavorite = () => {
    setToFavorite(!toFavorite);
    handleAddToFavorite({...card, itemId: card.id});
  };


  return (
    <article className={styles.card}>
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <img
            src={process.env.PUBLIC_URL + card.img}
            alt={card.title}
            className={styles.card__image}
          />
          {addToBasket && (
            <button className={styles.card__like} onClick={onClickFavorite}>
              <img
                src={
                  hasFavoritesItems(card.id)
                    ? process.env.PUBLIC_URL + "/img/card__liked.svg"
                    : process.env.PUBLIC_URL + "/img/card__unliked.svg"
                }
                alt={` ${card.title}.`}
              />
            </button>
          )}
          <h3 className={styles.card__title}>{card.title}</h3>
          <div className={styles.card__info}>
            <span className={styles.card__priceContainer}>
              <p className={styles.card__subtitle}>ЦЕНА:</p>
              <p className={styles.card__price}>{card.price} руб.</p>
            </span>
            {addToBasket && (
              <button
                className={styles.card__addBasket}
                onClick={onButtonToBasket}
              >
                <img
                  src={
                    !hasAddedItems(card.id)
                      ? process.env.PUBLIC_URL + "/img/card__plus.svg"
                      : process.env.PUBLIC_URL + "/img/card__checked.svg"
                  }
                  alt=""
                />
              </button>
            )}
          </div>
        </>
      )}
    </article>
  );
};

export default Card;
