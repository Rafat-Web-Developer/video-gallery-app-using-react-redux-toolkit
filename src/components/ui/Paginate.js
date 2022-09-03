import { useDispatch, useSelector } from "react-redux";
import { pageSelect } from "../../features/filter/filterSlice";

export default function Paginate({index}) {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state) => state.filter);

  const handlePageNumber = (pn) => {
    dispatch(pageSelect(pn));
  }

  const style = pageNumber === index + 1 ? "blue" : "gray";

  return (
    <div className={`bg-${style}-600 text-white px-4 py-1 rounded-full cursor-pointer`} onClick={()=>handlePageNumber(index+1)}>
          {index + 1}
    </div>
  );
}
