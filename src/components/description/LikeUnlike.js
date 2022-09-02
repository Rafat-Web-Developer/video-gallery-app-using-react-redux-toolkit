import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";

export default function LikeUnlike({ like, unlike }) {
  return (
    <div className='flex gap-10 w-48'>
      <div className='flex gap-1'>
        <div className='shrink-0'>
          <img
            className='w-5 block cursor-pointer'
            src={likeImage}
            alt='Like'
          />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>{like}</div>
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
          {unlike}
        </div>
      </div>
    </div>
  );
}
