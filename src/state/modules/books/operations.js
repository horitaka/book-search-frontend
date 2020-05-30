import { call, put, select, takeEvery } from 'redux-saga/effects'

import * as api from '../../util/api'
import * as types from './types'
import {
  searchBook, searchBookSuccess, searchBookFail,
  fetchBooks, fetchBooksSuccess,
  fetchBooksStocks, fetchBooksStocksSuccess,
} from './actions'
import { getIsbns } from './selectors'
import { userBookLibrariesSelectors } from '../user-book-libraries'

export { searchBook }

export function* booksSaga() {
  yield takeEvery(types.SEARCH_BOOK_REQUEST, searchBookSaga)
}

export function* searchBookSaga(action) {
  const keyword = action.keyword;
  try {
    yield put(fetchBooks())
    const books = yield call(api.searchBook, keyword)
    yield put(fetchBooksSuccess(books))

    yield put(fetchBooksStocks())
    const isbns = yield select(getIsbns)
    const libraryIds = yield select(userBookLibrariesSelectors.getLibraryIds)
    const booksStocks = yield call(api.searchBooksStocks, isbns, libraryIds)
    yield put(fetchBooksStocksSuccess(booksStocks))

    yield put(searchBookSuccess())
  } catch (exception) {
    console.warn(exception)
    yield put(searchBookFail(exception)) // Todo:
  }
}
