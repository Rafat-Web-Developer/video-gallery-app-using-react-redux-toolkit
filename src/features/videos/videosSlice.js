import { getVideos } from "./videosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
    totalVideos: 0,
};

// async thunk
export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    async ({ tags, search, pageNumber }) => {
        const videos = await getVideos(tags, search, pageNumber);
        return videos;
    }
);

const videoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload.filtersData;
                state.totalVideos = action.payload.total;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.totalVideos = 0;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default videoSlice.reducer;
