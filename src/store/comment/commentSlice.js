import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comment: 'Ваш комментарий!',
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    updateComment: (state, action) => {
      state.comment = action.payload.comment;
    },
  },
});

export default commentSlice.reducer;
