import { useContext } from "react";

import { Link } from "react-router-dom";

import Card from "../../component/Card";
import * as api from "../../utils/api";
import styles from "./Favorites.module.scss";

import { SneakersContext } from "../../contexts/SneakersContext";

export const Favorites = ({ addToBasket }) => {
  const { favorites, handleAddToFavorite, isLoading } =
    useContext(SneakersContext);
  const favoritesElement = (isLoading ? [...Array(12)] : favorites).map(
    (item, index) => (
      <Card
        card={item}
        isFavorited
        loading={isLoading}
        addToBasket={addToBasket}
        // handleRemoveItemBasket={handleRemoveItemBasket}
        handleAddToFavorite={handleAddToFavorite}
        key={index}
      />
    )
  );

  return (
    <main className={styles.contentFavorite}>
      <div className={styles.contentFavorite__head}>
        <Link to="/" className={`button ${styles.contentFavorite__backButton}`}>
          <img src={process.env.PUBLIC_URL + "/img/main__back.svg"} alt="" />
        </Link>
        <h2 className={styles.contentFavorite__title}>Мои закладки</h2>
      </div>
      <div className={styles.sneakers}>{favoritesElement}</div>
    </main>
  );
};
