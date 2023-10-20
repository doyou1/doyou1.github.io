import "@/styles/codeEditor.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as PlayButton } from "@/assets/summary/playButton.svg";
import { ReactComponent as EmptyHeart } from "@/assets/summary/emptyHeart.svg";
import { ReactComponent as FullOfHeart } from "@/assets/summary/fullOfHeart.svg";
import { ReactComponent as HeartBackGround } from "@/assets/summary/heartBackGround.svg";

function MainVideoBox({ isHover, setIsHover }) {
  const [isLiked, setIsLiked] = useState(true);
  const [style, setStyle] = useState({}); // rightBox 스타일 관리

  const handleButtonClick = () => {
    setIsLiked(!isLiked);
  };

  //  codeEditor에서 isHover값이 변할 떄 값마다 스타일값을 줌
  useEffect(() => {
    if (isHover === "three" || isHover === "ten") {
      setStyle({
        width: "480px",
        height: "97px",
        transform: "translate(28px, 28px)",
      });
      console.log("렌더링");
    }
    if (isHover === "four") {
      setStyle({
        width: "160px",
        height: "97px",
        transform: "translate(28px, 28px)",
      });
      console.log("렌더링");
    }
    if (isHover === "five" || isHover === "eight") {
      setStyle({
        width: "241px",
        height: "55px",
        transform: "translate(184px, 49px)",
      });
      console.log("렌더링");
    }
    if (isHover === "six") {
      setStyle({
        width: "241px",
        height: "35px",
        transform: "translate(184px, 49px)",
      });
      console.log("렌더링");
    }
    if (isHover === "seven") {
      setStyle({
        width: "241px",
        height: "34px",
        transform: "translate(184px, 70px)",
      });
      console.log("렌더링");
    }
    if (isHover === "nine") {
      setStyle({
        width: "56px",
        height: "56px",
        transform: "translate(458px, 48px)",
      });
      console.log("렌더링");
    }
  }, [isHover]);
  return (
    <div
      className="relative mt-0 lg:-my-20 w-full  flex grow justify-center rightbox-container-padding"
      data-value="div"
    >
      <div
        className="max-w-3xl rounded-2xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark"
        style={{ height: "113px" }}
      >
        <div className="p-4" style={{ contentVisibility: "auto" }}>
          <div className="flex flex-row items-center gap-3" data-hover="Video">
            {/* 비디오 썸네일 */}
            <a
              data-hover="Thumbnail"
              target="_blank"
              rel="noreferrer"
              aria-hidden="true"
              tabIndex="-1"
              className="outline-link dark:outline-link outline-offset-2 aspect-video w-32 xs:w-36 select-none flex-col shadow-inner-border rounded-lg flex items-center overflow-hidden justify-center align-middle text-white/50 bg-cover bg-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] via-blue-50 "
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
                className="text-base leading-tight text-primary font-semibold"
                data-hover="h3"
              >
                My video
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
      </div>
      {/* 일단 정보가져오기  */}
      {/* style 1
        width: "467px",
        height: "97px",
        transform: " translate(28px, 28px)", */}

      {/* style 2
        width: "160px",
        height: "97px",
        transform: " translate(28px, 28px)", */}

      {/* style 3
        width: "259px",
        height: "34px",
        transform: " translate(184px, 70px)", */}
      {/* hover 됐을 시 */}

      <div className=" absolute z-10 inset-0 pointer-events-none transition-opacity transform-gpu box1234">
        <div
          className={`box123  start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark absolute rounded-lg ${
            isHover ? "opacity-100 " : "opacity-20"
          }`}
          style={style}
          // top-0
        ></div>
      </div>
    </div>
  );
}

function MainVideoListBox() {
  return (
    <div className="content-container-videolist">
      <div className="content-main-videolist"></div>
      <div className="content-shadow-videolistbox"></div>
    </div>
  );
}

function SearchableVideoListBox() {
  return (
    <div className="content-container-searchable">
      <div className="content-main-searchable">{/* ... */}</div>
      <div className="content-shadow-searchablebox"></div>
    </div>
  );
}

export { MainVideoBox, MainVideoListBox, SearchableVideoListBox };
