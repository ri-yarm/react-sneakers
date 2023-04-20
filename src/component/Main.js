const Main = () => {
  return (
    <main className="content">
      <div className="content__head">
        <h2 className="content__title">Все кроссовки</h2>
        <div className="search">
          <img
            className="search__img"
            src="/img/content__search.svg"
            alt=" Иконка поиска."
          />
          <input
            className="search__input"
            type="text"
            placeholder="Поиск кроссовок..."
          />
        </div>
      </div>

      <div className="sneakers">
        <article className="card">
          <img
            src="/img/main__sneakers/1sneak.png"
            alt=""
            className="card__image"
          />
          <button className="card__like">
            <img src="/img/card__unliked.svg" alt="" />
          </button>
          <h3 className="card__title">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="card__info d-flex">
            <span className="card__price-container d-flex">
              <p className="card__subtitle">ЦЕНА:</p>
              <p className="card__price">12 999 руб</p>
            </span>
            <button className="card__addBasket">
              <img src="/img/card__plus.svg" alt="" />
            </button>
          </div>
        </article>
        <article className="card">
          <img
            src="/img/main__sneakers/2sneak.png"
            alt=""
            className="card__image"
          />
          <button className="card__like">
            <img src="/img/card__unliked.svg" alt="" />
          </button>
          <h3 className="card__title">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="card__info d-flex">
            <span className="card__price-container d-flex">
              <p className="card__subtitle">ЦЕНА:</p>
              <p className="card__price">12 999 руб</p>
            </span>
            <button className="card__addBasket">
              <img src="/img/card__plus.svg" alt="" />
            </button>
          </div>
        </article>
        <article className="card">
          <img
            src="/img/main__sneakers/3sneak.png"
            alt=""
            className="card__image"
          />
          <button className="card__like">
            <img src="/img/card__unliked.svg" alt="" />
          </button>
          <h3 className="card__title">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="card__info d-flex">
            <span className="card__price-container d-flex">
              <p className="card__subtitle">ЦЕНА:</p>
              <p className="card__price">12 999 руб</p>
            </span>
            <button className="card__addBasket">
              <img src="/img/card__plus.svg" alt="" />
            </button>
          </div>
        </article>
        <article className="card">
          <img
            src="/img/main__sneakers/4sneak.png"
            alt=""
            className="card__image"
          />
          <button className="card__like">
            <img src="/img/card__unliked.svg" alt="" />
          </button>
          <h3 className="card__title">
            Мужские Кроссовки Nike Blazer Mid Suede
          </h3>
          <div className="card__info d-flex">
            <span className="card__price-container d-flex">
              <p className="card__subtitle">ЦЕНА:</p>
              <p className="card__price">12 999 руб</p>
            </span>
            <button className="card__addBasket">
              <img src="/img/card__plus.svg" alt="" />
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Main;
