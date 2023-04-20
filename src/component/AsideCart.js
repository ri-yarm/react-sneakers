const AsideCart = () => {
  return (
    <div className="overlay">
      <aside className="basket">
        <h3 className="basket__title">Корзина</h3>

        <div className="basket__items-container">
          <div className="basket__item">
            <img
              className="basket__image"
              src="/img/main__sneakers/1sneak.png"
              alt=""
            />
            <div className="">
              <h3 className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <p className="card__price">12 999 руб</p>
            </div>
            <button className="basket__remove">
              <img src="/img/basket__delete-item.svg" alt="" />
            </button>
          </div>

          <div className="basket__item">
            <img
              className="basket__image"
              src="/img/main__sneakers/7sneak.png"
              alt=""
            />
            <div className="">
              <h3 className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <p className="card__price">12 999 руб</p>
            </div>
            <button className="basket__remove">
              <img src="/img/basket__delete-item.svg" alt="" />
            </button>
          </div>

          <div className="basket__item">
            <img
              className="basket__image"
              src="/img/main__sneakers/5sneak.png"
              alt=""
            />
            <div className="">
              <h3 className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <p className="card__price">12 999 руб</p>
            </div>
            <button className="basket__remove">
              <img src="/img/basket__delete-item.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="basket__price">
          <div className="basket__total">
            <p>Итого: </p>
            <p>21 498 руб. </p>
          </div>
          <div className="basket__tax">
            <p>Налог 5%: </p>
            <p>1074 руб. </p>
          </div>
          <button className="button basket__submit-button">Оформить заказ &#10132;</button>
        </div>
      </aside>
    </div>
  );
};

export default AsideCart;
