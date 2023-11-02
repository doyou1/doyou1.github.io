import "@/styles/summary.css";

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
          <h2 className="text-box-h2 dark:text-white ">{title}</h2>
          {textBox}
        </div>
      </div>
      {/* content-container start */}
      <div className="content-main-container">
        <div className="content-sub-container">
          <div className="content-in-container">
            <div className="content-box dark:content-box dark:shadow-nav-dark dark:shadow-inner-border-dark">
              <div className="content-leftbox dark:bg-gray-95 dark:shadow-nav-dark ">
                <div className="content-leftbox-nav dark:bg-wash-dark dark:border-white/5">
                  <h3 className="content-leftbox-nav-h3 dark:text-tertiary-dark">
                    {subHead}
                  </h3>
                </div>
                <div className="content-leftbox-main dark:bg-gray-95">
                  <div className="sp-wrapper">
                    <div className="sp-stack ">
                      <div className="sp-code-editor dark:bg-gray-95">
                        {/* codeEditor */}
                        {codeEditor()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 콘텐츠 오른쪽 박스 구성 */}
              {rightBox()}
            </div>
          </div>
        </div>
        {/* 하단 텍스트  */}
        <div className="lower-text-box">
          <p className="lower-box-p dark:text-secondary-dark">{lowerText}</p>
        </div>
      </div>
    </div>
  );
}
