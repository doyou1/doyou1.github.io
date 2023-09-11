import Nav from "components/main/nav/nav";
import Footer from "components/main/footer/footer";
import Intro from "components/main/items/intro";
import Summary from "components/main/items/summary";
import SummaryButton from "components/main/items/summaryButton";
import SummaryButtonNews from "components/main/items/summaryButtonNews";
import SummaryButtonPlatform from "components/main/items/summaryButtonPlatform";
import SummaryButtonSlider from "components/main/items/summaryButtonSlider";
import string from "./utils/string";

export default function Main() {
  return (
    <>
      <Nav />
      <Intro />

      {/* first Summary  */}
      <Summary
        h2={string.firstSummary.h2}
        lowertext={string.firstSummary.lowertext}
        textbox={string.firstSummary.textbox}
      ></Summary>

      {/* second Summary  */}
      <Summary
        h2={string.secondSummary.h1}
        lowertext={string.secondSummary.lowertext}
        textbox={string.secondSummary.textbox}
      ></Summary>

      {/* first SummaryButton  */}
      <SummaryButton
        h2={string.firstSummaryBtn.h2}
        lowertext={string.firstSummaryBtn.lowertext}
        textbox={string.firstSummaryBtn.textbox}
        a={string.firstSummaryBtn.btntext}
      ></SummaryButton>

      {/* second SummaryButton  */}
      <SummaryButton
        h2={string.secondSummaryBtn.h2}
        lowertext={string.secondSummaryBtn.lowertext}
        textbox={string.secondSummaryBtn.textbox}
        a={string.secondSummaryBtn.btntext}
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
