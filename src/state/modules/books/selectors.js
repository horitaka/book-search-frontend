import { createSelector } from 'reselect'

import { userBookLibrariesSelectors } from '../user-book-libraries'

const bookInfoList = state => state.books.bookInfoList;
const bookItems = state => state.books.items;
const booksStocks = state => state.books.booksStocks;

export const getBookInfoList = createSelector(
  [userBookLibrariesSelectors.userBookLibraries, bookInfoList],
  (userBookLibraries, bookInfoList) => {
    const newBookInfoList = bookInfoList.map(bookInfo => {

      return ({
        ...bookInfo,
        stockByLibrary: bookInfo.stockByLibrary.map(stock => {
          const libraryInfo = userBookLibraries.find(userLibrary => userLibrary.libraryID === stock.libraryID)
          return {
            ...stock,
            ...libraryInfo,
          }
        })
      })
    })
    return newBookInfoList;
  }
)

export const getBookItemsAndStocks = createSelector(
  [bookItems, booksStocks],
  (bookItems, booksStocks) => {

    return booksStocks
  }
)

export const getIsbns = createSelector(
  bookItems,
  bookItems => {
    return bookItems.map(item => item.isbn)
  }
)