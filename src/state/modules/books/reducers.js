import * as types from './types'

/*
state

books: {
  isInitialState: boolean,
  isSearching: boolean,
  isSucceededSearch: boolean
  items: [{
    authors: Array<string>,
    imageUrl: string,
    isbn: string,
    title: string,
  }, {
    ...
  }]
  booksStocks: {
    9784798056593: {
      isSearching: boolean,
      items:[{
        libraryId: string, 
        bookRentalUrl: string,
        canBeRend: boolean,
        isOwned: boolean,
      }, {
      ...
      }]
    }, {
      ...
    }
  }
}
*/

const initialState = {
  isInitialState: true,
  isSearching: false,
  isSucceededSearch: true,
  items: [],
  booksStocks: {},
}

export default function bookSearch(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_BOOK_REQUEST:
      return {
        ...state,
        isInitialState: false,
        isSearching: true,
        items: [],
        booksStocks: {},
      }
    case types.SEARCH_BOOK_SUCCESS:
      return {
        ...state,
        isInitialState: false,
        isSearching: false,
        isSucceededSearch: true,
      }
    case types.SEARCH_BOOK_FAIL:
      // Todo
      return {
        ...state,
        isInitialState: false,
        isSearching: false,
        isSucceededSearch: false,
        items: [],
        booksStocks: {},
      }
    case types.FETCH_BOOKS_REQUEST:
      return {
        ...state,
      }
    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isSearching: false,
        items: [...action.payload.items],
        booksStocks: initBooksStocks(action.payload.items)
      }
    case types.FETCH_BOOKS_STOCKS_REQUEST:
      return {
        ...state,
      }
    case types.FETCH_BOOKS_STOCKS_SUCCESS:
      return {
        ...state,
        booksStocks: {
          isBooksStocksFetched: true,
          ...setBooksStocks(state.booksStocks, action.payload.booksStocks)
        },
      }
    case types.FETCH_BOOKS_STOCKS_FAIL:
      return {
        ...state,
        booksStocks: {},
      }
    default:
      return state;
  }
}

const initBooksStocks = (items) => {
  let booksStocks = {}
  items.forEach(item => {
    if (item.isbn && item.isbn !== 0) {
      booksStocks[item.isbn] = { isBooksStocksFetched: false, items: [] }
    }
  })
  return booksStocks
}


const setBooksStocks = (currentBooksStocks, fetchedBooksStocks) => {
  let newBooksStocks = { ...currentBooksStocks }

  const isbns = Object.keys(fetchedBooksStocks)
  isbns.forEach(isbn => {
    newBooksStocks[isbn].items = fetchedBooksStocks[isbn];
    newBooksStocks[isbn].isBooksStocksFetched = true;
  });

  return newBooksStocks
}