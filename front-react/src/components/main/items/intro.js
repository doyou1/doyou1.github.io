import "styles/intro.css";
import logo from "images/home-logo.svg";

export default function Intro() {
  return (
    <>
      {/* {main intro} */}
      <div className="intro-container">
        {/* home logo */}
        <div className="flex items-center">
          <a className="" href="#">
            <img className="react-logo " src={logo} alt="home logo" />
          </a>
        </div>
        {/* text set */}
        <h1 className="text-h1 font-diplay text-xl">React</h1>
        <p className="text-p font-diplay">
          The library for web and native user interfaces
        </p>
        {/* button set */}
        <div className="button-boxes">
          <a href="#" className="learn-react-box" aria-label="Learn React">
            Learn React
          </a>
          <a href="#" className="api-reference-box" aria-label="API Reference">
            API Reference
          </a>
        </div>
      </div>
    </>
  );
}
