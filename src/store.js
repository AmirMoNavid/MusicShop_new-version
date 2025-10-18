import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./redux/Tracks/TracksSlice";
import playlistsReducer from "./redux/Playlists/PlaylistsSlice";
import artistsReducer from "./redux/Artists/ArtistsSlice";

export const store = configureStore({
  reducer: {
    tracks: trackReducer,
    playlists: playlistsReducer,
    artists: artistsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
