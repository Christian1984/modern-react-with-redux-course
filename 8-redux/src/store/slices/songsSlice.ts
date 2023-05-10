import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearStore } from "..";

const songsSlice = createSlice({
  name: "song",
  initialState: [] as string[],
  reducers: {
    addSong: (state, action: PayloadAction<string>) => {
      state.push(action.payload); // modify the state in place as immer is used under the hood, or...
    },
    removeSong: (state, action: PayloadAction<string>) => {
      return state.filter((el) => el !== action.payload); // return a new object from the reducer.
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearStore, () => []);
  },
});

export const songsReducer = songsSlice.reducer;
export const { addSong, removeSong } = songsSlice.actions;
