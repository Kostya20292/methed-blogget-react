import { useState } from 'react';
import PropTypes from 'prop-types';

import { urlAuth } from '../../../api/auth';
import { useAuth } from '../../../hooks/useAuth';

import { ReactComponent as LoginIcon } from './img/login.svg';

import style from './Auth.module.css';

export const Auth = ({ token, delToken }) => {
  const [auth] = useAuth(token, delToken);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={() => setShowLogout(!showLogout)}>
            <img className={style.img} src={auth.img} title={auth.name} alt={auth.name} />
          </button>
          {showLogout && (
            <button className={style.logout} onClick={delToken}>
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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
