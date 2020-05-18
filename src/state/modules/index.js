import { fork } from 'redux-saga/effects'

import userBookLibrariesReducer from './user-book-libraries'
import bookLibrariesReducer, { bookLibrariesOperations } from './book-libraries'
import booksReducer, { booksOperations } from './books'

function* rootSaga() {
  yield fork(bookLibrariesOperations.bookLibrariesSaga)
  yield fork(booksOperations.booksSaga)
}

export {
  userBookLibrariesReducer,
  bookLibrariesReducer,
  booksReducer,
  rootSaga,
}
