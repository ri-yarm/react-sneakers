import React, { useState, useEffect } from "react";
import { Routes, Route, useFetcher } from "react-router-dom";

import { Header } from "./Header/Header";
import { Main } from "../pages/Main/Main";
import { AsideCart } from "./AsideCart";

import { Favorites } from "../pages/Favorites";

import * as api from "../utils/api";

import { SneakersContext } from "../contexts/SneakersContext";

function App() {
  const [sneakers, setSneakers] = useState([]); //кроссовки
  const [basketSneakers, setBasketSneakers] = useState([]); //кроссовки в корзине
  const [isBasketOpened, setIsBasketOpened] = useState(false); //стейт открытой или закрытой корзины
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** Функция открытия и закрытия корзины */
  const handleBasketOpened = () => {
    setIsBasketOpened(!isBasketOpened);
  };

  /** Добавляем предмет в корзину */
  const handleAddToBasket = (obj) => {
    try {
      if (
        basketSneakers.find((baskObj) => Number(baskObj.id) === Number(obj.id))
      ) {
        //если id объекта совпадает с id объекта который уже в корзине, то удаляем его
        handleRemoveItemBasket(Number(obj.id));
      } else {
        // если всё норм добавляем в корзину
        api.addToBasket(obj);
        setBasketSneakers((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("ошибка с корзиной");
      console.log(error);
    }
  };

  /** Функция проверяет если есть предметы в корзине, то поставь галочку */
  const hasAddedItems = (id) => {
    return basketSneakers.some((obj) => Number(obj.id) === Number(id));
  };

  /** Добавляем предмет в избранное */
  const handleAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        //если id объекта совпадает с id объекта который уже в избранном, то удаляем его
        api.deleteFromFavorite(Number(obj.id));
        // setFavorites((prev) => prev.filter((item) => item.id !== data.id)); //! убрал, что бы не сразу удалялся из фронта
      } else {
        const { data } = await api.addToFavorite(obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("ошибка с фаворитами");
      console.log(error);
    }
  };

  /** Удаляем из корзины предмет(из базы и из фронта)  */
  const handleRemoveItemBasket = (id) => {
    console.log(id);
    api.deleteFromBasket(Number(id));
    setBasketSneakers((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  /** Покупаем предметы и удаляем предметы из корзины */
  const handleBuy = async (obj) => {
    /** Костыль задержки запросов чтобы мокапи не блочил, за быстрые запросы */
    const delay = (ms) =>
      new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
      });

    for (let i = 0; i < basketSneakers.length; i++) {
      const element = basketSneakers[i];
      await api.deleteFromBasket(element.id);
      await delay(300);
    }


    setBasketSneakers([]);

    await api.buy(obj);
  };

  /* Получаем весь ассортимент */
  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const sneakersResponse = await api.getItems();
      const basketResponse = await api.getToBasket();
      const favoriteResponse = await api.getFromFavorite();

      setIsLoading(false);

      setBasketSneakers(basketResponse.data);
      setFavorites(favoriteResponse.data);
      setSneakers(sneakersResponse.data);
    })();
    // api.getItems().then((res) => setSneakers(res.data));
  }, []);

  /** Чтобы отдельно загружал содержмое корзины, ибо баг ебанный с этим id в мокапэ  */
  useEffect(() => {
    (async () => {
      const basketResponse = await api.getToBasket();
      setBasketSneakers(basketResponse.data);
    })()
  }, [isBasketOpened])

  /** Получаем содержимое корзины только когда мы её открываем  */
  /* useEffect(() => {
    api.getToBasket().then((res) => setBasketSneakers(res.data));
  }, [isBasketOpened]); */

  /** Получаем содержимое избранных */
  /* useEffect(() => {
    api.getFromFavorite().then((res) => setFavorites(res.data));
  }, []); */

  return (
    <SneakersContext.Provider
      value={{
        sneakers,
        setBasketSneakers,
        basketSneakers,
        favorites,
        hasAddedItems,
        handleBasketOpened,
      }}
    >
      <div className="page clear">
        <div className="page__container">
          <Header />
          {isBasketOpened && (
            <AsideCart
              isOpen={isBasketOpened}
              handleRemoveItemBasket={handleRemoveItemBasket}
              handleBuy={handleBuy}
            />
          )}
          <Routes>
            <Route
              path="/favorites"
              element={<Favorites handleAddToFavorite={handleAddToFavorite} />}
            />
            <Route
              path="/"
              element={
                <Main
                  sneakers={sneakers}
                  basketSneakers={basketSneakers}
                  addToBasket={handleAddToBasket}
                  handleRemoveItemBasket={handleRemoveItemBasket}
                  handleAddToFavorite={handleAddToFavorite}
                  isLoading={isLoading}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </SneakersContext.Provider>
  );
}

export default App;
