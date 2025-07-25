import { POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from './postsActions';

const initialState = {
  posts: [],
  status: '',
  error: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };

    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        status: 'success',
        error: '',
      };

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};
