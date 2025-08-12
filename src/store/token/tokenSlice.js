import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload.token;
    },
    deleteToken: (state) => {
      state.token = '';
    },
  },
});

export default tokenSlice.reducer;
