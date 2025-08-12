import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authRequestAsync } from '../store/auth/authActions';
import { authSlice } from '../store/auth/authSlice';

export const useAuth = () => {
  const auth = useSelector((state) => state.authReducer.data);
  const token = useSelector((state) => state.tokenReducer.token);
  const loading = useSelector((state) => state.authReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authSlice.actions.authLogout());

  return [auth, clearAuth, loading];
};
