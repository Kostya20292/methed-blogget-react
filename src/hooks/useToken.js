import { useEffect, useState } from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  const delToken = () => {
    localStorage.removeItem('bearer');
    setToken('');
    window.location.replace(location.origin);
  };

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1)).get('access_token');

      setToken(token);
    }

    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  return [token, delToken];
};
