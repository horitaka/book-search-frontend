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

  let middlewares = [];

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware)

  if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger({
      collapsed: true,
      diff: true,
    });
    middlewares.push(loggerMiddleware)
  }

  let composeEnhancers;
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers =
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) ||
      compose;
  } else {
    composeEnhancers = compose;
  }

  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga);

  return store;
}

