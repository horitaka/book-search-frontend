import {
  DELETE_LIBRARY,
  ADD_LIBRARY,
  CHANGE_KEYWORD,
  SEARCH_LIBRARY_SUCCESS,
  SEARCH_LIBRARY_FAIL,
  SEARCH_BOOK_REQUEST,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK_FAIL,
} from './actions'
import BookSearchFunction from './util/BookSearchFunction';

const bookSearchFunction = new BookSearchFunction();

function userLibraryList(state = bookSearchFunction.initUserLibraryList(), action) {
  switch(action.type) {
    case ADD_LIBRARY:
      bookSearchFunction.addUserLibrary(action.library);
      return [...state, action.library];
    case DELETE_LIBRARY:
      bookSearchFunction.deleteUserLibrary(action.library);
      return state.filter(library => library.libraryID !== action.library.libraryID);
    default:
      return state;
  }
}

function libraryRegistration(state = bookSearchFunction.initLibraryRegistration(), action) {
  switch (action.type) {
    case CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
        isSucceededRegistration: false,
      };
    case SEARCH_LIBRARY_SUCCESS:
      return {
        ...state,
        isInitialState: false,
        libraryList: action.libraryList,
        isSucceededRegistration: false,
      }
    case SEARCH_LIBRARY_FAIL:
      // Todo
      return {
        ...state,
        isInitialState: false,
        isSucceededRegistration: false,
      }
    case ADD_LIBRARY:
      return {
        ...state,
        isSucceededRegistration: true,
      }
    default:
      return state;
  }
}

function bookSearch(state = bookSearchFunction.initBookSearch(), action) {
  switch (action.type) {
    case SEARCH_BOOK_REQUEST:
      return {
        ...state,
        isInitialState: false,
        isSearching: true,
      }
    case SEARCH_BOOK_SUCCESS:
      return {
        ...state,
        isInitialState: false,
        isSearching: false,
        isSucceededSearch: true,
        bookInfoList: action.bookInfoList,
      }
    case SEARCH_BOOK_FAIL:
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

function rootReducers(state = {}, action) {
  return {
    userLibraryList: userLibraryList(state.userLibraryList, action),
    libraryRegistration: libraryRegistration(state.libraryRegistration, action),
    bookSearch: bookSearch(state.bookSearch, action)
  }
}

export default rootReducers;
