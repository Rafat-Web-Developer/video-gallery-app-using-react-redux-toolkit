import { useDispatch, useSelector } from "react-redux";
import { pageSelect } from "../../features/filter/filterSlice";

export default function Paginate({ index }) {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state) => state.filter);

  const handlePageNumber = (pn) => {
    dispatch(pageSelect(pn));
  };

  const style = pageNumber === index + 1 ? "600 text-white" : "200 text-black";

  return (
    <div
      className={`bg-blue-${style} px-4 py-1 rounded-full cursor-pointer`}
      onClick={() => handlePageNumber(index + 1)}>
      {index + 1}
    </div>
  );
}
