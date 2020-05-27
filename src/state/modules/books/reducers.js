import * as types from './types'
import BookSearchFunction from '../../util/BookSearchFunction';

const bookSearchFunction = new BookSearchFunction();


/*
state

books: {
  isInitialState: boolean,
  isSearching: boolean,
  isSucceededSearch: boolean
  items: Array
}


*/

export default function bookSearch(state = bookSearchFunction.initBookSearch(), action) {
  switch (action.type) {
    case types.SEARCH_BOOK_REQUEST:
      return {
        ...state,
        isInitialState: false,
        isSearching: true,
      }
    case types.SEARCH_BOOK_SUCCESS:
      return {
        ...state,
        isInitialState: false,
        isSearching: false,
        isSucceededSearch: true,
        bookInfoList: action.bookInfoList,
      }
    case types.SEARCH_BOOK_FAIL:
      // Todo
      return {
        ...state,
        isInitialState: false,
        isSearching: false,
        isSucceededSearch: false,
        bookInfoList: [],
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
    default:
      return state;
  }
}
