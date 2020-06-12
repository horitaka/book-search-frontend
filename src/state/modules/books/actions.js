import * as types from './types'

export function runBookSearch(searchQuery) {
  return {
    type: types.RUN_BOOK_SEARCH,
    payload: {
      searchQuery: searchQuery
    },
  }
}

export function runBookSearchSuccess() {
  return {
    type: types.RUN_BOOK_SEARCH_SUCCESS,
  }
}

export function runBookSearchFail(error) {
  return {
    type: types.RUN_BOOK_SEARCH_FAIL,
    payload: {
      error: error,
    }
  }
}


export function fetchBooks() {
  return {
    type: types.FETCH_BOOKS_REQUEST,
  }
}

export function fetchBooksSuccess(bookItems) {
  return {
    type: types.FETCH_BOOKS_SUCCESS,
    payload: {
      items: bookItems,
    }
  }
}


export function fetchBooksStocks() {
  return {
    type: types.FETCH_BOOKS_STOCKS_REQUEST
  }
}

export function fetchBooksStocksSuccess(booksStocks) {
  return {
    type: types.FETCH_BOOKS_STOCKS_SUCCESS,
    payload: {
      booksStocks: booksStocks,
    }
  }
}

export function cancelFetchingBooksStocks() {
  return {
    type: types.CANCEL_FETCHING_BOOKS_STOCKS,
  }
}

export function cancelFetchingBooksStocksDone() {
  return {
    type: types.CANCEL_FETCHING_BOOKS_STOCKS_DONE,
  }
}