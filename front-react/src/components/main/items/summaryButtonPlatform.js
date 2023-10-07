import "@/styles/summary.css";
import "@/styles/platform.css";
import { ReactComponent as Key } from "@/assets/summary/key.svg";
import { ReactComponent as Google } from "@/assets/summary/google.svg";
import { ReactComponent as Firefox } from "@/assets/summary/firefox.svg";
import { ReactComponent as Safari } from "@/assets/summary/safari.svg";
import { ReactComponent as Ios } from "@/assets/summary/ios.svg";
import { ReactComponent as Android } from "@/assets/summary/android.svg";
import { ReactComponent as Bluetooth } from "@/assets/summary/bluetooth.svg";
import { ReactComponent as Wifi } from "@/assets/summary/wifi.svg";
import { ReactComponent as Battery } from "@/assets/summary/battery.svg";

import { ReactComponent as Build } from "@/assets/summary/build.svg";
import { ReactComponent as ArrowRightMiddleAnimation } from "@/assets/summary/arrow-right-middle-animation.svg";

export default function SummaryButton({ title, btnText, lowerText, textBox }) {
  return (
    <div>
      {" "}
      <div className="summary-main-container">
        <div className="summary-sub-container">
          {/* text-box start */}
          <div className="text-box">
            <h2 className="text-box-h2">{title}</h2>
            <p className="text-box-p">{textBox}</p>
          </div>
        </div>
        {/* content-container start */}
        <div className="content-main-container">
          <main className="content-main-platform">
            {/* platform-leftbox layout */}
            <div className="platform-leftbox">
              {/* botton svg */}
              <div className="platform-leftbox-svg-collection">
                <div className="platform-leftbox-svg">
                  <Google className="svg-google svg"> </Google>
                  <Firefox className="svg-firefox svg"> </Firefox>
                  <Safari className="svg-safari svg"></Safari>
                </div>
              </div>
              {/* stay true to the web main layout */}
              <div className="platform-leftbox-webbox">
                {/* leftnav */}
                <div className="platform-leftbox-webbox-nav">
                  <div className="example-nav-content">
                    <div className="example-nav">
                      <Key className="code-key"></Key>

                      <span>example.com</span>
                    </div>
                  </div>
                </div>
                {/* leftmain collection */}
                <div className="platform-leftbox-webbox-collection">
                  <div className="platform-leftbox-webbox-textbox">
                    <div></div>
                    <div className="second-leftbox-webbox"></div>
                    <div className="third-leftbox-webbox">
                      <h4>Stay true to the web</h4>
                      <p>
                        People expect web app pages to load fast. On the server,
                        React lets you start streaming HTML while you’re still
                        fetching data, progressively filling in the remaining
                        content before any JavaScript code loads. On the client,
                        React can use standard web APIs to keep your UI
                        responsive even in the middle of rendering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* platform-rightbox layout */}
            <div className="platform-leftbox">
              {/* botton svg */}
              <div className="platform-leftbox-svg-collection">
                <div className="platform-leftbox-svg">
                  <Ios className="svg-ios svg"></Ios>
                  <Android className="svg-android svg"></Android>
                </div>
              </div>
              {/* stay true to the web main layout */}
              <figure className="platform-leftbox-webbox">
                {/* leftmain collection */}
                <div className="platform-rightbox-webbox-collection">
                  <div className="platform-leftbox-webbox-textbox platform-rightbox-webbox-textbox">
                    <div className="second-rightbox-webbox">
                      <span>오후 12:15</span>
                      <div className="leftbox-nav-svg">
                        <Bluetooth className="svg-bluetooth"></Bluetooth>
                        <Wifi className="svg-wifi"></Wifi>
                        <Battery className="svg-battery"></Battery>
                      </div>
                    </div>

                    <div className="third-leftbox-webbox">
                      <h4>Go truly native</h4>
                      <p>
                        People expect native apps to look and feel like their
                        platform.
                        <a href="#"> React Native </a>
                        and
                        <a href="#"> Expo </a>
                        let you build apps in React for Android, iOS, and more.
                        They look and feel native because their UIs are truly
                        native. It’s not a web view—your React components render
                        real Android and iOS views provided by the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </main>

          {/* 하단 텍스트  */}
          <div className="lower-text-box">
            <p className="lower-box-p">{lowerText}</p>
            {/* utils/string.firstSummaryBtn.btntext  */}
            {/* {btnText} */}

            <div className="lower-button-box">
              <a
                className="group"
                href="https://reactnative.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <Build className="code-logo" alt="code logo" />
                Build for native platforms
                <ArrowRightMiddleAnimation className="text-[#23272f] dark:text-[#f6f7f9] rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
