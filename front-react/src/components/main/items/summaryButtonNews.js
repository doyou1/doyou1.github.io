// 정은우
// 230929
import "@/styles/summary.css";
import "@/styles/custom.css";
import { ReactComponent as ArrowBottom } from "@/assets/summary/arrow-bottom.svg";
import { ReactComponent as NewsPaper } from "@/assets/summary/news-paper.svg";
import { ReactComponent as LaboratoryFlask } from "@/assets/summary/laboratory-flask.svg";

export default function SummaryButtonNews({
  title,
  lowerText,
  textBox,
  btnText,
  rightTopPtag,
  rightBox,
}) {
  const RightBoxItem = () => {};

  // console.log();
  return (
    <div className="summary-main-container">
      <div className="summary-news-wrap flex">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-5">
          <div className="summary-news-insidebox flex">
            <div className="summary-news-left-box flex">
              {title}
              <p className="summary-news-text-box">{lowerText}</p>
              <div className="summary-news-text-box summary-news-text-box-bottom">
                {textBox}
                {btnText}
              </div>
            </div>
            <div className="summary-news-right-box flex">
              <div>
                {/* 230923) 화살표 svg 교체, 글 string 교체 예정 */}
                <p className="summary-news-p-color font-bold text-sm uppercase tracking-wide flex-row flex gap-2 items-center mt-5 lg:-mt-2 w-full ">
                  <ArrowBottom /> {rightTopPtag}
                </p>
                <div className="summary-news-items gap-3 w-full flex-row flex-wrap flex">
                  {/* [정은우_230929] 다른 페이지 이동을 위해 Link태그 사용해볼까 했는데 일단은 a태그로 대체했습니다 */}
                  <RightBoxItem />
                  {rightBox.map((box, idx) => (
                    <div className="flex-1 min-w-[40%] text-start" key={idx}>
                      <a
                        href="./"
                        className="block outline-none outline-offset-2 rounded-2xl w-full h-full"
                      >
                        <div className="summary-news-item-box leading-relaxed w-full h-full text-xl rounded-2xl justify-between flex-col flex">
                          <div className="summary-news-item-first-text gap-3 w-full flex-row flex">
                            <h2 className="break-words">{box[0]}</h2>
                          </div>
                          <div>
                            <div className="summary-news-item-second-text text-base gap-2 flex-rowitems-center justify-start flex">
                              {box[1]}
                              {box[2]}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
