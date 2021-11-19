import {
  Action,
  configureStore,
  EnhancedStore,
  ThunkAction,
} from "@reduxjs/toolkit";

import tablesReducer from "./slices/tablesSlice";
import bookingsReducer from "./slices/bookingsSlice";

export const configureStoreWithMiddlewares = (): EnhancedStore => {
  const store = configureStore({
    reducer: {
      tables: tablesReducer,
      bookings: bookingsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),

    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
};

export const store = configureStoreWithMiddlewares();

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// // export default store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
