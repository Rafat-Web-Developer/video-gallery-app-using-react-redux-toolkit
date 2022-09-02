import axios from "../../utils/axios";

export const likeVideo = async (id, currentLikes) => {
  const response = await axios.patch(`/videos/${id}`, {
    likes: currentLikes + 1,
  });

  return response.data;
};
