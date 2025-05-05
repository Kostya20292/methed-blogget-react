import { Layout } from '../Layout/Layout';
import { Logo } from './Logo/Logo';
import { Heading } from './Heading/Heading';
import { Search } from './Search/Search';
import { Auth } from './Auth/Auth';

import style from './Header.module.css';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text="Главная" />
        <Search />
        <Auth auth="" />
      </div>
    </Layout>
  </header>
);
