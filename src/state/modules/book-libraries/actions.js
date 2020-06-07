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

export function searchLibraryFail(error) {
  return {
    type: types.SEARCH_LIBRARY_FAIL,
    payload: {
      error: error,
    }
  }
}

export function changeKeyword(keyword) {
  return {
    type: types.CHANGE_KEYWORD,
    keyword: keyword
  }
}

