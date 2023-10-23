import { React, useState } from "react";
import { ReactComponent as PlayButton } from "@/assets/summary/playButton.svg";
import { ReactComponent as EmptyHeart } from "@/assets/summary/emptyHeart.svg";
import { ReactComponent as FullOfHeart } from "@/assets/summary/fullOfHeart.svg";
import { ReactComponent as HeartBackGround } from "@/assets/summary/heartBackGround.svg";
function SummaryVideo({ videoTitle, via50 }) {
  // 좋아요 버튼 클릭시 토글기능
  const [isLiked, setIsLiked] = useState(true);
  const handleButtonClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div>
      {" "}
      <div className="flex flex-row items-center gap-3" data-hover="Video">
        {/* 비디오 썸네일 */}
        <a
          data-hover="Thumbnail"
          target="_blank"
          rel="noreferrer"
          aria-hidden="true"
          tabIndex="-1"
          className={`outline-link dark:outline-link outline-offset-2 aspect-video w-32 xs:w-36 select-none flex-col shadow-inner-border rounded-lg flex items-center overflow-hidden justify-center align-middle text-white/50 bg-cover bg-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] ${via50} `}
        >
          {/* 재생버튼 아이콘 */}
          <PlayButton alt="play button" />
        </a>
        {/* 비디오정보 */}
        <a
          target="_blank"
          rel="noreferrer"
          className="outline-link dark:outline-link outline-offset-4 group flex flex-col flex-1 gap-0.5"
          data-hover="a"
        >
          {/* 비디오제목 */}
          <h3
            className="text-base leading-tight text-primary font-bold"
            data-hover="h3"
          >
            {videoTitle}
          </h3>
          <p className="text-tertiary text-sm leading-snug" data-hover="p">
            Video description
          </p>
        </a>
        {/* 좋아요버튼  */}
        <button
          data-hover="LikeButton"
          className={`"outline-none focus:bg-red-50/5 focus:text-red-50 relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-card active:scale-95 active:bg-red-50/5 active:text-red-50 ${
            isLiked ? "text-tertiary fill" : "text-red-50 line"
          } `}
          aria-label={isLiked ? "Unsave" : "Save"}
          onClick={handleButtonClick}
        >
          {/* 클릭시 하트백그라운드 애니매이션화  */}
          {/* "line" (empty) 및 "fill" (full) 클래스를 부모인 <button> 요소에 동적으로 설정하고 CSS로 해당 클래스에 대한 스타일을 적용하는 방식 */}
          {/* 좀더 깔끔하게 유지하며, 하트 스타일을 쉽게 조절하는 장점이있는듯  */}
          <HeartBackGround className="absolute overflow-visible"></HeartBackGround>
          {/* 클릭시 변경되는 svg */}
          {isLiked ? (
            // 빈하트
            <EmptyHeart className="w-6 h-6"></EmptyHeart>
          ) : (
            //  꽉찬하트
            <FullOfHeart className="w-6 h-6"></FullOfHeart>
          )}
        </button>
      </div>
    </div>
  );
}

export default SummaryVideo;
