import { Link } from 'react-router-dom';

import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => (
  <Link to="/" className={style.link}>
    <img src={logo} alt="Логотип Blogget" />
  </Link>
);
