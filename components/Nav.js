import navStyles from "../styles/Mobile/Nav.module.css";

const Nav = () => {
  return (
    <div className={navStyles.header}>
      <div className={navStyles.header__logo}>
        <img
          width="50%"
          src="https://cdn.igp.com/raw/upload/assets/images/igp-logo.png?v=6"
          title="IGP"
          alt="IGP"
        />
      </div>

      <div className={navStyles.header__nav}>
        <div className={navStyles.nav__item}>
          <img
            src="https://cdn.igp.com/raw/upload/assets/svg-icons/rakhi-header-icon-2022.svg"
            alt=""
            className={navStyles.nav__item__img}
          />
        </div>
        <div className={navStyles.nav__item}>
          <img
            src="https://cdn.igp.com/raw/upload/assets/svg-icons/Rupee-big.svg"
            alt=""
            className={navStyles.nav__item__img}
          />
        </div>
        <div className={navStyles.nav__item}>
          <img
            src="https://cdn.igp.com/raw/upload/assets/svg-icons/heart-2.svg"
            alt=""
            className={navStyles.nav__item__img}
          />
        </div>
        <div className={navStyles.nav__item}>
          <img
            src="https://cdn.igp.com/raw/upload/assets/svg-icons/Cart-big.svg"
            alt=""
            className={navStyles.nav__item__img}
          />
        </div>
        <div className={navStyles.nav__item}>
          <img
            src="https://cdn.igp.com/raw/upload/assets/svg-icons/Profile-big.svg"
            alt=""
            className={navStyles.nav__item__img}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
