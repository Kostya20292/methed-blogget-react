import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchRequest: (state) => {
      state.posts = [];
      state.loading = true;
      state.error = '';
      state.after = '';
      state.isLast = false;
    },
    searchRequestSuccess: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    searchRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
