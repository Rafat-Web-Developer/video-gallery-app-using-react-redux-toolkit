import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { fetchLikedVideo } from "../../features/likeVideo/likeVideoSlice";
import { fetchVideo } from "../../features/video/videoSlice";

export default function LikeUnlike({ id }) {
  const dispatch = useDispatch();
  const { afterLikeVideo } = useSelector((state) => state.like);
  const { video } = useSelector((state) => state.video);
  // const { likes, unlikes } = afterLike;
  console.log(afterLikeVideo);

  // useEffect(() => {
  //   dispatch(fetchVideo(id));
  // }, [dispatch, id]);

  const handleLike = (videoId) => {
    dispatch(
      fetchLikedVideo(
        Object.keys(afterLikeVideo).length === 0 ? video : afterLikeVideo
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
            onClick={() => handleLike(id)}
          />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>
          {Object.keys(afterLikeVideo).length === 0
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
          />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>
          {Object.keys(afterLikeVideo).length === 0
            ? video.unlikes
            : afterLikeVideo?.unlikes}
        </div>
      </div>
    </div>
  );
}
