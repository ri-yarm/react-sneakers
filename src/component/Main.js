const Main = () => {
  return (
    <main className="content">
      <h2 className="content__title">Все кроссовки</h2>

      <div className="sneakers">
        <article className="card">
          <img
            src="/img/main__sneakers/1sneak.png"
            alt=""
            className="card__image"
          />
          <button className="card__like"></button>
          <h3 className="card__title">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="card__info d-flex">
            <span className="card__price-container d-flex">
              <p className="card__subtitle">ЦЕНА:</p>
              <p className="card__price">12 999 руб</p>
            </span>
            <button className="card__addBasket">
              <img width={10} src="/img/card__plus.svg" alt="" />
            </button>
          </div>
        </article>
        <article className="card">
          <img
            src="/img/main__sneakers/2sneak.png"
            alt=""
            className="card__image"
          />
          <button className="card__like"></button>
          <h3 className="card__title">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="card__info d-flex">
            <span className="card__price-container d-flex">
              <p className="card__subtitle">ЦЕНА:</p>
              <p className="card__price">12 999 руб</p>
            </span>
            <button className="card__addBasket">
              <img width={10} src="/img/card__plus.svg" alt="" />
            </button>
          </div>
        </article>
        <article className="card">
          <img
            src="/img/main__sneakers/3sneak.png"
            alt=""
            className="card__image"
          />
          <button className="card__like"></button>
          <h3 className="card__title">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="card__info d-flex">
            <span className="card__price-container d-flex">
              <p className="card__subtitle">ЦЕНА:</p>
              <p className="card__price">12 999 руб</p>
            </span>
            <button className="card__addBasket">
              <img width={10} src="/img/card__plus.svg" alt="" />
            </button>
          </div>
        </article>
        <article className="card">
          <img
            src="/img/main__sneakers/4sneak.png"
            alt=""
            className="card__image"
          />
          <button className="card__like"></button>
          <h3 className="card__title">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="card__info d-flex">
            <span className="card__price-container d-flex">
              <p className="card__subtitle">ЦЕНА:</p>
              <p className="card__price">12 999 руб</p>
            </span>
            <button className="card__addBasket">
              <img width={10} src="/img/card__plus.svg" alt="" />
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Main;
