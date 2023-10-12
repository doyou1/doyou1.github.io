import "@/styles/rightBox.css";
import "@/styles/codeEditor.css";
import React from "react";
import { ReactComponent as PlayButton } from "@/assets/summary/playButton.svg";
function MainVideoBox() {
  return (
    <div className="relative mt-0 lg:-my-20 w-full p-2.5 xs:p-5 lg:p-10 flex grow justify-center">
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
              className="outline-link dark:outline-link outline-offset-2 aspect-video w-32 xs:w-36 select-none flex-col shadow-inner-border rounded-lg flex items-center overflow-hidden justify-center align-middle text-white/50 bg-cover bg-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-50 via-blue-50 to-purple-60"
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
              className="outline-none focus:bg-red-50/5 focus:text-red-50 relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-card active:scale-95 active:bg-red-50/5 active:text-red-50 text-tertiary"
              aria-label="Save"
            >
              <svg
                className="absolute overflow-visible"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="red"
              >
                <circle
                  className="text-red-50/50 origin-center transition-all ease-in-out"
                  cx="12"
                  cy="12"
                  r="11.5"
                  fill="transparent"
                  stroke-width="0"
                  stroke="currentColor"
                ></circle>
              </svg>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.184-.808-.771-.004-.004C11.065 4.299 8.522 2.003 6 2.003c-3.736 0-6 2.558-6 6.677 0 4.47 5.471 9.848 10 13.079.602.43 1.187.82 1.74 1.167A.497.497 0 0 0 12 23v-.003c.09 0 .182-.026.26-.074C16.977 19.97 24 13.737 24 8.677 24 4.557 21.743 2 18 2c-2.569 0-5.166 2.387-5.192 2.413L12 5.184zm-.002 15.525c2.071-1.388 4.477-3.342 6.427-5.47C20.72 12.733 22 10.401 22 8.677c0-1.708-.466-2.855-1.087-3.55C20.316 4.459 19.392 4 18 4c-.726 0-1.63.364-2.5.9-.67.412-1.148.82-1.266.92-.03.025-.037.031-.019.014l-.013.013L12 7.949 9.832 5.88a10.08 10.08 0 0 0-1.33-.977C7.633 4.367 6.728 4.003 6 4.003c-1.388 0-2.312.459-2.91 1.128C2.466 5.826 2 6.974 2 8.68c0 1.726 1.28 4.058 3.575 6.563 1.948 2.127 4.352 4.078 6.423 5.466z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* hover 됐을 시 */}
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
