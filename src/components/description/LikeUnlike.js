import { useEffect } from "react";
import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { fetchLikedVideo } from "../../features/likeVideo/likeVideoSlice";
import { fetchVideo } from "../../features/video/videoSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);

  const handleLike = (videoId) => {
    console.log(likes);
    dispatch(fetchLikedVideo({ videoId, likes }));
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
          {likes}
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
          {unlikes}
        </div>
      </div>
    </div>
  );
}
