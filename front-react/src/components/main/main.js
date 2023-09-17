import Nav from "@/components/main/nav/nav";
import Footer from "@/components/main/footer/footer";
import Intro from "@/components/main/items/intro";
import Summary from "@/components/main/items/summary";
import SummaryButton from "@/components/main/items/summaryButton";
import SummaryButtonNews from "@/components/main/items/summaryButtonNews";
import SummaryButtonPlatform from "@/components/main/items/summaryButtonPlatform";
import SummaryButtonSlider from "@/components/main/items/summaryButtonSlider";
import string from "@/utils/string";
// import footerString from "./utils/footerString";
import {
  codeEditorVideo,
  codeEditorVideoList,
  codeEditorSearchableVideoList,
  codeEditorConferencePage,
} from "@/components/main/items/codeEditor/codeEditor";
import { rightBox } from "@/components/main/items/codeEditor/rightBox";

export default function Main() {
  return (
    <>
      <Nav />
      <Intro />

      {/* first Summary  */}
      <Summary
        title={string.firstSummary.h2.title}
        subHead={string.firstSummary.h2.subHead}
        lowerText={string.firstSummary.lowerText}
        textBox={string.firstSummary.textBox}
        codeEditor={codeEditorVideo.code}
        rightBox={rightBox.mainVideoBox}
      ></Summary>

      {/* second Summary  */}

      <Summary
        title={string.secondSummary.h2.title}
        subHead={string.secondSummary.h2.subHead}
        lowerText={string.secondSummary.lowerText}
        textBox={string.secondSummary.textBox}
        codeEditor={codeEditorVideoList.code}
        rightBox={rightBox.mainVideoListBox}
      ></Summary>

      {/* first SummaryButton  */}
      <SummaryButton
        title={string.firstSummaryBtn.h2.title}
        subHead={string.firstSummaryBtn.h2.subHead}
        btnText={string.firstSummaryBtn.btnText}
        lowerText={string.firstSummaryBtn.lowerText}
        textBox={string.firstSummaryBtn.textBox}
        codeEditor={codeEditorSearchableVideoList.code}
      ></SummaryButton>

      {/* second SummaryButton  */}
      <SummaryButton
        title={string.secondSummaryBtn.h2.title}
        subHead={string.secondSummaryBtn.h2.subHead}
        btnText={string.secondSummaryBtn.btnText}
        lowerText={string.secondSummaryBtn.lowerText}
        textBox={string.secondSummaryBtn.textBox}
        codeEditor={codeEditorConferencePage.code}
      ></SummaryButton>
      <SummaryButtonPlatform />
      <SummaryButtonNews />
      <SummaryButtonSlider />

      <Footer
        footerContentString={string.footerContentString}
        footerContentBtn={string.footerContentBtn}
      />
    </>
  );
}
