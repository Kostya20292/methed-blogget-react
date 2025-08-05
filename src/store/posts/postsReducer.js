import {
  CHANGE_PAGE,
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_SUCCESS_AFTER,
} from './postsActions';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false,
        error: '',
        after: action.after,
        isLast: !action.after,
      };

    case POSTS_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
        loading: false,
        error: '',
        after: action.after,
        isLast: !action.after,
      };

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        posts: [],
        after: '',
        isLast: false,
      };

    default:
      return state;
  }
};
