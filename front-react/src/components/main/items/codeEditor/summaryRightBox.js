import "@/styles/codeEditor.css";
import React, { useState } from "react";
import { ReactComponent as PlayButton } from "@/assets/summary/playButton.svg";
import { ReactComponent as EmptyHeart } from "@/assets/summary/emptyHeart.svg";
import { ReactComponent as FullOfHeart } from "@/assets/summary/fullOfHeart.svg";

function MainVideoBox() {
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="relative mt-0 lg:-my-20 w-full  flex grow justify-center rightbox-container-padding">
      <div
        className="max-w-3xl rounded-2xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark"
        style={{ height: "113px" }}
      >
        <div className="p-4" style={{ contentVisibility: "auto" }}>
          <div className="flex flex-row items-center gap-3" data-hover="Video">
            <a
              data-hover="Thumbnail"
              target="_blank"
              rel="noreferrer"
              aria-hidden="true"
              tabIndex="-1"
              className="outline-link dark:outline-link outline-offset-2 aspect-video w-32 xs:w-36 select-none flex-col shadow-inner-border rounded-lg flex items-center overflow-hidden justify-center align-middle text-white/50 bg-cover bg-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] via-blue-50 "
            >
              <PlayButton alt="play button" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="outline-link dark:outline-link outline-offset-4 group flex flex-col flex-1 gap-0.5"
              data-hover="a"
            >
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
            <button
              data-hover="LikeButton"
              className={
                isLiked
                  ? "outline-none focus:bg-red-50/5 focus:text-red-50 relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-card active:scale-95 active:bg-red-50/5 active:text-red-50 text-red-50"
                  : "outline-none focus:bg-red-50/5 focus:text-red-50 relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-card active:scale-95 active:bg-red-50/5 active:text-red-50 text-tertiary"
              }
              aria-label={isLiked ? "Unsave" : "Save"}
              onClick={handleButtonClick}
            >
              <svg
                className="absolute overflow-visible"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className={
                    isLiked
                      ? "text-red-50/50 origin-center transition-all ease-in-out"
                      : "text-red-50/50 origin-center transition-all ease-in-out animate-[circle_.3s_forwards]"
                  }
                  cx="12"
                  cy="12"
                  r="11.5"
                  fill="transparent"
                  stroke-width="0"
                  stroke="currentColor"
                  onClick={handleButtonClick}
                ></circle>
              </svg>

              {isLiked ? (
                <FullOfHeart onClick={handleButtonClick}></FullOfHeart>
              ) : (
                <EmptyHeart onClick={handleButtonClick}></EmptyHeart>
              )}

              {/* <FullOfHeart></FullOfHeart> */}
            </button>
          </div>
        </div>
      </div>

      {/* hover 됐을 시 */}
      <div></div>
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
