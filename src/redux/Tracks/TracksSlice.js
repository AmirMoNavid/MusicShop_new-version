import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTracks = createAsyncThunk("tracks/getTracks", async () => {
  try {
    const response = await axios.get(
      "https://musicshop-api.liara.run/api/tracks",
    );
    return response.data.musics;
  } catch (error) {
    return [];
  }
});

const initialState = {
  tracks: [],
  loading: false,
};

export const TrackSlice = createSlice({
  name: "allTracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTracks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
      state.loading = false;
    });
  },
});
export default TrackSlice.reducer;
