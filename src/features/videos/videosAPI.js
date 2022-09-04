import axios from "../../utils/axios";
// &_page=2&_limit=5
export const getVideos = async (tags, search, author, pageNumber) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }
  if (author !== "") {
    queryString += `&author_like=${author}`;
  }

  const response1 = await axios.get(`/videos`);

  const response2 = await axios.get(
    `/videos/?${queryString}&_page=${pageNumber}&_limit=5`
  );

  return {
    filtersData: response2.data,
    total: response1?.data?.length,
  };
};
