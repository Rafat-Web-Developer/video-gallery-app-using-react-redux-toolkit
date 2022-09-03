import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { fetchLikedVideo } from "../../features/likeVideo/likeVideoSlice";
import { fetchUnLikedVideo } from "../../features/unlikeVideo/unLikeVideoSlice";

export default function LikeUnlike({ id }) {
  const dispatch = useDispatch();
  const { afterLikeVideo } = useSelector((state) => state.like);
  const { afterUnLikeVideo } = useSelector((state) => state.unLike);
  const { video } = useSelector((state) => state.video);
  // const { likes, unlikes } = afterLike;
  console.log(afterLikeVideo);

  // useEffect(() => {
  //   dispatch(fetchVideo(id));
  // }, [dispatch, id]);

  const handleLike = () => {
    dispatch(
      fetchLikedVideo(
        Object.keys(afterLikeVideo).length === 0 ? video : afterLikeVideo
      )
    );
  };

  const handleUnLike = () => {
    dispatch(
      fetchUnLikedVideo(
        Object.keys(afterUnLikeVideo).length === 0 ? video : afterUnLikeVideo
      )
    );
  };

  return (
    <div className='flex gap-10 w-48'>
      <div className='flex gap-1'>
        <div className='shrink-0'>
          <img
            className='w-5 block cursor-pointer'
            src={likeImage}
            alt='Like'
            onClick={handleLike}
          />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>
          {Object.keys(afterLikeVideo).length === 0 ||
          Object.keys(afterUnLikeVideo).length === 0
            ? video?.likes
            : afterLikeVideo?.likes}
        </div>
      </div>
      <div className='flex gap-1'>
        <div className='shrink-0'>
          <img
            className='w-5 block cursor-pointer'
            src={unlikeImage}
            alt='Unlike'
            onClick={handleUnLike}
          />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>
          {Object.keys(afterLikeVideo).length === 0 ||
          Object.keys(afterUnLikeVideo).length === 0
            ? video.unlikes
            : afterUnLikeVideo?.unlikes}
        </div>
      </div>
    </div>
  );
}
