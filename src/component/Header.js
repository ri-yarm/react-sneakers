const Header = () => {
  return (
    <header className="header d-flex justify-between align-center p-45">
      <a className="header__logo-container d-flex align-center">
        <img className="mr-15" src="/img/header__logo.svg" alt="" />
        <div className="header__logo-info">
          <h1 className="header__title">REACT SNEAKERS</h1>
          <p className="header__subtitle">Магазин лучших кроссовок</p>
        </div>
      </a>
      <ul className="profile d-flex">
        <li className="profile__basket mr-30 d-flex align-center">
          <img
            className="profile__image mr-10"
            src="/img/header__basket.svg"
            alt=""
          />
          <span className="profile__title"> 1205 руб.</span>
        </li>
        <li className="profile__heart mr-30">
          <img className="profile__image" src="/img/header__heart.svg" alt="" />
        </li>
        <li className="profile__user">
          <img
            className="profile__image"
            src="/img/header__profile.svg"
            alt=""
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
