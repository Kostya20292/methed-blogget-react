import { setToken } from '../../api/token';

import { DELETE_TOKEN, UPDATE_TOKEN } from '../../constants/constants';

export const tokenMiddleware = (store) => (next) => (action) => {
  action.type === UPDATE_TOKEN && setToken(action.payload.token);

  action.type === DELETE_TOKEN && setToken('');

  next(action);
};
