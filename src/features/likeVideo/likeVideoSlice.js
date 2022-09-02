import { likeVideo } from "./likeVideoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchLikedVideo = createAsyncThunk(
  "video/fetchLikedVideo",
  async ({ videoId, likes }) => {
    const video = await likeVideo(videoId, likes);
    return video;
  }
);

const likeVideoSlice = createSlice({
  name: "likeVideo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikedVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchLikedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchLikedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default likeVideoSlice.reducer;
