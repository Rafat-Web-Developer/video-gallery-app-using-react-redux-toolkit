import axios from "../../utils/axios";

export const unLikeVideo = async (id, currentUnLikes) => {
  const response = await axios.patch(`/videos/${id}`, {
    unlikes: currentUnLikes + 1,
  });

  return response.data;
};
