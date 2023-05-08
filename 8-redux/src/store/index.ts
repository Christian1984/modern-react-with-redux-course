import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [] as string[],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      //TODO
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

console.log(store.getState());

store.dispatch({
  type: "song/addSong",
  payload: "New Song",
});

console.log(store.getState());
