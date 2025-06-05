import PropTypes from 'prop-types';

import { Layout } from '../Layout/Layout';
import { Logo } from './Logo/Logo';
import { Heading } from './Heading/Heading';
import { Search } from './Search/Search';
import { Auth } from './Auth/Auth';

import style from './Header.module.css';

export const Header = ({ token, delToken }) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text="Главная" />
        <Search />
        <Auth token={token} delToken={delToken} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
