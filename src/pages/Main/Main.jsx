import { useContext, useState } from 'react';

import Card from '../../component/Card';

import { SneakersContext } from '../../contexts/SneakersContext';
import { Slider } from '../../component/Slider';

import styles from './Main.module.scss';

export const Main = ({ addToBasket }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const { sneakers, handleAddToFavorite, isLoading, /* hasAddedItems */ } =
    useContext(SneakersContext);

  /** Обработчик инпута поиска*/
  const onChangeInputValue = (event) => {
    setSearchInputValue(event.target.value);
  };

  // если в корзине есть таккой товар то, ставит галочку
  /*   const isCardAddedBasket = (card) =>
    basketSneakers.some((obj) => Number(obj.id) === Number(card.id)); */

  const cardsElement = () => {
    const filtredItems = sneakers.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(searchInputValue.toLocaleLowerCase())
    ); // перед тем как рендерить отфильтруем массив исходня из поиска(если инпут пустой, вернёся исходный массив)

    return (isLoading ? [...Array(12)] : filtredItems).map((card, index) => (
      <Card
        addToBasket={addToBasket}
        // isAdded={isCardAddedBasket(card)}
        // isAdded={hasAddedItems(card && card.id)} !! БАГ НЕ ОТОбражаются избарнные на главной странице
        // isFavorited
        loading={isLoading}
        card={card}
        handleAddToFavorite={handleAddToFavorite}
        // isCardAddedToBasket={() => isCardAddedToBasket(card)}
        key={index}
      />
    ));
  };

  return (
    <main className={styles.content}>
      <div className={styles.content__slider}>
        <Slider>
          <img
            src={
              process.env.PUBLIC_URL +
              '/img/slider__children/slider__item-1.jpg'
            }
            alt=""
          />
          <img
            src={
              process.env.PUBLIC_URL +
              '/img/slider__children/slider__item-2.jpeg'
            }
            alt=""
          />
          <div>
            <h1 style={{textAlign: 'center'}}>Не нашёл подходящих картинок</h1>
          </div>
          <img
            src={
              process.env.PUBLIC_URL +
              '/img/slider__children/slider__item-3.png'
            }
            alt=""
          />
        </Slider>
      </div>
      <div className={styles.content__head}>
        <h2 className={styles.content__title}>
          {searchInputValue
            ? `Поиск по запросу: "${searchInputValue}" `
            : 'Все кроссовки'}
        </h2>
        <div className={styles.search}>
          <img
            className={styles.search__img}
            src={process.env.PUBLIC_URL + '/img/content__search.svg'}
            alt=" Иконка поиска."
          />
          <input
            className={styles.search__input}
            type="text"
            placeholder="Поиск кроссовок..."
            onChange={onChangeInputValue}
            value={searchInputValue || ''}
          />
          {searchInputValue && (
            <button
              className={`button ${styles.search__button}`}
              onClick={() => setSearchInputValue('')}
            >
              <img
                src={process.env.PUBLIC_URL + '/img/basket__delete-item.svg'}
                alt="Очистить инпут"
              />
            </button>
          )}
        </div>
      </div>

      <div className={styles.sneakers}>{cardsElement()}</div>
    </main>
  );
};
