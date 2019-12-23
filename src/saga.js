import { call, put, takeEvery, fork } from 'redux-saga/effects'

import { SEARCH_LIBRARY_REQUEST, SEARCH_BOOK_REQUEST, searchLibrarySuccess, searchLibraryFail, searchBookSuccess, searchBookFail } from './actions'
import BookSearchFunction from './util/BookSearchFunction';

function* searchLibrary(action) {
  const bookSearch = new BookSearchFunction();
  const prefecture = action.prefecture;
  try {
    const libraryList = yield call(bookSearch.searchLibrary.bind(bookSearch), prefecture);
    yield put(searchLibrarySuccess(libraryList))
  } catch (exception) {
    console.warn(exception)
    yield put(searchLibraryFail(exception)) // Todo:
  }
}

function* handleSeachLibraryRequest() {
  yield takeEvery(SEARCH_LIBRARY_REQUEST, searchLibrary);
}

function* searchBook(action) {
  const bookSearch = new BookSearchFunction();
  const keyword = action.keyword;
  const libraryIDList = action.libraryIDList;
  try {
    const bookInfoList = yield call(bookSearch.searchBook.bind(bookSearch), keyword, libraryIDList);
    yield put(searchBookSuccess(bookInfoList))
  } catch (exception) {
    console.warn(exception)
    yield put(searchBookFail(exception)) // Todo:
  }}

function* handleSeachBookRequest() {
  yield takeEvery(SEARCH_BOOK_REQUEST, searchBook)
}

export default function* rootSaga() {
  yield fork(handleSeachLibraryRequest);
  yield fork(handleSeachBookRequest);
}
