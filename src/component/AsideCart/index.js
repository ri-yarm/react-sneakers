import { useEffect } from "react";

import styles from "./Aside.module.scss";

export const AsideCart = ({
  isOpen,
  basketSneakers,
  handleBasketOpened,
  handleRemoveItemBasket,
}) => {
  const clickOverlay = (evt) => {
    if (evt.target === evt.currentTarget) handleBasketOpened();
  };

  console.log(basketSneakers);

  const SneakersElement = basketSneakers?.map((item, index) => (
    <div className={styles.basket__item} key={index}>
      <img
        className={styles.basket__image}
        src={process.env.PUBLIC_URL + item.img}
        alt=""
      />
      <div className="">
        <h3 className={styles.basket__titleItem}>{item.title}</h3>
        <p className={styles.itemPrice}>{item.price}</p>
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
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={styles.overlay} onClick={clickOverlay}>
      <aside className={styles.basket}>
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
              <div className={styles.basket__total}>
                <p>Итого: </p>
                <span className={styles.basket__dashed}></span>
                <p>21 498 руб. </p>
              </div>
              <div className={styles.basket__tax}>
                <p>Налог 5%: </p>
                <span className={styles.basket__dashed}></span>
                <p>1074 руб. </p>
              </div>
              <button className={`button ${styles.basket__submitButton}`}>
                Оформить заказ
                <span className={styles.basket__submitButton_arrow}>
                  {" "}
                  &#10132;{" "}
                </span>
              </button>
            </div>
          </>
        ) : (
          <div className={styles.emptyBasket}>
            <img
              src={process.env.PUBLIC_URL + "/img/basket__empty.svg"}
              alt=" Пустая корзина."
            />
            <h4 className={styles.emptyBasket__title}>Корзина пустая</h4>
            <p className={styles.emptyBasket__subtitle}>
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className={`button ${styles.emptyBasket__returnButton}`} onClick={handleBasketOpened}>
              <span className={styles.emptyBasket__returnButton_arrow}>
                &#129044;
              </span>
              Вернуться назад
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
