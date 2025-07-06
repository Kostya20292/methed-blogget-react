import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { URL_API } from '../api/const';

import { deleteToken } from '../store';

export const useAuth = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ name, icon_img: iconImg }) => {
        setAuth({
          name,
          img: iconImg,
        });
      })
      .catch(() => {
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  return [auth];
};
