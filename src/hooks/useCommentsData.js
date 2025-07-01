import { useContext, useEffect, useState } from 'react';

import { tokenContext } from '../context/tokenContext';
import { URL_API } from '../api/const';

export const useCommentsData = (id) => {
  const { token } = useContext(tokenContext);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}?limit=10`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const post = data[0].data.children[0].data;
        const comments = data[1].data.children.map((child) => child.data);

        setCommentsData([post, comments]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return [commentsData];
};
