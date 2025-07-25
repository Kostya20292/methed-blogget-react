import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

import { tokenMiddleware } from './token/tokenActions';
import { tokenReducer } from './token/tokenReducer';

import { commentReducer } from './comments/commentsReducer';

import { authReducer } from './auth/authReducer';

import { postsReducer } from './posts/postsReducer';

import { postReducer } from './post/postReducer';

const rootReducer = combineReducers({
  authReducer,
  tokenReducer,
  postsReducer,
  commentReducer,
  postReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);
