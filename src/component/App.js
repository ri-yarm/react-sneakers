import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./Header/Header";
import { Main } from "../pages/Main/Main";
import { AsideCart } from "./AsideCart";

import { Favorites } from "../pages/Favorites";

import * as api from "../utils/api";

function App() {
  const [sneakers, setSneakers] = useState([]); //кроссовки
  const [basketSneakers, setBasketSneakers] = useState([]); //кроссовки в корзине
  const [isBasketOpened, setIsBasketOpened] = useState(false); //стейт открытой или закрытой корзины
  const [favorites, setFavorites] = useState([]);

  /** Функция открытия и закрытия корзины */
  const handleBasketOpened = () => {
    setIsBasketOpened(!isBasketOpened);
  };

  /** Добавляем предмет в корзину */
  const handleAddToBasket = (obj) => {
    api.addToBasket(obj);
    setBasketSneakers((prev) => [...prev, obj]);
  };

  /** Добавляем предмет в избранное */
  const handleAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        api.deleteFromFavorite(obj.id);
        // setFavorites((prev) => prev.filter((item) => item.id !== data.id));
      } else {
        const { data } = await api.addToFavorite(obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("ошибка с фаворитами");
      // console.log(error);
    }
  };

  /** Удаляем из корзины предмет(из базы и из фронта)  */
  const handleRemoveItemBasket = (id) => {
    api.deleteFromBasket(id);
    setBasketSneakers((prev) => prev.filter((item) => item.id !== id));
  };

  /* Получаем весь ассортимент */
  useEffect(() => {
    api.getItems().then((res) => setSneakers(res.data));
  }, []);

  /** Получаем содержимое корзины только когда мы её открываем  */
  useEffect(() => {
    api.getToBasket().then((res) => setBasketSneakers(res.data));
  }, [isBasketOpened]);

  /** Получаем содержимое избранных */
  useEffect(() => {
    api.getFromFavorite().then((res) => setFavorites(res.data));
  }, []);

  return (
    <div className="page clear">
      <div className="page__container">
        <Header handleBasketOpened={handleBasketOpened} />
        {isBasketOpened && (
          <AsideCart
            isOpen={isBasketOpened}
            basketSneakers={basketSneakers}
            handleBasketOpened={handleBasketOpened}
            handleRemoveItemBasket={handleRemoveItemBasket}
          />
        )}
        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                handleAddToFavorite={handleAddToFavorite}
                setFavorites={setFavorites}
              />
            }
          />
          <Route
            path="/"
            element={
              <Main
                sneakers={sneakers}
                addToBasket={handleAddToBasket}
                handleRemoveItemBasket={handleRemoveItemBasket}
                handleAddToFavorite={handleAddToFavorite}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
