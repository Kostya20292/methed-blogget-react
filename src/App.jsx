import { Provider } from 'react-redux';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { AuthContextProvider } from './context/authContext';

import { store } from './store';

const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  </Provider>
);

export default App;
