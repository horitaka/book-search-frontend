import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
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

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware, loggerMiddleware))
  )

  sagaMiddleware.run(rootSaga);

  return store;
}

