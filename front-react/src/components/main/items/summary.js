import "@/styles/summary.css";

import { MainVideoBox } from "./codeEditor/summaryRightBox";

export default function Summary({
  title,
  subHead,
  lowerText,
  textBox,
  codeEditor,
  rightBox,
}) {
  return (
    // main container
    <div className="summary-main-container">
      <div className="summary-sub-container">
        {/* text-box start */}
        <div className="text-box">
          <h2 className="text-box-h2">{title}</h2>
          {textBox}
        </div>
      </div>
      {/* content-container start */}
      <div className="content-main-container">
        <div className="content-sub-container">
          <div className="content-in-container">
            <div className="content-box">
              <div className="content-leftbox">
                <div className="content-leftbox-nav">
                  <h3 className="content-leftbox-nav-h3">{subHead}</h3>
                </div>
                <div dif="ltr" className="content-leftbox-main">
                  <div className="sp-wrapper">
                    <div className="sp-stack">
                      <div className="sp-code-editor">
                        {/* codeEditor */}
                        {codeEditor}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 콘텐츠 오른쪽 박스 구성 */}
              {rightBox}
            </div>
          </div>
        </div>
        {/* 하단 텍스트  */}
        <div className="lower-text-box">
          <p className="lower-box-p">{lowerText}</p>
        </div>
      </div>
    </div>
  );
}
