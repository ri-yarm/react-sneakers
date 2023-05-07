import { useState, Children, cloneElement, useEffect } from 'react';
import styles from './Slider.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SLIDER_WIDTH = 960;

export const Slider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const maxOffset = -(SLIDER_WIDTH * (children.length - 1));

  const handleClickLeft = () => {
    setOffset((curOffset) => {
      const newOffset = curOffset + SLIDER_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const handleClickRight = () => {
    setOffset((curOffset) => {
      const newOffset = curOffset - SLIDER_WIDTH;

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setInterval(() => {
      setOffset((curOffset) => {
        const newOffset = curOffset - SLIDER_WIDTH;

        return Math.max(newOffset, maxOffset);
      });

      if (offset === maxOffset) {
        setOffset(0);
      }
    }, 4000);
  }, [maxOffset, offset]);

  return (
    <div className={styles.slider}>
      <FaChevronLeft className={styles.arrow} onClick={handleClickLeft} />
      <div className={styles.slider__container}>
        <div
          className={styles.slider__items}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {Children.map(children, (child) => {
            return cloneElement(child, { className: styles.slider__item });
          })}
        </div>
      </div>
      <FaChevronRight className={styles.arrow} onClick={handleClickRight} />
    </div>
  );
};
