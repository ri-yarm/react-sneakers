import React from "react";
import Card from "../../component/Card";
import styles from "./Orders.module.scss";

import { SneakersContext } from "../../contexts/SneakersContext";
import { Link } from "react-router-dom";

export const Orders = ({ orders }) => {
  const { isLoading } = React.useContext(SneakersContext);

  /** Если идёт загрузка то заглушка, если нет то обходим объекты и приводим всё к одному массиву и мапим его для рендера */
  const ordersElement = (
    isLoading
      ? [...Array(12)]
      : orders.reduce((prev, obj) => [...prev, ...obj.items], [])
  ).map((item, index) => (
    <Card
      //! addToBasket если не этого свойства то карточка будет без кнопок!!!
      card={item}
      loading={isLoading}
      key={index}
    />
  ));

  return (
    <main className={styles.contentFavorite}>
      <div className={styles.contentFavorite__head}>
        <Link to="/" className={`button ${styles.contentFavorite__backButton}`}>
          <img src={process.env.PUBLIC_URL + "/img/main__back.svg"} alt="" />
        </Link>
        <h2 className={styles.contentFavorite__title}>Мои заказы</h2>
      </div>
      <div className={styles.sneakers}>{ordersElement}</div>
    </main>
  );
};
