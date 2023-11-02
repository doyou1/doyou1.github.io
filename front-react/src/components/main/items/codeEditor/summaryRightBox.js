import "@/styles/codeEditor.css";
import SummaryVideo from "./summaryVideo";
import { ReactComponent as Key } from "@/assets/summary/Key.svg";
import { ReactComponent as Search } from "@/assets/summary/search.svg";
import { ReactComponent as Refresh } from "@/assets/summary/refresh.svg";
import { ReactComponent as PlayButton } from "@/assets/summary/playButton.svg";
import { useState, useEffect, useRef } from "react";
function MainVideoBox({ isHover }) {
  const [sizeProp, setSizeProp] = useState({
    width: -1,
    height: -1,
    translate1: -1,
    translate2: -1,
  }); // rightBox 스타일 관리

  const rightBoxRef = useRef();

  const getRightBoxSize = () => {
    if (rightBoxRef.current) {
      return {
        width: rightBoxRef.current.offsetWidth,
        height: rightBoxRef.current.offsetHeight,
      };
    } else {
      return {
        width: -1,
        height: -1,
      };
    }
  };

  return (
    <div
      ref={rightBoxRef}
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
            playButton={<PlayButton alt="play button" />}
            codeEditor="firstSummary"
            isHover={isHover}
            setSizeProp={setSizeProp}
            getRightBoxSize={getRightBoxSize}
          ></SummaryVideo>
        </div>
      </div>
      {/* 마우스이벤트 발생시 나오는 레이아웃 */}
      <div
        className={`absolute z-10 inset-0 pointer-events-none transition-opacity transform-gpu${
          Object.keys(isHover).filter((key) => isHover[key]).length > 0
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <div
          className={` start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark rounded-lg ${
            Object.keys(isHover).filter((key) => isHover[key]).length > 0
              ? "opacity-100 "
              : "opacity-0"
          }`}
          style={{
            width: `${sizeProp.width}px`,
            height: `${sizeProp.height}px`,
            transform: `translate(${sizeProp.translate1}px, ${sizeProp.translate2}px)`,
          }}
          // top-0
        ></div>
      </div>
    </div>
  );
}

function MainVideoListBox({ isHover }) {
  const [sizeProp, setSizeProp] = useState({
    width: -1,
    height: -1,
    translate1: -1,
    translate2: -1,
    translate12: -1,
    translate22: -1,
    translate13: -1,
    translate23: -1,
  }); // rightBox 스타일 관리

  const rightBoxRef = useRef();
  const sectionRef = useRef();
  const h2Ref = useRef();

  const getRightBoxSize = () => {
    if (rightBoxRef.current) {
      return {
        width: rightBoxRef.current.offsetWidth,
        height: rightBoxRef.current.offsetHeight,
      };
    } else {
      return {
        width: -1,
        height: -1,
      };
    }
  };

  const getSectionSize = () => {
    if (sectionRef.current) {
      return {
        width: sectionRef.current.offsetWidth,
        height: sectionRef.current.offsetHeight,
      };
    } else {
      return {
        width: -1,
        height: -1,
      };
    }
  };
  const getH2Size = () => {
    if (h2Ref.current) {
      return {
        width: h2Ref.current.offsetWidth,
        height: h2Ref.current.offsetHeight,
      };
    } else {
      return {
        width: -1,
        height: -1,
      };
    }
  };

  return (
    <div
      ref={rightBoxRef}
      className="relative mt-0 lg:-my-20 w-full p-2.5 xs:p-5 lg:p-10 flex grow justify-center"
    >
      <div className="max-w-3xl rounded-2xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark">
        <div className="p-0" style={{ contentVisibility: "auto" }}>
          <div className="m-4">
            <section
              ref={sectionRef}
              className="relative"
              data-hover="VideoList"
            >
              <h2
                ref={h2Ref}
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
                  playButton={<PlayButton alt="play button" />}
                  codeEditor="secondSummary"
                  isHover={isHover}
                  setSizeProp={setSizeProp}
                  getRightBoxSize={getRightBoxSize}
                  getSectionSize={getSectionSize}
                  getH2Size={getH2Size}
                  getSectionSizeForVideo={getSectionSize}
                  getH2SizeForVideo={getH2Size}
                ></SummaryVideo>
                <SummaryVideo
                  videoTitle="Second Video"
                  videoSubTitle="Video description"
                  via50="via-red-50"
                  playButton={<PlayButton alt="play button" />}
                  codeEditor="secondSummary"
                  isHover={isHover}
                  setSizeProp={setSizeProp}
                  getRightBoxSize={getRightBoxSize}
                  getSectionSizeForVideo={getSectionSize}
                  getH2SizeForVideo={getH2Size}
                ></SummaryVideo>
                <SummaryVideo
                  videoTitle="Third Video"
                  videoSubTitle="Video description"
                  via50="via-green-50"
                  codeEditor="secondSummary"
                  playButton={<PlayButton alt="play button" />}
                  isHover={isHover}
                  setSizeProp={setSizeProp}
                  getRightBoxSize={getRightBoxSize}
                  getSectionSizeForVideo={getSectionSize}
                  getH2SizeForVideo={getH2Size}
                ></SummaryVideo>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* 마우스이벤트 발생시 나오는 레이아웃 */}
      <div
        className={`absolute z-10 inset-0 pointer-events-none transition-opacity transform-gpu${
          Object.keys(isHover).filter((key) => isHover[key]).length > 0
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <div
          className={`top-0 start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark absolute rounded-lg ${
            Object.keys(isHover).filter((key) => isHover[key]).length > 0
              ? "opacity-100 "
              : "opacity-0"
          }`}
          style={{
            width: `${sizeProp.width}px`,
            height: `${sizeProp.height}px`,
            transform: `translate(${sizeProp.translate1}px, ${sizeProp.translate2}px)`,
          }}
        ></div>
        {/* 두 번째 div */}
        <div
          className={`top-0 start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark absolute rounded-lg ${
            isHover.video ? "opacity-100 " : "opacity-0"
          }`}
          style={{
            width: `${sizeProp.width}px`,
            height: `${sizeProp.height}px`,
            transform: `translate(${sizeProp.translate12}px, ${sizeProp.translate22}px)`,
          }}
        ></div>
        {/* 세 번째 div */}
        <div
          className={`top-0 start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark absolute rounded-lg ${
            isHover.video ? "opacity-100 " : "opacity-0"
          }`}
          style={{
            width: `${sizeProp.width}px`,
            height: `${sizeProp.height}px`,
            transform: `translate(${sizeProp.translate13}px, ${sizeProp.translate23}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}

function SearchableVideoListBox({ isHover }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 객체형태로 만듬, json파일로 빼면 좋을듯
  const videoData = [
    {
      videoTitle: "React: The Documentary",
      videoSubTitle: "The origin story of React",
      bg: "url(https://react.dev/images/home/videos/documentary.webp)",
    },
    {
      videoTitle: "Rethinking Best Practices",
      videoSubTitle: "Pete Hunt (2013)",
      bg: "url(https://react.dev/images/home/videos/rethinking.jpg)",
    },
    {
      videoTitle: "Introducing React Native",
      videoSubTitle: "Tom Occhino (2015)",
      bg: "url(https://react.dev/images/home/videos/rn.jpg)",
    },
    {
      videoTitle: "Introducing React Hooks",
      videoSubTitle: "Sophie Alpert and Dan Abramov (2018)",
      bg: "url(https://react.dev/images/home/videos/hooks.jpg)",
    },
    {
      videoTitle: "Introducing Server Components",
      videoSubTitle: "Dan Abramov and Lauren Tan (2020)",
      bg: "url(https://react.dev/images/home/videos/rsc.jpg)",
    },
  ];

  const [sizeProp, setSizeProp] = useState({
    width: -1,
    height: -1,
    translate1: -1,
    translate2: -1,
  }); // rightBox 스타일 관리

  const rightBoxRef = useRef();
  const urlTopRef = useRef();
  const containerRef = useRef();
  const titleRef = useRef();
  const subTitleRef = useRef();

  const wrapRef = useRef();

  const searchInputRef = useRef();
  const videoListRef = useRef();

  useEffect(() => {
    if (isHover.wrapOpen || isHover.wrapClose) {
      setSizeProp({
        width: wrapRef.current.offsetWidth + 16,
        height:
          wrapRef.current.offsetHeight / 2 +
          searchInputRef.current.offsetHeight +
          titleRef.current.offsetHeight +
          subTitleRef.current.offsetHeight,
        // height: rightBoxRef.current.offsetHeight,
        translate1:
          (rightBoxRef.current.offsetWidth - wrapRef.current.offsetWidth - 16) /
          2,
        translate2:
          wrapRef.current.offsetHeight / 2 -
          urlTopRef.current.offsetHeight -
          titleRef.current.offsetHeight -
          subTitleRef.current.offsetHeight,
      });
    }
    if (isHover.searchInput) {
      setSizeProp({
        width: searchInputRef.current.offsetWidth + 16,
        height: searchInputRef.current.offsetHeight + 16,
        translate1:
          (rightBoxRef.current.offsetWidth - wrapRef.current.offsetWidth - 16) /
          2,
        translate2:
          wrapRef.current.offsetHeight / 2 -
          urlTopRef.current.offsetHeight -
          titleRef.current.offsetHeight -
          subTitleRef.current.offsetHeight,
      });
    }
    if (isHover.videoList) {
      setSizeProp({
        width: searchInputRef.current.offsetWidth + 16,
        height:
          wrapRef.current.offsetHeight / 2 +
          titleRef.current.offsetHeight +
          subTitleRef.current.offsetHeight -
          16,
        translate1:
          (rightBoxRef.current.offsetWidth - wrapRef.current.offsetWidth - 16) /
          2,
        translate2:
          wrapRef.current.offsetHeight / 2 -
          urlTopRef.current.offsetHeight -
          titleRef.current.offsetHeight -
          subTitleRef.current.offsetHeight +
          searchInputRef.current.offsetHeight +
          16,
      });
    }
  }, [isHover]);

  return (
    <div
      ref={rightBoxRef}
      className="relative mt-0 lg:-my-20 w-full p-2.5 xs:p-5 lg:p-10 flex grow justify-center"
    >
      <div className="mx-auto max-w-3xl shadow-nav dark:shadow-nav-dark relative overflow-hidden w-full dark:border-opacity-10 rounded-2xl">
        {/* 제목 부분  */}
        <div
          ref={urlTopRef}
          className="w-full h-14 rounded-t-2xl shadow-outer-border backdrop-filter overflow-hidden backdrop-blur-lg backdrop-saturate-200 bg-white bg-opacity-90 z-10 absolute top-0 px-3 gap-2 flex flex-row items-center"
        >
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
              ref={containerRef}
              className="p-0"
              style={{
                contentVisibility: "auto",
                marginTop: "72px",
              }}
            >
              <h1
                ref={titleRef}
                className="mx-4 mb-1 font-bold text-3xl text-primary"
              >
                React Videos
              </h1>
              <p
                ref={subTitleRef}
                className="mx-4 mb-0 leading-snug text-secondary text-xl"
              >
                A brief history of React
              </p>
              {/* 검색창 및 비디오 부분  */}
              <div className="px-4 pb-4">
                <div
                  ref={wrapRef}
                  className="mt-3"
                  data-hover="SearchableVideoList"
                >
                  {/* 검색창 */}
                  <form
                    ref={searchInputRef}
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
                  <section ref={videoListRef} className="relative">
                    <h2 className="font-bold text-xl text-primary mb-4 leading-snug">
                      5 Videos
                    </h2>
                    <div className="flex flex-col gap-4">
                      {videoData.map((video, index) => (
                        <SummaryVideo
                          key={index}
                          videoTitle={video.videoTitle}
                          videoSubTitle={video.videoSubTitle}
                          bg={video.bg}
                        ></SummaryVideo>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 마우스이벤트 발생시 나오는 레이아웃 */}
      <div
        className={`absolute z-10 inset-0 pointer-events-none transition-opacity transform-gpu${
          Object.keys(isHover).filter((key) => isHover[key]).length > 0
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <div
          className={` start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark rounded-lg ${
            Object.keys(isHover).filter((key) => isHover[key]).length > 0
              ? "opacity-100 "
              : "opacity-0"
          }`}
          style={{
            width: `${sizeProp.width}px`,
            height: `${sizeProp.height}px`,
            transform: `translate(${sizeProp.translate1}px, ${sizeProp.translate2}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}

function ConfsSlug({ isHover }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedYear, setSelectedYear] = useState("react-conf-2021"); //이미지 변경상태관리
  const [style, setStyle] = useState({}); // rightBox 스타일 관리
  // 이곳에서 검색을 처리하거나 상태를 업데이트함
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // 이미지 선택시 변경되는 코드
  const handleSelectChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const getImageSource = () => {
    if (selectedYear === "react-conf-2021") {
      return "https://react.dev/images/home/conf2021/cover.svg";
    } else if (selectedYear === "react-conf-2019") {
      return "https://react.dev/images/home/conf2019/cover.svg";
    }
  };

  const videoData2021 = [
    {
      videoTitle: "React 18 Keynote",
      videoSubTitle: "The React Team",
      speakers: [
        "https://react.dev/images/home/conf2021/andrew.jpg",
        "https://react.dev/images/home/conf2021/lauren.jpg",
        "https://react.dev/images/home/conf2021/juan.jpg",
        "https://react.dev/images/home/conf2021/rick.jpg",
      ],
    },
    {
      videoTitle: "React 18 for App Developers",
      videoSubTitle: "Shruti Kapoor",
      speakers: ["https://react.dev/images/home/conf2021/shruti.jpg"],
    },
    {
      videoTitle: "Streaming Server Rendering with Suspense",
      videoSubTitle: "Shaundai Person",
      speakers: ["https://react.dev/images/home/conf2021/shaundai.jpg"],
    },
    {
      videoTitle: "The First React Working Group",
      videoSubTitle: "Aakansha Doshi",
      speakers: ["https://react.dev/images/home/conf2021/aakansha.jpg"],
    },
    {
      videoTitle: "React Developer Tooling",
      videoSubTitle: "Brian Vaughn",
      speakers: ["https://react.dev/images/home/conf2021/brian.jpg"],
    },
    {
      videoTitle: "React without memo",
      videoSubTitle: "Xuan Huang (黄玄)",
      speakers: ["https://react.dev/images/home/conf2021/xuan.jpg"],
    },
    {
      videoTitle: "React Docs Keynote",
      videoSubTitle: "Rachel Nabors",
      speakers: ["https://react.dev/images/home/conf2021/rachel.jpg"],
    },
    {
      videoTitle: "Things I Learnt from the New React Docs",
      videoSubTitle: "Debbie O'Brien",
      speakers: ["https://react.dev/images/home/conf2021/debbie.jpg"],
    },
    {
      videoTitle: "Learning in the Browser",
      videoSubTitle: "Sarah Rainsberger",
      speakers: ["https://react.dev/images/home/conf2021/sarah.jpg"],
    },
    {
      videoTitle: "The ROI of Designing with React",
      videoSubTitle: "Linton Ye",
      speakers: ["https://react.dev/images/home/conf2021/linton.jpg"],
    },
    {
      videoTitle: "Interactive Playgrounds with React",
      videoSubTitle: "Delba de Oliveira",
      speakers: ["https://react.dev/images/home/conf2021/delba.jpg"],
    },
    {
      videoTitle: "Re-introducing Relay",
      videoSubTitle: "Robert Balicki",
      speakers: ["https://react.dev/images/home/conf2021/robert.jpg"],
    },
    {
      videoTitle: "React Native Desktop",
      videoSubTitle: "Eric Rozell and Steven Moyes",
      speakers: [
        "https://react.dev/images/home/conf2021/eric.jpg",
        "https://react.dev/images/home/conf2021/steven.jpg",
      ],
    },
    {
      videoTitle: "On-device Machine Learning for React Native",
      videoSubTitle: "Roman Rädle",
      speakers: ["https://react.dev/images/home/conf2021/roman.jpg"],
    },
    {
      videoTitle: "React 18 for External Store Libraries",
      videoSubTitle: "Daishi Kato",
      speakers: ["https://react.dev/images/home/conf2021/daishi.jpg"],
    },
    {
      videoTitle: "Building Accessible Components with React 18",
      videoSubTitle: "Diego Haz",
      speakers: ["https://react.dev/images/home/conf2021/diego.jpg"],
    },
    {
      videoTitle: "Accessible Japanese Form Components with React",
      videoSubTitle: "Tafu Nakazaki",
      speakers: ["https://react.dev/images/home/conf2021/tafu.jpg"],
    },
    {
      videoTitle: "UI Tools for Artists",
      videoSubTitle: "Lyle Troxell",
      speakers: ["https://react.dev/images/home/conf2021/lyle.jpg"],
    },
    {
      videoTitle: "Hydrogen + React 18",
      videoSubTitle: "Helen Lin",
      speakers: ["https://react.dev/images/home/conf2021/helen.jpg"],
    },
  ];

  const videoData2019 = [
    {
      videoTitle: "Keynote (Part 1)",
      videoSubTitle: "Tom Occhino",
      speakers: ["https://react.dev/images/home/conf2019/tom.jpg"],
    },
    {
      videoTitle: "Keynote (Part 2)",
      videoSubTitle: "Yuzhi Zheng",
      speakers: ["https://conf2019.reactjs.org/img/speakers/yuzhi.jpg"],
    },
    {
      videoTitle: "Building The New Facebook With React and Relay (Part 1)",
      videoSubTitle: "Frank Yan",
      speakers: ["https://react.dev/images/home/conf2019/frank.jpg"],
    },
    {
      videoTitle: "Building The New Facebook With React and Relay (Part 2)",
      videoSubTitle: "Ashley Watkins",
      speakers: ["https://react.dev/images/home/conf2019/ashley.jpg"],
    },
    {
      videoTitle: "How Our Team Is Using React Native to Save The World",
      videoSubTitle: "Tania Papazafeiropoulou",
      speakers: ["https://react.dev/images/home/conf2019/tania.jpg"],
    },
    {
      videoTitle:
        "Using Hooks and Codegen to Bring the Benefits of GraphQL to REST APIs",
      videoSubTitle: "Tejas Kumar",
      speakers: ["https://react.dev/images/home/conf2019/tejas.jpg"],
    },
    {
      videoTitle: "Building a Custom React Renderer",
      videoSubTitle: "Sophie Alpert",
      speakers: ["https://react.dev/images/home/conf2019/sophie.jpg"],
    },
    {
      videoTitle: "Is React Translated Yet?",
      videoSubTitle: "Nat Alison",
      speakers: ["https://react.dev/images/home/conf2019/nat.jpg"],
    },
    {
      videoTitle: "Building (And Re-Building) the Airbnb Design System",
      videoSubTitle: "Maja Wichrowska and Tae Kim",
      speakers: [
        "https://react.dev/images/home/conf2019/maja.jpg",
        "https://react.dev/images/home/conf2019/tae.jpg",
      ],
    },
    {
      videoTitle: "Accessibility Is a Marathon, Not a Sprint",
      videoSubTitle: "Brittany Feenstra",
      speakers: ["https://react.dev/images/home/conf2019/brittany.jpg"],
    },
    {
      videoTitle: "The State of React State in 2019",
      videoSubTitle: "Becca Bailey",
      speakers: ["https://react.dev/images/home/conf2019/becca.jpg"],
    },
    {
      videoTitle: "Let’s Program Like It’s 1999",
      videoSubTitle: "Lee Byron",
      speakers: ["https://react.dev/images/home/conf2019/lee.jpg"],
    },
    {
      videoTitle: "React Developer Tooling",
      videoSubTitle: "Brian Vaughn",
      speakers: ["https://react.dev/images/home/conf2019/brian.jpg"],
    },
    {
      videoTitle: "Data Fetching With Suspense In Relay",
      videoSubTitle: "Joe Savona",
      speakers: ["https://react.dev/images/home/conf2019/joe.jpg"],
    },
    {
      videoTitle: "Automatic Visualizations of the Frontend",
      videoSubTitle: "Cameron Yick",
      speakers: ["https://react.dev/images/home/conf2019/cameron.jpg"],
    },
    {
      videoTitle: "React Is Fiction",
      videoSubTitle: "Jenn Creighton",
      speakers: ["https://react.dev/images/home/conf2019/jenn.jpg"],
    },
    {
      videoTitle: "Progressive Web Animations",
      videoSubTitle: "Alexandra Holachek",
      speakers: ["https://react.dev/images/home/conf2019/alexandra.jpg"],
    },
    {
      videoTitle:
        "Creating Games, Animations and Interactions with the Wick Editor",
      videoSubTitle: "Luca Damasco",
      speakers: ["https://react.dev/images/home/conf2019/luca.jpg"],
    },
    {
      videoTitle: "Building React-Select",
      videoSubTitle: "Jed Watson",
      speakers: ["https://react.dev/images/home/conf2019/jed.jpg"],
    },
    {
      videoTitle: "Promoting Transparency in Government Spending with React",
      videoSubTitle: "Lizzie Salita",
      speakers: ["https://react.dev/images/home/conf2019/lizzie.jpg"],
    },
    {
      videoTitle: "Wonder-driven Development: Using React to Make a Spaceship",
      videoSubTitle: "Alex Anderson",
      speakers: ["https://react.dev/images/home/conf2019/alex.jpg"],
    },
  ];

  const [sizeProp, setSizeProp] = useState({
    width: -1,
    height: -1,
    translate1: -1,
    translate2: -1,
  }); // rightBox 스타일 관리

  const rightBoxRef = useRef();
  const urlTopRef = useRef();

  const scrollContainerRef = useRef();
  const scrollWrapRef = useRef();

  useEffect(() => {
    if (isHover.conferenceLayoutOpen || isHover.conferenceLayoutClose) {
      setSizeProp({
        width: urlTopRef.current.offsetWidth + 16,
        height: rightBoxRef.current.offsetHeight - urlTopRef.current.offsetHeight,
        translate1: (rightBoxRef.current.offsetWidth - urlTopRef.current.offsetWidth - 16) /
        2,
        translate2: urlTopRef.current.offsetHeight + 16, 
      });
    }
    if (isHover.suspenseOpen || isHover.talks || isHover.suspenseClose || isHover.searchableVideoList) {
      setSizeProp({
        width: scrollWrapRef.current.offsetWidth + 16,
        height: rightBoxRef.current.offsetHeight - (scrollContainerRef.current.offsetHeight - scrollWrapRef.current.offsetHeight + urlTopRef.current.offsetHeight),
        translate1: (rightBoxRef.current.offsetWidth - scrollWrapRef.current.offsetWidth - 16) /
        2,
        translate2: scrollContainerRef.current.offsetHeight - scrollWrapRef.current.offsetHeight + urlTopRef.current.offsetHeight,
      });
    }
  }, [isHover]);

  return (
    <div 
      ref={rightBoxRef}
      className="relative mt-0 lg:-my-20 w-full p-2.5 xs:p-5 lg:p-10 flex grow justify-center">
      <div className="mx-auto max-w-3xl shadow-nav dark:shadow-nav-dark relative overflow-hidden w-full dark:border-opacity-10 rounded-2xl">
        {/* 제목 부분  */}
        <div 
        ref={urlTopRef}
        className="w-full h-14 rounded-t-2xl shadow-outer-border backdrop-filter overflow-hidden backdrop-blur-lg backdrop-saturate-200 bg-white bg-opacity-90 z-10 absolute top-0 px-3 gap-2 flex flex-row items-center">
          <div className="select-none h-8 relative bg-gray-30/20 text-sm text-tertiary text-center rounded-full w-full flex-row flex space-between items-center">
            <div className="w-full leading-snug flex flex-row items-center justify-center">
              {/* svg */}
              <Key className="text-tertiary me-1 opacity-60"></Key>
              <span className="text-gray-30">example.com/</span>
              confs/react-conf-2021
            </div>
            <div className="relative rounded-full flex justify-center items-center animation-pulse-button">
              <div className="z-0 absolute shadow-[0_0_0_8px_rgba(0,0,0,0.5)] inset-0 rounded-full animation-pulse-shadow"></div>
              <button
                aria-label="Reload"
                className="z-10 flex items-center p-1.5 rounded-full cursor-pointer justify-center bg-[#ebecef] hover:bg-[#d3d7de]"
              >
                {/* svg */}
                <Refresh></Refresh>
              </button>
            </div>
          </div>
        </div>
        {/* 콘텐츠 부분  */}
        <div className="h-full flex flex-1">
          <div className="max-w-3xl rounded-2xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark h-[38rem] conf">
            {/* React Videos 제목부분  */}
            <div
              ref={scrollContainerRef}
              className="p-0"
              style={{
                contentVisibility: "auto",
                marginTop: "58px",
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
                      value={selectedYear}
                      onChange={handleSelectChange}
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
                      <option value="react-conf-2021">React Conf 2021</option>
                      <option value="react-conf-2019">React Conf 2019</option>
                    </select>
                  </div>
                  <img
                    // 이미지 변경되는곳
                    src={getImageSource()}
                    width={500}
                    height={263}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                {/* 검색창 및 비디오 부분  */}
                <div className="px-4 pb-4">
                  <div 
                    ref={scrollWrapRef}
                  className="mt-3" data-hover="SearchableVideoList">
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
                        {selectedYear === "react-conf-2021"
                          ? videoData2021.length
                          : videoData2019.length}{" "}
                        Videos
                      </h2>
                      <div className="flex flex-col gap-4">
                        {selectedYear === "react-conf-2021"
                          ? videoData2021.map((video, index) => (
                              <SummaryVideo
                                key={index}
                                videoTitle={video.videoTitle}
                                videoSubTitle={video.videoTitle}
                                via50={"to-gray-70"}
                                speakers={video.speakers}
                              ></SummaryVideo>
                            ))
                          : videoData2019.map((video, index) => (
                              <SummaryVideo
                                key={index}
                                videoTitle={video.videoTitle}
                                videoSubTitle={video.videoTitle}
                                via50={"to-gray-70"}
                                speakers={video.speakers}
                              ></SummaryVideo>
                            ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 마우스이벤트 발생시 나오는 레이아웃 */}
      <div
        className={`absolute z-10 inset-0 pointer-events-none transition-opacity transform-gpu${
          Object.keys(isHover).filter((key) => isHover[key]).length > 0
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <div
          className={` start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark rounded-lg ${
            Object.keys(isHover).filter((key) => isHover[key]).length > 0
              ? "opacity-100 "
              : "opacity-0"
          }`}
          style={{
            width: `${sizeProp.width}px`,
            height: `${sizeProp.height}px`,
            transform: `translate(${sizeProp.translate1}px, ${sizeProp.translate2}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
export { MainVideoBox, MainVideoListBox, SearchableVideoListBox, ConfsSlug };
