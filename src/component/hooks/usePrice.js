import React from "react";
import { SneakersContext } from "../../contexts/SneakersContext";

/** для подсчёта стоимости и коммисси */
export function usePrice() {
  const { basketSneakers } = React.useContext(SneakersContext);
  const totalPrice = basketSneakers.reduce((sum, i) => sum + i.price, 0);

  // Коммисия
  const tax = Math.round((totalPrice / 100) * 10);

  return { totalPrice, tax };
}
