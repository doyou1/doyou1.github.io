import "styles/summary.css";

// import code from "images/summary/code.svg";
// // 지우고 두개의 svg 파일로 만들예정
// import arrow from "images/summary/arrow-right.svg";
export default function SummaryButton({
  h2,
  lowertext,
  textbox,
  a,
  codeeditor,
}) {
  return (
    // main container
    <div className="summary-main-container">
      <div className="summary-sub-container">
        {/* text-box start */}
        <div className="text-box">
          <h2 className="text-box-h2">{h2}</h2>
          <p className="text-box-p">{textbox}</p>
        </div>
      </div>
      {/* content-container start */}
      <div className="content-main-container">
        <div className="content-sub-container">
          <div className="content-in-container">
            <div className="content-box">
              <div className="content-leftbox">
                <div className="content-leftbox-nav">
                  <h3 className="content-leftbox-nav-h3">Video.js</h3>
                </div>
                <div dif="ltr" className="content-leftbox-main">
                  <div className="sp-wrapper">
                    <div className="sp-stack">
                      <div className="sp-code-editor">
                        {/* pre code 부분부터는 따로 공부해서 작성해야할듯 */}
                        {/* <CodeEditor /> */}
                        {codeeditor}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 콘텐츠 오른쪽 박스 구성 */}
              <div className="content-rightbox">
                <div className="content-main-rightbox"></div>
              </div>
            </div>
          </div>
        </div>
        {/* 하단 텍스트  */}
        <div className="lower-text-box">
          <p className="lower-box-p">{lowertext}</p>
          {/* utils/string.firstSummaryBtn.btntext  */}
          {a}
        </div>
      </div>
    </div>
  );
}
