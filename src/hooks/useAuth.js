import { useEffect, useState } from 'react';

import { URL_API } from '../api/const';

export const useAuth = (token, delToken) => {
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
        delToken();
      });
  }, [token]);

  return [auth];
};
