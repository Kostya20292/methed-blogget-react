import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL_API } from '../../api/const';

export const postRequestAsync = createAsyncThunk('post/fetch', (id, { getState }) => {
  const token = getState().tokenReducer.token;

  if (!token) return;

  return axios(`${URL_API}/comments/${id}?limit=10`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      const post = data[0].data.children[0].data;
      const comments = data[1].data.children.map((child) => child.data);

      return { post, comments };
    })
    .catch((error) => ({ error: error.toString() }));
});
