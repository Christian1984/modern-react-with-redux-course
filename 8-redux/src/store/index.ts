import { PayloadAction, configureStore, createAction, createSlice } from "@reduxjs/toolkit";

const clearStore = createAction("store/reset");

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
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
export { clearStore };
