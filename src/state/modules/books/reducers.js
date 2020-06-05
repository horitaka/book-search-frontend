import * as types from './types'

/*
state

books: {
  isInitialState: boolean,
  isSearching: boolean,
  isSucceededSearch: boolean
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
  isSearching: false,
  isSucceededSearch: true,
  searchQuery: '',
  page: 0,
  items: [],
  booksStocks: {},
}

export default function bookSearch(state = initialState, action) {
  switch (action.type) {
    case types.RUN_BOOK_SEARCH:
      return {
        ...state,
        isInitialState: false,
        isSearching: true,
        searchQuery: action.payload.searchQuery,
        page: 0,
        items: [],
        booksStocks: {},
      }
    case types.RUN_BOOK_SEARCH_SUCCESS:
      return {
        ...state,
        isInitialState: false,
        isSearching: false,
        isSucceededSearch: true,
      }
    case types.RUN_BOOK_SEARCH_FAIL:
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
        page: state.page + 1,
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