import { useSelector } from "react-redux";

export default function Pagination() {
  const { videos } = useSelector((state) => state.videos);
  const pageNumber = Math.ceil(videos.length / 5) || 0;
  // console.log(pageNumber);
  const getPageContent = () => {
    let content = [];
    for (let i = 0; i < pageNumber; i++) {
      // const item = animals[idx];
      content.push(
        <div className='bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'>
          {i + 1}
        </div>
      );
    }
    return content;
  };
  // ?_page=2&_limit=5
  return (
    <section className='pt-12'>
      <div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end'>
        {getPageContent()}
      </div>
    </section>
  );
}
