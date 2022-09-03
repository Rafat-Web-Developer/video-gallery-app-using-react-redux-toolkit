import { useSelector } from "react-redux";
import Paginate from "./Paginate";

export default function Pagination() {
  const { totalVideos } = useSelector((state) => state.videos);
  const pageNumber = Math.ceil(totalVideos / 5) || 0;

  // ?_page=2&_limit=5
  return (
    <section className='pt-12'>
      <div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end'>
        {[...Array(pageNumber)].map((_, index) => <Paginate key={index} index={index} />)}
      </div>
    </section>
  );
}
