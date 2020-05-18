import * as types from './types'

export function searchLibrary(prefecture) {
  return {
    type: types.SEARCH_LIBRARY_REQUEST,
    prefecture: prefecture,
  }
}

export function searchLibrarySuccess(libraryList) {
  return {
    type: types.SEARCH_LIBRARY_SUCCESS,
    libraryList: libraryList
  }
}

export function searchLibraryFail() {
  return {
    type: types.SEARCH_LIBRARY_FAIL
  }
}

export function changeKeyword(keyword) {
  return {
    type: types.CHANGE_KEYWORD,
    keyword: keyword
  }
}

