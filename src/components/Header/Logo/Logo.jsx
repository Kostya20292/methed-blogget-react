import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => (
  <a href="/" className={style.link}>
    <img src={logo} alt="Логотип Blogget" />
  </a>
);
