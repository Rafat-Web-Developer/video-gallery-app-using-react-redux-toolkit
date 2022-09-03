import { unLikeVideo } from "./unLikeVideoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  afterUnLikeVideo: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchUnLikedVideo = createAsyncThunk(
  "video/fetchLikedVideo",
  async ({ id, unlikes }) => {
    const video = await unLikeVideo(id, unlikes);
    return video;
  }
);

const unLikeVideoSlice = createSlice({
  name: "likeVideo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnLikedVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUnLikedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.afterUnLikeVideo = action.payload;
      })
      .addCase(fetchUnLikedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.afterUnLikeVideo = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default unLikeVideoSlice.reducer;
