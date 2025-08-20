import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsActions';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.posts = [];
      state.after = '';
      state.isLast = false;
    },
    setSearchResults: (state, action) => {
      state.posts = action.payload.posts;
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.loading = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postsRequestAsync.pending, (state) => {
      state.error = '';
      state.loading = true;
    });
    builder.addCase(postsRequestAsync.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    });
    builder.addCase(postsRequestAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;
