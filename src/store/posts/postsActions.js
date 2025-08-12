import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL_API } from '../../api/const';

import { postsSlice } from './postsSlice';

export const postsRequestAsync = createAsyncThunk(
  'posts/postsRequestAsync',
  async (newPage, { getState, dispatch }) => {
    let page = getState().postsReducer.page;

    if (newPage) {
      page = newPage;
      dispatch(postsSlice.actions.changePage(page));
    }

    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const isLast = getState().postsReducer.isLast;

    if (!token) return;

    if (isLast) {
      const currentState = getState().postsReducer;
      return {
        posts: currentState.posts,
        after: currentState.after,
      };
    }

    const response = await axios(`${URL_API}/${page}?limit=10${after && `&after=${after}`}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    const { data } = response;

    if (after) {
      const existingPosts = getState().postsReducer.posts;
      const newPosts = data.data.children;
      const uniqueNewPosts = newPosts.filter(
        (newPost) => !existingPosts.some((existingPost) => existingPost.data.id === newPost.data.id)
      );

      return {
        posts: [...existingPosts, ...uniqueNewPosts],
        after: data.data.after,
      };
    } else {
      return {
        posts: data.data.children,
        after: data.data.after,
      };
    }
  }
);
