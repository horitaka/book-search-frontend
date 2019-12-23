//Navigation
export const SEARCH_BOOK_REQUEST = 'SEARCH_BOOK_REQUEST';
export const SEARCH_BOOK_SUCCESS = 'SEARCH_BOOK_SUCCESS';
export const SEARCH_BOOK_FAIL = 'SEARCH_BOOK_FAIL';
export const DELETE_LIBRARY = 'DELETE_LIBRARY';

export function searchBook(keyword, libraryIDList) {
  return {
    type: SEARCH_BOOK_REQUEST,
    keyword: keyword,
    libraryIDList: libraryIDList,
  }
}

export function searchBookSuccess(bookInfoList) {
  return {
    type: SEARCH_BOOK_SUCCESS,
    bookInfoList: bookInfoList,
  }
}

export function searchBookFail() {
  return {
    type: SEARCH_BOOK_FAIL,
  }
}

export function deleteLibrary(library) {
  return {
    type: DELETE_LIBRARY,
    library: library
  }
}

// Main
export const ADD_LIBRARY = 'ADD_LIBRARY';
export const SEARCH_LIBRARY_REQUEST = 'SEARCH_LIBRARY_REQUEST';
export const SEARCH_LIBRARY_SUCCESS = 'SEARCH_LIBRARY_SUCCESS';
export const SEARCH_LIBRARY_FAIL = 'SEARCH_LIBRARY_FAIL';
export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';

export function addLibrary(library) {
  return {
    type: ADD_LIBRARY,
    library: library
  }
}

export function searchLibrary(prefecture) {
  return {
    type: SEARCH_LIBRARY_REQUEST,
    prefecture: prefecture,
  }
}

export function searchLibrarySuccess(libraryList) {
  return {
    type: SEARCH_LIBRARY_SUCCESS,
    libraryList: libraryList
  }
}

export function searchLibraryFail() {
  return {
    type: SEARCH_LIBRARY_FAIL
  }
}

export function changeKeyword(keyword) {
  return {
    type: CHANGE_KEYWORD,
    keyword: keyword
  }
}
