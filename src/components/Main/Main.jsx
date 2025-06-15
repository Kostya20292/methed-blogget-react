import { Layout } from '../Layout/Layout';
import { Tabs } from './Tabs/Tabs';
import { List } from './List/List';

import style from './Main.module.css';
import { PostsContextProvider } from '../../context/postsContext';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <PostsContextProvider>
        <List />
      </PostsContextProvider>
    </Layout>
  </main>
);
