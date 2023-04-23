import ContentLoader from "react-content-loader";
import { useState, useContext } from "react";

import styles from "./Card.module.scss";

import { SneakersContext } from "../../contexts/SneakersContext";

const Card = ({
  card,
  addToBasket,
  handleAddToFavorite,
  isFavorited = false,
  loading,
}) => {
  const { hasAddedItems } = useContext(SneakersContext);

  const [toFavorite, setToFavorite] = useState(isFavorited);

  /** Добавляем в корзину и меняем картинку */
  const onButtonToBasket = () => {
    addToBasket(card);
  };

  /** Добавляем в избранное */
  const onClickFavorite = () => {
    setToFavorite(!toFavorite);
    console.log(card);
    handleAddToFavorite(card);
  };

  return (
    <article className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={3}
          width={145}
          height={220}
          viewBox="0 0 150 210"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="115" />
          <rect x="0" y="122" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="140" rx="4" ry="4" width="92" height="15" />
          <rect x="2" y="176" rx="5" ry="5" width="60" height="8" />
          <rect x="2" y="190" rx="5" ry="5" width="80" height="20" />
          <rect x="116" y="179" rx="7" ry="7" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
          </div>
        </>
      )}
    </article>
  );
};

export default Card;
