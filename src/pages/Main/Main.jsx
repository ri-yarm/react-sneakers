import { useState } from "react";

import Card from "../../component/Card";

import styles from "./Main.module.scss";

export const Main = ({ sneakers, addToBasket, handleRemoveItemBasket, handleAddToFavorite }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  /** Обработчик инпута */
  const onChangeInputValue = (event) => {
    setSearchInputValue(event.target.value);
  };

  const cardsElement = sneakers
    .filter((item) => item.title.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase())) // перед тем как рендерить отфильтруем массив исходня из поиска(если инпут пустой, вернёся исходный массив)
    .map((card, index) => (
      <Card addToBasket={addToBasket} card={card} handleRemoveItemBasket={handleRemoveItemBasket} handleAddToFavorite={handleAddToFavorite} key={index} />
    ));

  return (
    <main className={styles.content}>
      <div className={styles.content__head}>
        <h2 className={styles.content__title}>
          {searchInputValue
            ? `Поиск по запросу: "${searchInputValue}" `
            : "Все кроссовки"}
        </h2>
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
            onChange={onChangeInputValue}
            value={searchInputValue || ""}
          />
          {searchInputValue && (
            <button
              className={`button ${styles.search__button}`}
              onClick={() => setSearchInputValue("")}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/basket__delete-item.svg"}
                alt="Очистить инпут"
              />
            </button>
          )}
        </div>
      </div>

      <div className={styles.sneakers}>{cardsElement}</div>
    </main>
  );
};
