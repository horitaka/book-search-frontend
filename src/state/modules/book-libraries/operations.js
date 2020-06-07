import { call, put, takeEvery } from 'redux-saga/effects'

import * as api from '../../util/api'
import * as types from './types'
import { searchLibrary, searchLibrarySuccess, searchLibraryFail, changeKeyword } from './actions'

export { searchLibrary, changeKeyword }

export function* bookLibrariesSaga() {
  yield takeEvery(types.SEARCH_LIBRARY_REQUEST, searchLibrarySaga);
}

export function* searchLibrarySaga(action) {
  const prefecture = action.prefecture;
  try {
    const libraryList = yield call(api.searchLibrary, prefecture);
    yield put(searchLibrarySuccess(libraryList))
  } catch (error) {
    yield put(searchLibraryFail(error))
  }
}