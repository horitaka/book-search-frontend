import * as types from './types'

export function searchBook(keyword, libraryIDList) {
  return {
    type: types.SEARCH_BOOK_REQUEST,
    keyword: keyword,
    libraryIDList: libraryIDList,
  }
}

export function searchBookSuccess(bookInfoList) {
  return {
    type: types.SEARCH_BOOK_SUCCESS,
    bookInfoList: bookInfoList,
  }
}

export function searchBookFail() {
  return {
    type: types.SEARCH_BOOK_FAIL,
  }
}