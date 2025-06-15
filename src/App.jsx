import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';

const App = () => (
  <TokenContextProvider>
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  </TokenContextProvider>
);

export default App;
