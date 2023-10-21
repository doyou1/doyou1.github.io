import { useState } from "react";

const slideList = [
  "react-conf-elizabet",
  "react-conf-fun",
  "react-conf-hallway",
  "react-conf-nat",
  "react-india-hallway",
  "react-india-selfie",
  "react-india-sunil",
  "react-india-team",
];

const FooterSlideImg = () => {
  return (
    <>
      {slideList.map((item, idx) => (
        <div className="group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative">
          <div key={idx} className="">
            <img
              alt=""
              className={`ease-in-out duration-300 aspect-[4/3] rounded-2xl  image-size group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl ${item} ${
                idx % 2 === 0
                  ? "rotate-[2deg] group-hover:rotate-[-1deg]"
                  : "rotate-[-2deg] group-hover:rotate-1"
              }`}
            ></img>
          </div>
        </div>
      ))}
    </>
  );
};

const FooterSlide = () => {
  const [animate, setAnimate] = useState(true);

  // 마우스 호버시 애니메이션을 위한 시도
  const onStop = () => {
    setAnimate(false);
    console.log("마우스오버", animate);
  };
  const onRun = () => {
    setAnimate(true);
    console.log("마우스떠남", animate);
  };

  return (
    <div className="relative flex overflow-x-hidden overflow-y-visible w-auto">
      <div className=" w-full rolling-list py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marqueeSlider lg:animate-large-marqueeSlider"
      style={{ animationPlayState: "running" }}>
        <FooterSlideImg />
      </div>
      <div className="w-full rolling-list absolute top-0 py-12 lg:py-20 whitespace-nowrap flex flex-row  animate-marqueeSlider2 lg:animate-large-marqueeSlider2"
      style={{ animationPlayState: "running" }}>
        <FooterSlideImg />
      </div>
    </div>
  );
};

export default FooterSlide;
