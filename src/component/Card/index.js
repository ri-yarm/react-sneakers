import styles from "./Card.module.scss";

const Card = () => {
  /** Добавляем в корзину и меняем картинку */
  const onButtonToBasket = () => {};


  return (
    <article className={styles.card}>
      <img
        src={process.env.PUBLIC_URL + '/img/main__sneakers/1sneak.png'}
        alt=""
        className={styles.card__image}
      />
      <button className={styles.card__like}>
        <img src={process.env.PUBLIC_URL + '/img/card__unliked.svg'} alt="" />
      </button>
      <h3 className={styles.card__title}>
        Мужские Кроссовки Nike Blazer Mid Suede
      </h3>
      <div className={styles.card__info}>
        <span className={styles.card__priceContainer}>
          <p className={styles.card__subtitle}>ЦЕНА:</p>
          <p className={styles.card__price}>12 999 руб</p>
        </span>
        <button className={styles.card__addBasket} onClick={onButtonToBasket}>
          <img src={process.env.PUBLIC_URL + '/img/card__plus.svg'} alt="" />
        </button>
      </div>
    </article>
  );
};

export default Card;
