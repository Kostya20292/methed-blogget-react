import { createSlice } from '@reduxjs/toolkit';

import { postRequestAsync } from './postActions';

const initialState = {
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postRequestAsync.pending, (state) => {
      state.error = '';
      state.status = 'loading';
    });
    builder.addCase(postRequestAsync.fulfilled, (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.status = 'success';
      state.error = '';
    });
    builder.addCase(postRequestAsync.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    });
  },
});

export default postSlice.reducer;
