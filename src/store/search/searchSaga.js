import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { URL_API } from '../../api/const';

import { searchSlice } from './searchSlice';

import { postsSlice } from '../posts/postsSlice';

const fetchSearch = async (action) => {
  const request = await axios(`${URL_API}/search?q=${action.payload.search}`, {
    headers: {
      Authorization: `bearer ${action.payload.token}`,
    },
  });

  return request.data;
};

function* workerSearch(action) {
  try {
    const { data } = yield fetchSearch(action);

    yield put(
      searchSlice.actions.searchRequestSuccess({
        posts: data.children,
        after: data.after,
      })
    );

    yield put(
      postsSlice.actions.setSearchResults({
        posts: data.children,
        after: data.after,
      })
    );
  } catch (error) {
    yield put(searchSlice.actions.searchRequestError(error.message));
  }
}

export function* watchSearch() {
  yield takeLatest('search/searchRequest', workerSearch);
}
