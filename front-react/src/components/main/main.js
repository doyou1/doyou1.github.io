import Nav from "@/components/main/nav/nav";
import NavMenu from "@/components/main/nav/navMenu";

import Footer from "@/components/main/footer/footer";
import Intro from "@/components/main/items/intro";
import Summary from "@/components/main/items/summary";
import SummaryButton from "@/components/main/items/summaryButton";
import SummaryButtonNews from "@/components/main/items/summaryButtonNews";
import SummaryButtonPlatform from "@/components/main/items/summaryButtonPlatform";
import SummaryButtonSlider from "@/components/main/items/summaryButtonSlider";
import DocSearch from "@/components/main/nav/docSearch";
import string from "@/utils/string";
// import footerString from "./utils/footerString";
import {
  CodeEditorVideo,
  CodeEditorVideoList,
  CodeEditorSearchableVideoList,
  CodeEditorConferencePage,
} from "@/components/main/items/codeEditor/codeEditor";
import { MainVideoBox } from "./items/codeEditor/summaryRightBox";
import { useRecoilValue } from "recoil";
import {
  isOpenHomeMenuState,
  isOpenDocSearchState,
} from "@/recoil/recoil_state";
import { useState } from "react";

export default function Main() {
  const isOpenHomeMenu = useRecoilValue(isOpenHomeMenuState);
  const isOpenDocSearch = useRecoilValue(isOpenDocSearchState);
  const [isHover, setIsHover] = useState(null);

  return (
    <div
      className={`font-text font-medium antialiased text-lg bg-[#FFFFFF] dark:bg-[#23272f] text-secondary dark:text-secondary-dark leading-base`}
    >
      <div
        className={`${
          !isOpenHomeMenu
            ? "z-50 sticky top-0"
            : "h-screen sticky top-0 lg:bottom-0 lg:h-screen flex flex-col dark:shadow-dark shadow-none z-20"
        }`}
      >
        <Nav />
        {isOpenHomeMenu && <NavMenu />}
      </div>

      <main className="min-w-0 isolate">
        <Intro />
        {/* first Summary  */}
        <Summary
          title={string.firstSummary.h2.title}
          subHead={string.firstSummary.h2.subHead}
          lowerText={string.firstSummary.lowerText}
          textBox={string.firstSummary.textBox}
          codeEditor={
            <CodeEditorVideo
              isHover={isHover}
              setIsHover={setIsHover}
            ></CodeEditorVideo>
          }
          rightBox={
            <MainVideoBox
              isHover={isHover}
              setIsHover={setIsHover}
            ></MainVideoBox>
          }
        ></Summary>

        {/* second Summary  */}

        <Summary
          title={string.secondSummary.h2.title}
          subHead={string.secondSummary.h2.subHead}
          lowerText={string.secondSummary.lowerText}
          textBox={string.secondSummary.textBox}
          codeEditor={<CodeEditorVideoList></CodeEditorVideoList>}
        ></Summary>

        {/* first SummaryButton  */}
        <SummaryButton
          title={string.firstSummaryBtn.h2.title}
          subHead={string.firstSummaryBtn.h2.subHead}
          btnText={string.firstSummaryBtn.btnText}
          lowerText={string.firstSummaryBtn.lowerText}
          textBox={string.firstSummaryBtn.textBox}
          codeEditor={
            <CodeEditorSearchableVideoList></CodeEditorSearchableVideoList>
          }
        ></SummaryButton>

        {/* second SummaryButton  */}
        <SummaryButton
          title={string.secondSummaryBtn.h2.title}
          subHead={string.secondSummaryBtn.h2.subHead}
          btnText={string.secondSummaryBtn.btnText}
          lowerText={string.secondSummaryBtn.lowerText}
          textBox={string.secondSummaryBtn.textBox}
          codeEditor={<CodeEditorConferencePage></CodeEditorConferencePage>}
        ></SummaryButton>
        <SummaryButtonPlatform />
        <SummaryButtonNews />
        <SummaryButtonSlider />

        <Footer
          footerContentString={string.footerContentString}
          footerContentBtn={string.footerContentBtn}
        />
      </main>

      {isOpenDocSearch && <DocSearch />}
    </div>
  );
}
