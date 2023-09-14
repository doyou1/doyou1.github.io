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

// 컴포넌트를 따로 만들지 말고 className 안에 조건문을 걸어 concat으로해도 괜찮았을 듯 
// 심: 말씀하신대로 바꿔봤어요.
const FooterSlideImg = () => {
  return(
    <ul className="w-full">
      {slideList.map((item, idx) =>
        <li key={idx}>
          <div className="image-wrap">
            <img
              alt=""
              className={`aspect-[4/3] image-rounded image-size ${item} ${idx % 2 === 0 ? "footer-deg+2" : "footer-deg-2"}`}
            ></img>
          </div>
        </li>
    )}
    </ul>
    
  )
}

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
    <div className="wrap">
      <div className="rolling-list w-full footer-animation-marquee">
        <FooterSlideImg/>
      </div>
      <div className="rolling-list w-full footer-animation-marquee2">
        <FooterSlideImg/>
      </div>
    </div>
  );
};

export default FooterSlide;
