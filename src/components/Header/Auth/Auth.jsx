import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Preloader } from '../../UI/Preloader/Preloader';

import { urlAuth } from '../../../api/auth';

import { deleteToken } from '../../../store/token/tokenActions';

import { useAuth } from '../../../hooks/useAuth';

import { ReactComponent as LoginIcon } from './img/login.svg';

import style from './Auth.module.css';
// import { toast } from 'react-toastify';

export const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [auth, clearAuth, loading] = useAuth();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Preloader size={30} />
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={() => setShowLogout(!showLogout)}>
            <img className={style.img} src={auth.img} title={auth.name} alt={auth.name} />
          </button>
          {showLogout && (
            <button className={style.logout} onClick={handleClick}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <a className={style.authLink} href={urlAuth}>
          <LoginIcon className={style.svg} width={50} height={50} />
        </a>
      )}
    </div>
  );
};
