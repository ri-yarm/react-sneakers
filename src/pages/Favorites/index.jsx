import { useEffect } from "react";

import Card from "../../component/Card";
import * as api from "../../utils/api";
import styles from "./Favorites.module.scss";

export const Favorites = ({ favorites, setFavorites, handleAddToFavorite }) => {
  const favoritesElement = favorites.map((item, index) => (
    <Card
      card={item}
      favorited={true}
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
