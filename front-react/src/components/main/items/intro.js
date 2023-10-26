import "@/styles/intro.css";
import { ReactComponent as HomeLogo } from "@/assets/home-logo.svg";

export default function Intro() {
  return (
    <>
      {/* {main intro} */}
      <div className="intro-container">
        {/* home logo */}
        <div className="flex items-center">
          <a className="" href="#">
            <HomeLogo 
                  className="react-logo dark:text-[#149eca]"
                  style={{ color: "#087ea4"}}
                />
          </a>
        </div>
        {/* text set */}
        <h1 className="text-h1 font-diplay text-[40px] dark:text-white">React</h1>
        <p className="text-p font-diplay dark:text-white">
          The library for web and native user interfaces
        </p>
        {/* button set */}
        <div className="button-boxes">
          <a href="#" className="learn-react-box" aria-label="Learn React">
            Learn React
          </a>
          <a href="#" className="api-reference-box dark:text-white" aria-label="API Reference">
            API Reference
          </a>
        </div>
      </div>
    </>
  );
}
