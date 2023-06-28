import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer, // this helps to avoid typos and inconsistencies
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(albumsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // as per https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from "./apis/albumsApi";
