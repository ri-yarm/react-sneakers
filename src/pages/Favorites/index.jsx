import { useEffect, useContext } from "react";

import Card from "../../component/Card";
import * as api from "../../utils/api";
import styles from "./Favorites.module.scss";

import { SneakersContext } from "../../contexts/SneakersContext";

export const Favorites = ({handleAddToFavorite }) => {
  const { favorites } = useContext(SneakersContext);
  const favoritesElement = favorites.map((item, index) => (
    <Card
      card={item}
      isFavorited
      // addToBasket={addToBasket}
      // handleRemoveItemBasket={handleRemoveItemBasket}
      handleAddToFavorite={handleAddToFavorite}
      key={index}
    />
  ));

  return (
    <main className={styles.contentFavorite}>
      <div className={styles.contentFavorite__head}>
        <button className={`button ${styles.contentFavorite__backButton}`}>
          <img src={process.env.PUBLIC_URL + "/img/main__back.svg"} alt="" />
        </button>
        <h2 className={styles.contentFavorite__title}>Мои закладки</h2>
      </div>
      <div className={styles.sneakers}>{favoritesElement}</div>
    </main>
  );
};
