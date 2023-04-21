import Card from "../Card";

import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.content}>
      <div className={styles.content__head}>
        <h2 className={styles.content__title}>Все кроссовки</h2>
        <div className={styles.search}>
          <img
            className={styles.search__img}
            src={process.env.PUBLIC_URL + "/img/content__search.svg"}
            alt=" Иконка поиска."
          />
          <input
            className={styles.search__input}
            type="text"
            placeholder="Поиск кроссовок..."
          />
        </div>
      </div>

      <div className={styles.sneakers}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};
