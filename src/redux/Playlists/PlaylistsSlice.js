import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlaylists = createAsyncThunk(
  "playlists/getPlaylists",
  async () => {
    try {
      const response = await axios.get(
        "https://musicshop-api.liara.run/api/playLists",
      );
      return response.data.playLists;
    } catch (error) {
      return [];
    }
  },
);

const initialState = {
  playlists: [],
  loading: false,
};

export const PlaylistSlice = createSlice({
  name: "allPlaylists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlaylists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPlaylists.fulfilled, (state, action) => {
      state.playlists = action.payload;
      state.loading = false;
    });
  },
});
export default PlaylistSlice.reducer;
