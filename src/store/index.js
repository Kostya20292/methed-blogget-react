import { configureStore } from '@reduxjs/toolkit';

import { tokenMiddleware } from './token/tokenMiddleware';
import tokenReducer from './token/tokenSlice';

import commentReducer from './comment/commentSlice';

import authReducer from './auth/authSlice';

import postsReducer from './posts/postsSlice';

import postReducer from './post/postSlice';

export const store = configureStore({
  reducer: {
    authReducer,
    tokenReducer,
    postsReducer,
    commentReducer,
    postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware),
});
