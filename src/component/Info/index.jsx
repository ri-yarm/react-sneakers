import { useContext } from "react";
import styles from "./Info.module.scss";

import { SneakersContext } from "../../contexts/SneakersContext";

const Info = ({ title, subtitle, img }) => {
  const { handleBasketOpened } = useContext(SneakersContext);

  return (
    <div className={styles.emptyBasket}>
      <img src={process.env.PUBLIC_URL + img} alt={` ${title}.`} />
      <h4 className={styles.emptyBasket__title}>{title}</h4>
      <p className={styles.emptyBasket__subtitle}>{subtitle}</p>
      <button
        className={`button ${styles.emptyBasket__returnButton}`}
        onClick={handleBasketOpened}
      >
        <span className={styles.emptyBasket__returnButton_arrow}>
          &#129044;
        </span>
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
