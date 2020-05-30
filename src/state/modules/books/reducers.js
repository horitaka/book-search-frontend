import * as types from './types'

/*
state

books: {
  isInitialState: boolean,
  isSearching: boolean,
  isSucceededSearch: boolean
  items: Array,
  booksStocks: object
}
*/

const initialState = {
  isInitialState: true,
  isSearching: false,
  isBooksStocksSearching: false,
  isSucceededSearch: true,
  items: [],
  booksStocks: {},
}

export default function bookSearch(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_BOOK_REQUEST:
      return {
        ...state,
        isInitialState: false,
        isSearching: true,
        items: [],
        booksStocks: {},
      }
    case types.SEARCH_BOOK_SUCCESS:
      return {
        ...state,
        isInitialState: false,
        isSearching: false,
        isSucceededSearch: true,
      }
    case types.SEARCH_BOOK_FAIL:
      // Todo
      return {
        ...state,
        isInitialState: false,
        isSearching: false,
        isSucceededSearch: false,
        items: [],
        booksStocks: {},
      }
    case types.FETCH_BOOKS_REQUEST:
      return {
        ...state,
      }
    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isSearching: false,
        items: [...action.payload.items]
      }
    case types.FETCH_BOOKS_STOCKS_REQUEST:
      return {
        ...state,
        isBooksStocksSearching: true,
      }
    case types.FETCH_BOOKS_STOCKS_SUCCESS:
      return {
        ...state,
        booksStocks: { ...action.payload.booksStocks },
        isBooksStocksSearching: false,
      }
    case types.FETCH_BOOKS_STOCKS_FAIL:
      return {
        ...state,
        booksStocks: {},
        isBooksStocksSearching: false,
      }
    default:
      return state;
  }
}
