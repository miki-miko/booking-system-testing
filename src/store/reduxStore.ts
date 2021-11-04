import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import tablesReducer from './reducers/tablesReducer';
import bookingsReducer from './reducers/bookingsReducer';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

export const defaultStore: any = {
  tables: [],
  tablesFiltered: [],
  bookings: [],
  error: null,
  loading: false,
};

export const configureStoreWithMiddleware = (
  initialState = {}
): EnhancedStore => {
  const store = configureStore({
    reducer: {
      tables: tablesReducer,
      bookings: bookingsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};

export const rootReducer = combineReducers({
  tables: tablesReducer,
  bookings: bookingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);
