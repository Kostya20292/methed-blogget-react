import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Notification } from './components/UI/Notification/Notification';

import { updateToken } from './store/token/tokenActions';

import { getToken } from './api/token';

const App = () => {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Header />
            <Main />
            <Notification />
          </>
        }
      />
    </Routes>
  );
};

export default App;
