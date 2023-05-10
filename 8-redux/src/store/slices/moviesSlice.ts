import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearStore } from "..";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [] as string[],
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.push(action.payload); // modify the state in place as immer is used under the hood, or...
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      return state.filter((el) => el !== action.payload); // return a new object from the reducer.
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearStore, () => []);
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { addMovie, removeMovie } = moviesSlice.actions;
