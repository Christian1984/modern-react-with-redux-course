import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

const store = configureStore({
  reducer: [usersReducer],
});

export default store;
export { store };
export type RootState = ReturnType<typeof store.getState>;
