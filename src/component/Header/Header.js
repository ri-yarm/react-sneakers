import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.header__logoContainer}>
        <img
          className={styles.header__logo}
          src={process.env.PUBLIC_URL + "/img/header__logo.svg"}
          alt=" Лого."
        />
        <div className={styles.header__logoInfo}>
          <h1 className={styles.header__title}>REACT SNEAKERS</h1>
          <p className={styles.header__subtitle}>Магазин лучших кроссовок</p>
        </div>
      </a>
      <ul className={styles.profile}>
        <li className={styles.profile__basket}>
          <img
            className={styles.profile__image}
            src={process.env.PUBLIC_URL + "/img/header__basket.svg"}
            alt=""
          />
          <span className={styles.profile__title}> 1205 руб.</span>
        </li>
        <li className={styles.profile__heart}>
          <img
            className={styles.profile__image}
            src={process.env.PUBLIC_URL + "/img/header__heart.svg"}
            alt=""
          />
        </li>
        <li className={styles.profile__user}>
          <img
            className={styles.profile__image}
            src={process.env.PUBLIC_URL + "/img/header__profile.svg"}
            alt=""
          />
        </li>
      </ul>
    </header>
  );
};
