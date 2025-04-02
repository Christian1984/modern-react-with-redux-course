import { setupListeners } from "@reduxjs/toolkit/query/react";
import { UnknownAction, combineReducers, configureStore } from "@reduxjs/toolkit/react";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { taggedApi } from "./apis/tagged/taggedApi";

const initialState = {};
const reducers = {
  [taggedApi.reducerPath]: taggedApi.reducer,
};

const combinedReducers = combineReducers(reducers);
type State = ReturnType<typeof combinedReducers>;
const pReducers = persistReducer<State, UnknownAction>(
  {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
    //whitelist: [], // TODO
    //blacklist: [], // TODO
  },
  combinedReducers
);

const initStore = () =>
  configureStore({
    reducer: pReducers,
    preloadedState: initialState as any,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(taggedApi.middleware),
  });
export const store = initStore();
export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type SubwayStore = typeof store;

export default store;
