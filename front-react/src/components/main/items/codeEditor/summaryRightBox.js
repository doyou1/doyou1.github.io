import "@/styles/codeEditor.css";
import React, { useState, useEffect } from "react";
import SummaryVideo from "./summaryVideo";
import { ReactComponent as Key } from "@/assets/summary/Key.svg";
import { ReactComponent as Search } from "@/assets/summary/search.svg";
import { ReactComponent as Refresh } from "@/assets/summary/refresh.svg";
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
            videoSubTitle="Video description"
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

function MainVideoListBox({ isHover, setIsHover }) {
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
                  videoSubTitle="Video description"
                  via50="via-blue-50"
                ></SummaryVideo>
                <SummaryVideo
                  videoTitle="Second Video"
                  videoSubTitle="Video description"
                  via50="via-red-50"
                ></SummaryVideo>
                <SummaryVideo
                  videoTitle="Third Video"
                  videoSubTitle="Video description"
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

function SearchableVideoListBox({ isHover, setIsHover, style }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이곳에서 검색을 처리하거나 상태를 업데이트할 수 있습니다.
  };
  return (
    <div className="relative mt-0 lg:-my-20 w-full p-2.5 xs:p-5 lg:p-10 flex grow justify-center">
      <div className="mx-auto max-w-3xl shadow-nav dark:shadow-nav-dark relative overflow-hidden w-full dark:border-opacity-10 rounded-2xl">
        {/* 제목 부분  */}
        <div className="w-full h-14 rounded-t-2xl shadow-outer-border backdrop-filter overflow-hidden backdrop-blur-lg backdrop-saturate-200 bg-white bg-opacity-90 z-10 absolute top-0 px-3 gap-2 flex flex-row items-center">
          <div className="select-none h-8 relative bg-gray-30/20 text-sm text-tertiary text-center rounded-full w-full flex-row flex space-between items-center">
            <div className="w-full leading-snug flex flex-row items-center justify-center">
              {/* svg */}
              <Key className="text-tertiary me-1 opacity-60"></Key>
              <span className="text-gray-30">example.com/</span>videos.html
            </div>
          </div>
        </div>
        {/* 콘텐츠 부분  */}
        <div className="h-full flex flex-1">
          <div
            className="max-w-3xl rounded-2xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark"
            style={{ height: "33rem" }}
          >
            {/* React Videos 제목부분  */}
            <div
              className="p-0"
              style={{
                contentVisibility: "auto",
                marginTop: "72px",
              }}
            >
              <h1 class="mx-4 mb-1 font-bold text-3xl text-primary">
                React Videos
              </h1>
              <p class="mx-4 mb-0 leading-snug text-secondary text-xl">
                A brief history of React
              </p>
              {/* 검색창 및 비디오 부분  */}
              <div className="px-4 pb-4">
                <div className="mt-3" data-hover="SearchableVideoList">
                  {/* 검색창 */}
                  <form
                    className="mb-3 py-1"
                    data-hover="SearchInput"
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                        <Search></Search>
                      </div>
                      <input
                        type="text"
                        id="search"
                        className="flex ps-11 py-4 h-10 w-full text-start bg-secondary-button outline-none betterhover:hover:bg-opacity-80 pointer items-center text-primary rounded-full align-middle text-base"
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleSearchChange}
                      />
                    </div>
                  </form>
                  {/* 비디오 */}
                  <section className="relative">
                    <h2 className="font-bold text-xl text-primary mb-4 leading-snug">
                      5 Videos
                    </h2>
                    <div className="flex flex-col gap-4">
                      <SummaryVideo
                        videoTitle="React: The Documentary"
                        videoSubTitle="The origin story of React"
                        via50="via-green-50"
                      ></SummaryVideo>
                      <SummaryVideo
                        videoTitle="Rethinking Best Practices"
                        videoSubTitle="Pete Hunt (2013)"
                        via50="via-green-50"
                      ></SummaryVideo>{" "}
                      <SummaryVideo
                        videoTitle="Introducing React Native"
                        videoSubTitle="Tom Occhino (2015)"
                        via50="via-green-50"
                      ></SummaryVideo>{" "}
                      <SummaryVideo
                        videoTitle="Introducing React Hooks"
                        videoSubTitle="Sophie Alpert and Dan Abramov (2018)"
                        via50="via-green-50"
                      ></SummaryVideo>{" "}
                      <SummaryVideo
                        videoTitle="Introducing Server Components"
                        videoSubTitle="Dan Abramov and Lauren Tan (2020)"
                        via50="via-green-50"
                      ></SummaryVideo>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 마우스이벤트 발생시 나오는 레이아웃 */}
      <div className="content-shadow-searchablebox"></div>
    </div>
  );
}
function ConfsSlug({}) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이곳에서 검색을 처리하거나 상태를 업데이트할 수 있습니다.
  };
  return (
    <div className="relative mt-0 lg:-my-20 w-full p-2.5 xs:p-5 lg:p-10 flex grow justify-center">
      <div className="mx-auto max-w-3xl shadow-nav dark:shadow-nav-dark relative overflow-hidden w-full dark:border-opacity-10 rounded-2xl">
        {/* 제목 부분  */}
        <div className="w-full h-14 rounded-t-2xl shadow-outer-border backdrop-filter overflow-hidden backdrop-blur-lg backdrop-saturate-200 bg-white bg-opacity-90 z-10 absolute top-0 px-3 gap-2 flex flex-row items-center">
          <div className="select-none h-8 relative bg-gray-30/20 text-sm text-tertiary text-center rounded-full w-full flex-row flex space-between items-center">
            <div className="w-full leading-snug flex flex-row items-center justify-center">
              {/* svg */}
              <Key className="text-tertiary me-1 opacity-60"></Key>
              <span className="text-gray-30">example.com/</span>
              confs/react-conf-2021
            </div>
            <div class="relative rounded-full flex justify-center items-center animation-pulse-button">
              <div class="z-0 absolute shadow-[0_0_0_8px_rgba(0,0,0,0.5)] inset-0 rounded-full animation-pulse-shadow"></div>
              <button
                aria-label="Reload"
                class="z-10 flex items-center p-1.5 rounded-full cursor-pointer justify-center bg-[#ebecef] hover:bg-[#d3d7de]"
              >
                {/* svg */}
                <Refresh></Refresh>
              </button>
            </div>
          </div>
        </div>
        {/* 콘텐츠 부분  */}
        <div className="h-full flex flex-1">
          <div
            className="max-w-3xl rounded-2xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark"
            style={{ height: "38rem" }}
          >
            {/* React Videos 제목부분  */}
            <div
              className="p-0"
              style={{
                contentVisibility: "auto",
                marginTop: "72px",
              }}
            >
              <div
                className="transition-opacity delay-100 opacity-100"
                data-hover="ConferenceLayout"
              >
                {/* 리액트 이미지 2021 */}
                <div className="h-40 overflow-hidden relative items-center flex">
                  <div className="absolute inset-0 px-4 py-2 flex items-end bg-gradient-to-t from-black/40 via-black/0">
                    <select
                      aria-label="Event"
                      className="appearance-none pe-8 bg-transparent text-primary-dark text-2xl font-bold mb-0.5"
                      style={{
                        backgroundSize: "4px 4px, 4px 4px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition:
                          "calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%)",
                        backgroundImage:
                          "linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%)",
                      }}
                    >
                      <option value="react-conf-2021" selected>
                        React Conf 2021
                      </option>
                      <option value="react-conf-2019">React Conf 2019</option>
                    </select>
                  </div>
                  <img
                    src="https://react.dev/images/home/conf2021/cover.svg"
                    width={500}
                    height={263}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                {/* 검색창 및 비디오 부분  */}
                <div className="px-4 pb-4">
                  <div className="mt-3" data-hover="SearchableVideoList">
                    {/* 검색창 */}
                    <form
                      className="mb-3 py-1"
                      data-hover="SearchInput"
                      onSubmit={handleSubmit}
                    >
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                          <Search></Search>
                        </div>
                        <input
                          type="text"
                          id="search"
                          className="flex ps-11 py-4 h-10 w-full text-start bg-secondary-button outline-none betterhover:hover:bg-opacity-80 pointer items-center text-primary rounded-full align-middle text-base"
                          placeholder="Search"
                          value={searchValue}
                          onChange={handleSearchChange}
                        />
                      </div>
                    </form>
                    {/* 비디오 */}
                    <section className="relative">
                      <h2 className="font-bold text-xl text-primary mb-4 leading-snug">
                        5 Videos
                      </h2>
                      <div className="flex flex-col gap-4">
                        <SummaryVideo
                          videoTitle="React: The Documentary"
                          videoSubTitle="The origin story of React"
                          via50="via-green-50"
                        ></SummaryVideo>
                        <SummaryVideo
                          videoTitle="Rethinking Best Practices"
                          videoSubTitle="Pete Hunt (2013)"
                          via50="via-green-50"
                        ></SummaryVideo>{" "}
                        <SummaryVideo
                          videoTitle="Introducing React Native"
                          videoSubTitle="Tom Occhino (2015)"
                          via50="via-green-50"
                        ></SummaryVideo>{" "}
                        <SummaryVideo
                          videoTitle="Introducing React Hooks"
                          videoSubTitle="Sophie Alpert and Dan Abramov (2018)"
                          via50="via-green-50"
                        ></SummaryVideo>{" "}
                        <SummaryVideo
                          videoTitle="Introducing Server Components"
                          videoSubTitle="Dan Abramov and Lauren Tan (2020)"
                          via50="via-green-50"
                        ></SummaryVideo>
                      </div>
                    </section>
                  </div>
                </div>
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 마우스이벤트 발생시 나오는 레이아웃 */}
      <div className="content-shadow-searchablebox"></div>
    </div>
  );
}
export { MainVideoBox, MainVideoListBox, SearchableVideoListBox, ConfsSlug };
