import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { useToken } from './hooks/useToken';

const App = () => {
  const [token, delToken] = useToken('');

  return (
    <>
      <Header token={token} delToken={delToken} />
      <Main />
      <footer></footer>
    </>
  );
};

export default App;
