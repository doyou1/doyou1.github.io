// 231021 - 정

import "@/styles/footer.css";
import "@/styles/summaryButtonSlider.css"
import { ReactComponent as ReactLogo } from "@/assets/home-logo.svg";

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
const SummaryButtonSlideImg = () => {
  return (
    <>
      {slideList.map((item, idx) => (
        <div key={item} className="group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative">
            <img
              alt=""
              className={`ease-in-out duration-300 aspect-[4/3] rounded-2xl  image-size group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl ${item} ${
                idx % 2 === 0
                  ? "rotate-[2deg] group-hover:rotate-[-1deg]"
                  : "rotate-[-2deg] group-hover:rotate-1"
              }`}
            ></img>
        </div>
      ))}
    </>
  );
};
export default function SummaryButtonSlider({
  title,
  firstTextBox,
  secondTextBox,
  btnTitle,
  btnText,
}) {
  return (
    <div className="mx-auto flex flex-col w-full footer-content-container border-primary/10">
      <div className="flex-col gap-2 flex grow w-full my-20 lg:my-32 mx-auto items-center">
        <div className="w-full">
          <div className="mx-auto flex flex-col max-w-4xl">
            <div className="px-5 lg:px-0 max-w-4xl lg:text-center text-opacity-80 flex flex-col items-center justify-center">
              <h2 className="footer-text-h2 leading-xl font-display font-semibold text-5xl lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl dark:primary-text-dark">
                {title}
              </h2>
              <p className="mx-auto flex flex-col max-w-3xl dark:sub-text-dark">
                {firstTextBox}
              </p>
            </div>
          </div>
          <div>
            <div className="relative flex overflow-x-hidden overflow-y-visible w-auto">
              <div
                className=" w-full rolling-list py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marqueeSlider lg:animate-large-marqueeSlider"
                style={{ animationPlayState: "running" }}
              >
                <SummaryButtonSlideImg />
              </div>
              <div
                className="w-full rolling-list absolute top-0 py-12 lg:py-20 whitespace-nowrap flex flex-row  animate-marqueeSlider2 lg:animate-large-marqueeSlider2"
                style={{ animationPlayState: "running" }}
              >
                <SummaryButtonSlideImg />
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col max-w-4xl">
            <div className="footer-text-box px-5 lg:px-0 max-w-3xl lg:text-center text-white text-opacity-80 flex flex-col items-center justify-center">
              <p className="mx-auto flex flex-col max-w-4xl footer-text-p dark:sub-text-dark">
                {secondTextBox}
              </p>
            </div>
          </div>
        </div>
        <div className="content-bottom-box">
          <ReactLogo className="footer-react-logo dark:text-[#149eca]"
                  style={{ color: "#087ea4"}} alt="react logo in footer" />
          <h2 className="footer-text-h2 leading-xl font-display font-semibold summary-button-slider-h2-size lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl dark:primary-text-dark">
            {btnTitle}
          </h2>
          {btnText}
        </div>
      </div>
    </div>
  );
}
