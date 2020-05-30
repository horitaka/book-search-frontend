import * as types from './types'
import BookSearchFunction from '../../util/BookSearchFunction';

const bookSearchFunction = new BookSearchFunction();


export default function userBookLibraries(state = bookSearchFunction.initUserLibraryList(), action) {
  switch (action.type) {
    case types.ADD_LIBRARY:
      bookSearchFunction.addUserLibrary(action.library);
      return [...state, action.library];
    case types.DELETE_LIBRARY:
      bookSearchFunction.deleteUserLibrary(action.library);
      return state.filter(library => library.libraryId !== action.library.libraryId);
    default:
      return state;
  }
}
