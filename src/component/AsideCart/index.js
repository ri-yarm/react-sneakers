import styles from "./Aside.module.scss";

export const AsideCart = () => {
  return (
    <div className={styles.overlay}>
      <aside className={styles.basket}>
        <h3 className={styles.basket__title}>Корзина</h3>

        <div className={styles.basket__itemsContainer}>
          <div className={styles.basket__item}>
            <img
              className={styles.basket__image}
              src={process.env.PUBLIC_URL + "/img/main__sneakers/5sneak.png"}
              alt=""
            />
            <div className="">
              <h3 className={styles.basket__titleItem}>
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <p className={styles.itemPrice}>12 999 руб</p>
            </div>
            <button className={styles.basket__remove}>
              <img
                src={process.env.PUBLIC_URL + "/img/basket__delete-item.svg"}
                alt=""
              />
            </button>
          </div>
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
      </aside>
    </div>
  );
};
