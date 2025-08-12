import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { URL_API } from '../../api/const';

import { tokenSlice } from '../token/tokenSlice';

export const authRequestAsync = createAsyncThunk('auth/fetch', (_, { getState, dispatch }) => {
  const token = getState().tokenReducer.token;

  if (!token) return;

  return axios(`${URL_API}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data: { name, icon_img: iconImg } }) => {
      const data = {
        name,
        img: iconImg,
      };

      return { data };
    })
    .catch((error) => {
      dispatch(tokenSlice.actions.deleteToken());

      toast.error('Ошибка при получении данных пользователя!');

      return { error: error.toString() };
    });
});
