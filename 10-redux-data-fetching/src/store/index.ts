import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import albumsApi from "./apis/albumsApi";

const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsApi.reducer,
  },
});

export default store;
export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // as per https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
