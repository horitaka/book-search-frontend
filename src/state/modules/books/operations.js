import { call, put, takeEvery } from 'redux-saga/effects'

import BookSearchFunction from '../../util/BookSearchFunction';
import * as types from './types'
import { searchBook, searchBookSuccess, searchBookFail } from './actions'

export { searchBook }

export function* booksSaga() {
  yield takeEvery(types.SEARCH_BOOK_REQUEST, searchBookSaga)
}

function* searchBookSaga(action) {
  const bookSearch = new BookSearchFunction();
  const keyword = action.keyword;
  const libraryIDList = action.libraryIDList;
  try {
    const bookInfoList = yield call(bookSearch.searchBook.bind(bookSearch), keyword, libraryIDList);
    yield put(searchBookSuccess(bookInfoList))
  } catch (exception) {
    console.warn(exception)
    yield put(searchBookFail(exception)) // Todo:
  }
}
