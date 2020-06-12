import { fork, call, put, select, take, takeEvery, race } from 'redux-saga/effects'

import * as api from '../../util/api'
import * as types from './types'
import {
  runBookSearch, runBookSearchSuccess, runBookSearchFail, runBookSearchTimeout,
  fetchBooks, fetchBooksSuccess,
  fetchBooksStocks, fetchBooksStocksSuccess,
  cancelFetchingBooksStocks, cancelFetchingBooksStocksDone
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
    yield put(cancelFetchingBooksStocks())     // 次の検索が実行されたときは図書館の在庫取得をキャンセルする
    yield put(fetchBooks())
  }
}

export function* searchBookSaga() {
  try {
    // 書籍情報を取得
    const searchQuery = yield select(getSearchQuery);
    const page = yield select(getPage);
    const books = yield call(api.searchBook, searchQuery, page)
    yield put(fetchBooksSuccess(books))

    // 図書館の在庫を取得
    yield put(fetchBooksStocks())

    const libraryIds = yield select(userBookLibrariesSelectors.getLibraryIds)
    // 図書館が登録されていない場合は終了
    if (libraryIds.length === 0) {
      yield put(fetchBooksStocksSuccess([]))
      return
    }

    const isbns = yield select(getIsbns)

    // 次の検索が実行されたときは図書館の在庫取得をキャンセルする
    const { booksStocks, cancel } = yield race({
      booksStocks: call(api.searchBooksStocks, isbns, libraryIds),
      cancel: take(types.CANCEL_FETCHING_BOOKS_STOCKS)
    })
    if (cancel) {
      yield put(cancelFetchingBooksStocksDone())
      return
    }

    yield put(fetchBooksStocksSuccess(booksStocks))
    yield put(runBookSearchSuccess())
  } catch (error) {
    if (error.statusCode) {
      yield put(runBookSearchTimeout())
    } else {
      yield put(runBookSearchFail(error))
    }
  }
}
