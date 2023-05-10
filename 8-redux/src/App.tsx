import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { useDispatch, useSelector } from "react-redux";
import { RootState, clearMovies, clearSongs } from "./store";

function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(clearMovies());
    dispatch(clearSongs());
    //
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

export default App;
