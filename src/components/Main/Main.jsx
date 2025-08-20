import { Route, Routes } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
import { Tabs } from './Tabs/Tabs';
import { List } from './List/List';
import { Modal } from '../Modal/Modal';
import { Home } from './Home/Home';
import { Error } from './Error/Error';

import style from './Main.module.css';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path="/category/:page" element={<List />}>
          <Route path="post/:id" element={<Modal />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="/category" element={<Home />} />
        <Route path="/auth" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  </main>
);
