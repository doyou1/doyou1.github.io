import "styles/Summary.css";

export default function Summary() {
  return (
    <div className="summary-main-container">
      <div className="summary-sub-container">
        {/* text-box start */}
        <div className="text-box">
          <h2 className="text-box-h2">
            Create user interfaces from components
          </h2>
          <p className="text-box-p">
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like
            <code dir="ltr" className="font-mono">
              Thumbnail
            </code>
            ,
            <code dir="ltr" className="font-mono">
              LikeButton
            </code>
            , and
            <code dir="ltr" className="font-mono">
              Video
            </code>
            . Then combine them into entire screens, pages, and apps.
          </p>
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
                        <pre className="pre">
                          <code>
                            <div className="cm-line">
                              <span className="span-syntax">
                                function Video ({"{video}"})
                              </span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                            <div className="cm-line">
                              <span className="span-syntax">함수</span>
                            </div>
                          </code>
                        </pre>
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
          <p className="lower-box-p">
            Whether you work on your own or with thousands of other developers,
            using React feels the same. It is designed to let you seamlessly
            combine components written by independent people, teams, and
            organizations.
          </p>
        </div>
      </div>
    </div>
  );
}
