import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { URL_API } from '../api/const';

export const usePosts = () => {
  const token = useSelector((state) => state.token);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((posts) => setPosts(posts.data.children))
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return [posts];
};
