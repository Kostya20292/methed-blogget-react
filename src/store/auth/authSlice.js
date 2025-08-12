import { createSlice } from '@reduxjs/toolkit';

import { authRequestAsync } from './authActions';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogout: (state) => {
      state.data = {};
      state.loading = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authRequestAsync.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(authRequestAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
    });
    builder.addCase(authRequestAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export default authSlice.reducer;
