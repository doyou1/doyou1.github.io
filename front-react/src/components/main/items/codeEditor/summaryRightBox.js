import "@/styles/codeEditor.css";
import React, { useState, useEffect } from "react";
import SummaryVideo from "./summaryVideo";

function MainVideoBox({ isHover, setIsHover }) {
  const [style, setStyle] = useState({}); // rightBox 스타일 관리

  //  codeEditor에서 isHover값이 변할 떄 값마다 스타일값을 줌
  useEffect(() => {
    if (isHover === "videoThree" || isHover === "videoTen") {
      setStyle("w-[89.5%] left-[1.8rem] max-w-[48rem] h-[97px] three-rightBox");
      // console.log("렌더링");
    }
    if (isHover === "videoFour") {
      setStyle("w-[160px] max-w-[48rem] h-[97px] four-rightBox");
    }
    if (isHover === "videoFive" || isHover === "videoEight") {
      setStyle("left-[11.5rem] w-[53%] max-w-[48rem] h-[55px] five-rightBox");
    }
    if (isHover === "videoSix") {
      setStyle("left-[11.5rem] w-[53%] max-w-[48rem] h-[35px] mb-[19px]");
    }
    if (isHover === "videoSeven") {
      setStyle("left-[11.5rem] w-[53%] max-w-[48rem] h-[35px] mt-[23px]");
    }
    if (isHover === "videoNine") {
      setStyle(" w-[56px] max-w-[56px] h-[56px] nine-box");
    }
  }, [isHover]);

  return (
    <div
      className="relative mt-0 lg:-my-20 w-full  flex grow justify-center rightbox-container-padding"
      data-value="div"
    >
      <div
        // max-w-3xl
        className="rounded-2xl max-w-3xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark"
        style={{ height: "113px" }}
      >
        <div className="p-4" style={{ contentVisibility: "auto" }}>
          {/* 비디오 컴포넌트  */}
          <SummaryVideo
            videoTitle="My video"
            via50="via-blue-50"
          ></SummaryVideo>
        </div>
      </div>
      {/* 마우스이벤트 발생시 나오는 레이아웃 */}
      <div
        className={`flex flex-col justify-center items-center absolute z-10 inset-0 pointer-events-none transition-opacity transform-gpu${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`${
            isHover ? style : "opacity-0"
          } start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark rounded-lg `}
          // top-0
        ></div>
      </div>
    </div>
  );
}

function MainVideoListBox() {
  return (
    <div className="relative mt-0 lg:-my-20 w-full p-2.5 xs:p-5 lg:p-10 flex grow justify-center">
      <div className="max-w-3xl rounded-2xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark">
        <div className="p-0" style={{ contentVisibility: "auto" }}>
          <div className="m-4">
            <section className="relative" data-hover="VideoList">
              <h2
                className="font-bold text-xl text-primary mb-4 leading-snug"
                data-hover="h2"
              >
                3 Videos
              </h2>
              <div className="flex flex-col gap-4">
                <SummaryVideo
                  videoTitle="First Video"
                  via50="via-blue-50"
                ></SummaryVideo>
                <SummaryVideo
                  videoTitle="Second Video"
                  via50="via-red-50"
                ></SummaryVideo>
                <SummaryVideo
                  videoTitle="Third Video"
                  via50="via-green-50"
                ></SummaryVideo>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* 마우스이벤트 발생시 나오는 레이아웃 */}
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
