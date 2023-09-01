import { React, useState } from "react";
import sliderImg1 from "images/footer/react_conf_elizabet.jpg";
import sliderImg2 from "images/footer/react_conf_fun.jpg";
import sliderImg3 from "images/footer/react_conf_hallway.jpg";
import sliderImg4 from "images/footer/react_conf_nat.jpg";
import sliderImg5 from "images/footer/react_india_hallway.jpg";
import sliderImg6 from "images/footer/react_india_selfie.jpg";
import sliderImg7 from "images/footer/react_india_sunil.jpg";
import sliderImg8 from "images/footer/react_india_team.jpg";

const slideList = [
  { key: 1, img: sliderImg1 },
  { key: 2, img: sliderImg2 },
  { key: 3, img: sliderImg3 },
  { key: 4, img: sliderImg4 },
  { key: 5, img: sliderImg5 },
  { key: 6, img: sliderImg6 },
  { key: 7, img: sliderImg7 },
  { key: 8, img: sliderImg8 },
];

// 컴포넌트를 따로 만들지 말고 className 안에 조건문을 걸어 concat으로해도 괜찮았을 듯 
const FooterSlideImg = () => {
  return(
    <ul className="w-full">
      {slideList.map((item) =>
      item.key % 2 === 1 ? (
        <li key={item.key}>
          <div className="image-wrap">
            <img
              src={item.img}
              alt=""
              className="aspect-[4/3] image-rounded image-size footer-deg+2"
            ></img>
          </div>
        </li>
      ) : (
        <li key={item.key}>
          <div className="image-wrap">
            <img
              src={item.img}
              alt=""
              className="aspect-[4/3] image-rounded image-size footer-deg-2"
            ></img>
          </div>
        </li>
      )
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
