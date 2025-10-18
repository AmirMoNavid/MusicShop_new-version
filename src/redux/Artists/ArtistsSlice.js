import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getArtists = createAsyncThunk("artists/getArtists", async () => {
  try {
    const response = await axios.get(
      "https://musicshop-api.liara.run/api/artists",
    );
    return response.data.artists;
  } catch (error) {
    return [];
  }
});

const initialState = {
  artists: [],
  loading: false,
};

export const ArtistsSlice = createSlice({
  name: "allArtists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArtists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getArtists.fulfilled, (state, action) => {
      state.artists = action.payload;
      state.loading = false;
    });
  },
});
export default ArtistsSlice.reducer;
