import React, { useEffect, useState } from "react";
import Card from "../../component/Card";
import styles from "./Orders.module.scss";

import * as api from "../../utils/api";

import { SneakersContext } from "../../contexts/SneakersContext";
import { Link } from "react-router-dom";

export const Orders = () => {
  const [orders, setOrders] = useState([]); // стейт покупок
  const { isLoading } = React.useContext(SneakersContext);

  /** Если идёт загрузка то заглушка, если нет то обходим объекты и приводим всё к одному массиву и мапим его для рендера */
  const ordersElement = (
    isLoading
      ? [...Array(12)]
      : orders.reduce((prev, obj) => [...prev, ...obj.items], [])
  ) //или orders.map(obj => obj.item).flat()
    .map((item, index) => (
      <Card
        //! addToBasket если не этого свойства то карточка будет без кнопок!!!
        card={item}
        loading={isLoading}
        key={index}
      />
    ));

  /** загружаем заказы только когда находимся на этой странице */
  useEffect(() => {
    (async () => {
      try {
        const ordersResponse = await api.myOrders();
        setOrders(ordersResponse.data);
      } catch (error) {
        alert("Ошибка при загрузке заказов");
        console.error(error);
      }
    })();
  }, []);

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
