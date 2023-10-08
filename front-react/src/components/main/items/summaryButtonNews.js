// 정은우
// 2310078
// 버튼 화살표 svg 애니메이션 추가
import "@/styles/summary.css";
import "@/styles/summaryButtonNews.css";
import { ReactComponent as ArrowBottom } from "@/assets/summary/arrow-bottom.svg";
import { ReactComponent as NewsPaper } from "@/assets/summary/news-paper.svg";
import { ReactComponent as ArrowRightMiddleAnimation } from "@/assets/summary/arrow-right-middle-animation.svg";

export default function SummaryButtonNews({
  title,
  lowerText,
  textBox,
  btnText,
  rightTopPtag,
  rightBox,
}) {
  // console.log();
  return (
    <div className="summary-main-container">
      <div className="my-32 w-full grow flex-col flex">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-5">
          <div className="max-w-3xl lg:max-w-7xl lg:px-5 gap-5 px-0.5 lg:flex-row flex-col flex">
            <div className="lg:w-6/12 max-w-3xl lg:max-w-7xl lg:ps-5 lg:pe-10 items-start content-start flex-col flex">
              <h2 className="leading-xl summary-news-left-h2 text-left font-display text-primary font-semibold text-5xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl">
                { title }
              </h2>
              <p className="summary-news-text-color max-w-3xl mx-auto text-lg lg:text-xl">
                {lowerText}
              </p>
              <div className="order-last pt-5">
                <p className="summary-news-text-color max-w-3xl mx-auto text-lg lg:text-xl">
                  {textBox}
                </p>
                <div className="summary-news-lower-btn hidden lg:flex justify-start w-full">
                  <a
                    href="https://reactnative.dev/"
                    target="_blank"
                    className="hover-summary-news-button-bg focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 group cursor-pointer w-auto justify-center inline-flex font-bold items-center mt-10 outline-none leading-tight text-lg py-2.5 rounded-full px-4 sm:px-6 ease-in-out summary-news-button-stroke dark:summary-news-button-stroke-dark"
                  >
                    <NewsPaper className="code-logo" alt="news paper" />
                    {btnText}
                    <ArrowRightMiddleAnimation />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 summary-news-right-box">
              <p className="uppercase tracking-wide font-bold text-sm summary-news-p-color dark:summary-news-p-color-dark flex flex-row gap-2 items-center mt-5 lg:-mt-2 w-full">
                <ArrowBottom /> {rightTopPtag}
              </p>
              <div className="text-start my-5 gap-5 w-full flex-row flex-wrap flex">
                {rightBox.map((box, idx) => (
                  <div className="flex-1 min-w-[40%] text-start" key={idx}>
                    <a
                      href="./"
                      className="block outline-none outline-offset-2 rounded-2xl text-inherit text-inheritw-full h-full"
                    >
                      <div className="hover-summary-news-button-bg summary-news-button-stroke decoration-inherit decoration-inherit box-border leading-relaxed p-5 w-full h-full text-xl rounded-2xl justify-between flex-col flex">
                        <div className="summary-news-item-first-text gap-3 w-full flex-row flex">
                          <h2 className="break-words text-2xl lg:text-3xl font-semibold leading-snug mb-4 flex-1">
                            {box.title}
                          </h2>
                        </div>
                        <div>
                          <div className="summary-news-item-second-text text-base gap-2 flex-rowitems-center justify-start flex">
                            {box.component}
                            {box.date}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <div className="summary-news-lower-btn flex lg:hidden justify-start w-full">
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  className="hover-summary-news-button-bg focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 group cursor-pointer w-auto justify-center inline-flex font-bold items-center mt-10 outline-none leading-tight text-lg py-2.5 rounded-full px-4 sm:px-6 ease-in-out summary-news-button-stroke dark:summary-news-button-stroke-dark"
                >
                  <NewsPaper className="code-logo" alt="news paper" />
                  {btnText}
                  <ArrowRightMiddleAnimation />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
