import { createSelector } from 'reselect'

import { userBookLibrariesSelectors } from '../user-book-libraries'

const bookItems = state => state.books.items;
const booksStocks = state => state.books.booksStocks;

export const getSearchQuery = state => state.books.searchQuery;
export const getPage = state => state.books.page;

export const getBookItemsAndStocks = createSelector(
  [bookItems, booksStocks, userBookLibrariesSelectors.userBookLibraries],
  (bookItems, booksStocks, userBookLibraries) => {
    if (!bookItems || bookItems.length === 0) {
      return []
    }

    let bookItemsAndStocks = bookItems.map(item => {
      let result = {
        ...item,
        stocksByLibrary: getStocksByLibrary(item.isbn, booksStocks, userBookLibraries),
        isBooksStocksFetched: getIsBooksStocksFetchd(item.isbn, booksStocks),
      }
      return result
    })

    return bookItemsAndStocks
  }
)

export const getStocksByLibrary = (isbn, booksStocks, userBookLibraries) => {
  let result = []

  if (!userBookLibraries || userBookLibraries.length === 0) {
    return []
  }

  if (!booksStocks || Object.keys(booksStocks).length === 0) {
    result = userBookLibraries.map(library => ({
      ...library,
      bookRentalUrl: '',
      isOwned: false,
      canBeRend: false,
    }))
    return result
  }

  if (isbn === '0' || !isbn) {
    result = userBookLibraries.map(library => ({
      ...library,
      bookRentalUrl: '',
      isOwned: false,
      canBeRend: false,
    }))
    return result
  }

  result = userBookLibraries.map(library => {
    const libraryBooksStocks = booksStocks[isbn].items.find(stock => stock.libraryId === library.libraryId)
    return {
      ...library,
      ...libraryBooksStocks
    }
  })
  return result

}

const getIsBooksStocksFetchd = (isbn, booksStocks) => {
  if (!booksStocks[isbn] || !booksStocks[isbn]['isBooksStocksFetched']) {
    return false
  }

  return booksStocks[isbn]['isBooksStocksFetched']
}

export const getIsbns = createSelector(
  bookItems,
  bookItems => {
    return bookItems.map(item => item.isbn)
  }
)