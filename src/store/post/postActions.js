import axios from 'axios';

import { URL_API } from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (post, comments) => ({
  type: POST_REQUEST_SUCCESS,
  post,
  comments,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;

  dispatch(postRequest());

  axios(`${URL_API}/comments/${id}?limit=10`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      const post = data[0].data.children[0].data;
      const comments = data[1].data.children.map((child) => child.data);

      dispatch(postRequestSuccess(post, comments));
    })
    .catch((err) => {
      console.log(err);
      dispatch(postRequestError(err));
    });
};
