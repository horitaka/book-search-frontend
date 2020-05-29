import * as types from './types'

export function searchBook(keyword) {
  return {
    type: types.SEARCH_BOOK_REQUEST,
    keyword: keyword,
  }
}

export function searchBookSuccess() {
  return {
    type: types.SEARCH_BOOK_SUCCESS,
  }
}

export function searchBookFail() {
  return {
    type: types.SEARCH_BOOK_FAIL,
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