import { fork, call, put, select, take, takeEvery } from 'redux-saga/effects'

import * as api from '../../util/api'
import * as types from './types'
import {
  runBookSearch, runBookSearchSuccess, runBookSearchFail,
  fetchBooks, fetchBooksSuccess,
  fetchBooksStocks, fetchBooksStocksSuccess,
} from './actions'
import { getSearchQuery, getPage, getIsbns } from './selectors'
import { userBookLibrariesSelectors } from '../user-book-libraries'


export { runBookSearch, fetchBooks }

export function* booksSaga() {
  yield fork(watchRunBookSearch)
  yield takeEvery(types.FETCH_BOOKS_REQUEST, searchBookSaga)
}

function* watchRunBookSearch() {
  while (true) {
    yield take(types.RUN_BOOK_SEARCH);
    yield put(fetchBooks())
  }
}

export function* searchBookSaga() {
  try {
    const searchQuery = yield select(getSearchQuery);
    const page = yield select(getPage);
    const books = yield call(api.searchBook, searchQuery, page)
    yield put(fetchBooksSuccess(books))

    yield put(fetchBooksStocks())
    const isbns = yield select(getIsbns)
    const libraryIds = yield select(userBookLibrariesSelectors.getLibraryIds)
    if (libraryIds.length !== 0) {
      const booksStocks = yield call(api.searchBooksStocks, isbns, libraryIds)
      yield put(fetchBooksStocksSuccess(booksStocks))
    } else {
      yield put(fetchBooksStocksSuccess([]))
    }

    yield put(runBookSearchSuccess())
  } catch (error) {
    yield put(runBookSearchFail(error))
  }
}
