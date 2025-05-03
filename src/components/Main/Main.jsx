import { Layout } from '../Layout/Layout';
import style from './Main.module.css';

export const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
        <h1>Main</h1>
      </Layout>
    </main>
  );
};
