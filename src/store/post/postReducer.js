import { POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS } from './postActions';

const initialState = {
  post: [],
  comments: [],
  status: '',
  error: '',
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };

    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        post: action.post,
        comments: action.comments,
        status: 'success',
        error: '',
      };

    case POST_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};
