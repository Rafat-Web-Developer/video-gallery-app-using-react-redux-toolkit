import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import likeVideoReducer from "../features/likeVideo/likeVideoSlice";
import unLikeVideoReducer from "../features/unlikeVideo/unLikeVideoSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
    like: likeVideoReducer,
    unLike: unLikeVideoReducer,
  },
});
