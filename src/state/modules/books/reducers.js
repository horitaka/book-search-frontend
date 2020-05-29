import * as types from './types'
import BookSearchFunction from '../../util/BookSearchFunction';

const bookSearchFunction = new BookSearchFunction();


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

export default function bookSearch(state = bookSearchFunction.initBookSearch(), action) {
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
        items: [...action.payload.items]
      }
    case types.FETCH_BOOKS_STOCKS_SUCCESS:
      return {
        ...state,
        booksStocks: { ...action.payload.booksStocks }
      }
    default:
      return state;
  }
}
