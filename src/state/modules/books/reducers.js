import * as types from './types'

/*
state

books: {
  isInitialState: boolean,
  isBooksSearching: boolean,
  page: number,
  error: {
    statsuCode: number,
    error:
    message: string
  }
  searchQuery: string,
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
  isBooksSearching: false,
  searchQuery: '',
  page: 1,
  items: [],
  booksStocks: {},
  error: {}
}

export default function bookSearch(state = initialState, action) {
  switch (action.type) {
    case types.RUN_BOOK_SEARCH:
      return {
        ...state,
        isInitialState: false,
        searchQuery: action.payload.searchQuery,
        page: 1,
        items: [],
        booksStocks: {},
        error: {}
      }
    case types.RUN_BOOK_SEARCH_SUCCESS:
      return {
        ...state,
        isInitialState: false,
        error: {}
      }
    case types.RUN_BOOK_SEARCH_FAIL:
      return {
        ...state,
        isInitialState: false,
        isBooksSearching: false,
        items: [],
        booksStocks: {},
        error: action.payload.error,
      }
    case types.RUN_BOOK_SEARCH_TIMEOUT:
      return {
        ...state,
        isInitialState: false,
        isBooksSearching: false,
        booksStocks: {
          ...setBooksStocksTimeout(state.booksStocks)
        }
      }
    case types.FETCH_BOOKS_REQUEST:
      return {
        ...state,
        isBooksSearching: true,
      }
    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isSearching: false,
        isBooksSearching: false,
        page: state.page + 1,
        items: state.items.concat(action.payload.items),
        booksStocks: {
          ...state.booksStocks,
          ...initBooksStocks(action.payload.items)
        }
      }
    case types.FETCH_BOOKS_STOCKS_REQUEST:
      return {
        ...state,
      }
    case types.FETCH_BOOKS_STOCKS_SUCCESS:
      return {
        ...state,
        booksStocks: {
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

export const setBooksStocksTimeout = (booksStocks) => {
  let newBooksStocks = { ...booksStocks }
  const isbns = Object.keys(booksStocks);
  isbns.forEach(isbn => {
    if (newBooksStocks[isbn]['isBooksStocksFetched'] === false) {
      newBooksStocks[isbn]['isTimeout'] = true;
    }
  })

  return newBooksStocks;
}