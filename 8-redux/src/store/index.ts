import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

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
    clearSongs: () => [],
  },
});

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
    clearMovies: () => [],
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// console.log(store.getState());

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song",
// });

// store.dispatch(songsSlice.actions.addSong("Another new song!"));

// console.log(store.getState());

export { store };
export type RootState = ReturnType<typeof store.getState>;
export const { addSong, removeSong, clearSongs } = songsSlice.actions;
export const { addMovie, removeMovie, clearMovies } = moviesSlice.actions;
