import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { tokenMiddleware } from './token/tokenMiddleware';
import tokenReducer from './token/tokenSlice';

import commentReducer from './comment/commentSlice';

import authReducer from './auth/authSlice';

import postsReducer from './posts/postsSlice';

import postReducer from './post/postSlice';

import searchReducer from './search/searchSlice';

import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authReducer,
    tokenReducer,
    postsReducer,
    commentReducer,
    postReducer,
    searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
