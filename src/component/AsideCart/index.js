import { useEffect, useContext, useState } from "react";

import Info from "../Info";

import styles from "./Aside.module.scss";

import { SneakersContext } from "../../contexts/SneakersContext";
import { usePrice } from "../hooks/usePrice";

export const AsideCart = ({ isOpen, handleRemoveItemBasket, handleBuy }) => {
  const { totalPrice, tax } = usePrice();
  const [isBuying, setIsBuying] = useState(false);
  // const [buyingId, setBuyingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false); //! баг кнопка не дизейблится
  const { handleBasketOpened, basketSneakers } = useContext(SneakersContext);

  const clickOverlay = (evt) => {
    if (evt.target === evt.currentTarget) handleBasketOpened();
  };

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      handleBuy({
        items: basketSneakers,
      });
      setIsBuying(true);
    } catch (error) {
      alert("не удалось купить(");
      console.log(error);
    }
    setIsLoading(false);
  };

  const SneakersElement = basketSneakers?.map((item, index) => (
    <div className={styles.basket__item} key={index}>
      <img
        className={styles.basket__image}
        src={process.env.PUBLIC_URL + item.img}
        alt=""
      />
      <div className="">
        <h3 className={styles.basket__titleItem}>{item.title}</h3>
        <p className={styles.itemPrice}>{item.price} руб.</p>
      </div>
      <button
        className={styles.basket__remove}
        onClick={() => handleRemoveItemBasket(item.id)}
      >
        <img
          src={process.env.PUBLIC_URL + "/img/basket__delete-item.svg"}
          alt=""
        />
      </button>
    </div>
  ));

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlay_visible : ''}`} onClick={clickOverlay}>
      <aside className={`${styles.basket} ${isOpen ? styles.basket_visible : ''}`}>
        <div className={styles.basket__wrap}>
          <h3 className={styles.basket__title}>Корзина</h3>
          <button
            className={styles.basket__remove}
            onClick={handleBasketOpened}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/basket__delete-item.svg"}
              alt=""
            />
          </button>
        </div>

        {basketSneakers.length > 0 ? (
          <>
            <div className={styles.basket__itemsContainer}>
              {SneakersElement}
            </div>

            <div className={styles.basket__price}>
              <div className={styles.basket__tax}>
                <p>Коммиссия 10%: </p>
                <span className={styles.basket__dashed}></span>
                <p>{tax} руб. </p>
              </div>
              <div className={styles.basket__total}>
                <p>Итого: </p>
                <span className={styles.basket__dashed}></span>
                <p>{totalPrice + tax} руб. </p>
              </div>
              <button
                disabled={isLoading}
                className={`button ${styles.basket__submitButton}`}
                onClick={onClickOrder}
              >
                Оформить заказ
                <span className={styles.basket__submitButton_arrow}>
                  {" "}
                  &#10132;{" "}
                </span>
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isBuying ? "Заказ оформлен!" : "Корзина пустая"}
            subtitle={
              isBuying
                ? `Ваш заказ #${Math.round(
                    (Math.random() * 150) / 1.4
                  )} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            img={
              isBuying
                ? "/img/basket__completeOrder.svg"
                : "/img/basket__empty.svg"
            }
          />
        )}
      </aside>
    </div>
  );
};
