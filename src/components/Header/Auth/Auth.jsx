import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import { urlAuth } from '../../../api/auth';

import { authContext } from '../../../context/authContext';

import { deleteToken } from '../../../store';

import { ReactComponent as LoginIcon } from './img/login.svg';

import style from './Auth.module.css';

export const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { auth } = useContext(authContext);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteToken());
  };

  return (
    <div className={style.container}>
      {auth.name ? (
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
