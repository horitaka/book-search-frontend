import * as types from './types'
import BookSearchFunction from '../../util/BookSearchFunction';

const bookSearchFunction = new BookSearchFunction();


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
    default:
      return state;
  }
}
