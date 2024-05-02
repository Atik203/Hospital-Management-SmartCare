import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // TODO: have to Add the generated reducer as a specific top-level slice
  },

  // TODO : have add middleware for endpoints
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
