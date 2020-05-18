import { call, put, takeEvery } from 'redux-saga/effects'

import BookSearchFunction from '../../util/BookSearchFunction';
import * as types from './types'
import { searchLibrary, searchLibrarySuccess, searchLibraryFail, changeKeyword } from './actions'

export { searchLibrary, changeKeyword }

export function* bookLibrariesSaga() {
  yield takeEvery(types.SEARCH_LIBRARY_REQUEST, searchLibrarySaga);
}

function* searchLibrarySaga(action) {
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