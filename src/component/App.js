import React, { useState, useEffect } from "react";
import { Routes, Route, useFetcher } from "react-router-dom";

import { Header } from "./Header/Header";
import { Main } from "../pages/Main/Main";
import { AsideCart } from "./AsideCart";

import { Favorites } from "../pages/Favorites";
import { Orders } from "../pages/Orders";

import * as api from "../utils/api";

import { SneakersContext } from "../contexts/SneakersContext";

/* 
  ! Есть маленькая неудобность с избранными
  ! не блокируется кнопка при покупке
  TODO Сделать слайдер!

*/

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
  const handleAddToBasket = async (obj) => {
    try {
      const findItem = basketSneakers.find(
        (baskObj) => Number(baskObj.itemId) === Number(obj.id)
      );
      //если id объекта совпадает с id объекта который уже в корзине, то удаляем его
      if (findItem) {
        setBasketSneakers((prev) =>
          prev.filter((item) => Number(item.itemId) !== Number(obj.id))
        );
        api.deleteFromBasket(Number(findItem.id));

        // handleRemoveItemBasket(Number(obj.itemId));
      } else {
        // если всё норм добавляем в корзину
        const {data} = await api.addToBasket(obj);
        setBasketSneakers((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("ошибка с корзиной");
      console.log(error);
    }
  };

  /** Функция проверяет если есть предметы в корзине, то поставь галочку */
  const hasAddedItems = (id) => {
    console.log(basketSneakers);
    return basketSneakers.some((obj) => Number(obj.itemId) === Number(id));
  };

  /** Функция проверяет если есть предметы в корзине, то поставь галочку */
  const hasFavoritesItems = (id) => {
    return favorites.some((obj) => Number(obj.itemId) === Number(id));
  };

  /** Добавляем предмет в избранное */
  const handleAddToFavorite = async (obj) => {
    try {
      const findItem = favorites.find((favObj) => Number(favObj.id) === Number(obj.id))
      //если id объекта совпадает с id объекта который уже в избранном, то удаляем его
      if (findItem) {
        api.deleteFromFavorite(Number(obj.id));
        // setFavorites((prev) => prev.filter((item) => item.id !== data.id)); //! убрал, что бы не сразу удалялся из фронта
      } else {
        const { data } = await api.addToFavorite(obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("ошибка с фаворитами");
      console.error(error);
    }
  };

  /** Удаляем из корзины предмет(из базы и из фронта)  */
  const handleRemoveItemBasket = (id) => {
    try {
      api.deleteFromBasket(Number(id));
      setBasketSneakers((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("не удалось удалить предмет!");
      console.error(error);
    }
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
    setIsLoading(true);
    (async () => {
      try {
        const basketPromise = api.getToBasket();
        const favoritePromise = api.getFromFavorite();
        const sneakersPromise = api.getItems();

        const [basketResponse, favoriteResponse, sneakersResponse] =
          await Promise.all([basketPromise, favoritePromise, sneakersPromise]);

        setBasketSneakers(basketResponse.data);
        setFavorites(favoriteResponse.data);
        setSneakers(sneakersResponse.data);
      } catch (error) {
        alert("Приложение упало и не хочет подниматься");
      }
      setIsLoading(false);
    })();
    // api.getItems().then((res) => setSneakers(res.data));
  }, []);

  /** Чтобы отдельно загружал содержмое корзины, ибо баг ебанный с этим id в мокапэ  */
  useEffect(() => {
    (async () => {
      try {
        if (isBasketOpened) {
          const basketResponse = await api.getToBasket();
          setBasketSneakers(basketResponse.data);
        }
      } catch (error) {
        alert("не загрузилось содержимое корзины");
        console.error(error);
      }
    })();
  }, [isBasketOpened]);

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
        hasFavoritesItems,
        handleBasketOpened,
        handleAddToFavorite,
        isLoading,
      }}
    >
      <div className="page clear">
        <div className="page__container">
          <Header handleBasketOpened={handleBasketOpened} />
          <AsideCart
            isOpen={isBasketOpened}
            handleRemoveItemBasket={handleRemoveItemBasket}
            handleBuy={handleBuy}
          />
          <Routes>
            <Route
              path="/favorites"
              element={<Favorites addToBasket={handleAddToBasket} />}
            />

            <Route
              path="/"
              element={
                <Main
                  addToBasket={handleAddToBasket}
                  handleRemoveItemBasket={handleRemoveItemBasket}
                />
              }
            />

            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </SneakersContext.Provider>
  );
}

export default App;
