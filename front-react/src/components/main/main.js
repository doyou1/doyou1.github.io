import Nav from "components/main/nav/nav";
import Footer from "components/main/footer/footer";
import Intro from "components/main/items/intro";
import Summary from "components/main/items/summary";
import SummaryButton from "components/main/items/summaryButton";
import SummaryButtonNews from "components/main/items/summaryButtonNews";
import SummaryButtonPlatform from "components/main/items/summaryButtonPlatform";
import SummaryButtonSlider from "components/main/items/summaryButtonSlider";
import TextBox from "./items/Textbox";

export default function Main() {
  return (
    <>
      <Nav />
      <Intro />
      <Summary
        h2="Create user interfaces from components"
        lowertext=" Whether you work on your own or with thousands of other developers,
                using React feels the same. It is designed to let you seamlessly
                combine components written by independent people, teams, and
                organizations."
      >
        <TextBox>
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
        </TextBox>
      </Summary>
      <Summary
        h2="Write components with code and markup"
        lowertext="This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete."
      >
        <TextBox>
          React components are JavaScript functions. Want to show some content
          conditionally? Use an
          <code dir="ltr" className="font-mono">
            if
          </code>
          statement. Displaying a list? Try array
          <code dir="ltr" className="font-mono">
            map().
          </code>
          Learning React is learning programming.
        </TextBox>
      </Summary>
      <SummaryButton />
      <SummaryButton />
      <SummaryButtonPlatform />
      <SummaryButtonNews />
      <SummaryButtonSlider />
      <Footer />
    </>
  );
}
