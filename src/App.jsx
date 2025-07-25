import { useDispatch } from 'react-redux';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Notification } from './components/UI/Notification/Notification';

import { updateToken } from './store/token/tokenActions';

import { getToken } from './api/token';

const App = () => {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));

  return (
    <>
      <Header />
      <Main />
      <Notification />
    </>
  );
};

export default App;
