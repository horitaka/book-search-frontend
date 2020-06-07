import BookSearchFunction from '../..//util/BookSearchFunction';
import * as types from './types'
import { userBookLibrariesTypes } from '../user-book-libraries'

const bookSearchFunction = new BookSearchFunction();

export default function bookLibraries(state = bookSearchFunction.initLibraryRegistration(), action) {
  switch (action.type) {
    case types.CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
        isSucceededRegistration: false,
      };
    case types.SEARCH_LIBRARY_REQUEST:
      return {
        ...state,
        error: {}
      }
    case types.SEARCH_LIBRARY_SUCCESS:
      return {
        ...state,
        isInitialState: false,
        libraryList: action.libraryList,
        isSucceededRegistration: false,
      }
    case types.SEARCH_LIBRARY_FAIL:
      return {
        ...state,
        isInitialState: false,
        isSucceededRegistration: false,
        error: action.payload.error,
      }
    case userBookLibrariesTypes.ADD_LIBRARY:
      return {
        ...state,
        isSucceededRegistration: true,
      }
    default:
      return state;
  }
}