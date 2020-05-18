import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';

import {
  userBookLibrariesReducer,
  bookLibrariesReducer,
  booksReducer,
  rootSaga
} from "./modules";

export default function configuStore() {
  const rootReducers = combineReducers({
    userBookLibraries: userBookLibrariesReducer,
    bookLibraries: bookLibrariesReducer,
    books: booksReducer,
  });

  const sagaMiddleware = createSagaMiddleware();

  const loggerMiddleware = createLogger({
    collapsed: true,
    diff: true,
  });

  const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware, loggerMiddleware)
  )

  sagaMiddleware.run(rootSaga);

  return store;
}

