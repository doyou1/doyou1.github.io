import React from "react";
import code from "images/summary/code.svg";
// 지우고 두개의 svg 파일로 만들예정
import arrow from "images/summary/arrow-right.svg";
import chart from "images/summary/chart-network.svg";

const string = {
  // firstSummart text
  firstSummary: {
    h2: "Create user interfaces from components",
    lowertext:
      " Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
    textbox: (
      <p className="text-box-p">
        React lets you build user interfaces out of individual pieces called
        components. Create your own React components like&nbsp;
        <code dir="ltr" className="font-mono">
          Thumbnail
        </code>
        , &nbsp;
        <code dir="ltr" className="font-mono">
          LikeButton
        </code>
        , and&nbsp;
        <code dir="ltr" className="font-mono">
          Video
        </code>
        . Then combine them into entire screens, pages, and apps.
      </p>
    ),
  },

  // secondSummart text
  secondSummary: {
    h1: "Write components with code and markup",
    lowertext:
      "This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.",
    textbox: (
      <p className="text-box-p">
        React components are JavaScript functions. Want to show some content
        conditionally? Use an&nbsp;
        <code dir="ltr" className="font-mono">
          if
        </code>
        &nbsp;statement. Displaying a list? Try array&nbsp;
        <code dir="ltr" className="font-mono">
          map().
        </code>
        &nbsp;Learning React is learning programming.
      </p>
    ),
  },

  //first SummaryButton
  firstSummaryBtn: {
    h2: "Add interactivity wherever you need it",
    lowertext:
      "You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.",
    textbox: (
      <p className="text-box-p">
        React components receive data and return what should appear on the
        screen. You can pass them new data in response to an interaction, like
        when the user types into an input. React will then update the screen to
        match the new data.
      </p>
    ),
    // button layout
    btntext: (
      <div className="lower-button-box">
        <a href="https://reactnative.dev/" target="_blank">
          <img className="code-logo" src={code} alt="code logo" />
          Add React to your page
          <img className="arrow-logo" src={arrow} alt="arrow logo" />
        </a>
      </div>
    ),
  },

  // second SummaryButton
  secondSummaryBtn: {
    h2: "Go full-stack with a framework",
    lowertext:
      "React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.",
    textbox: (
      <p className="text-box-p">
        React is a library. It lets you put components together, but it doesn’t
        prescribe how to do routing and data fetching. To build an entire app
        with React, we recommend a full-stack React framework like&nbsp;
        <a href="#" target="black" className="textbox-a">
          Next.js
        </a>
        &nbsp;or&nbsp;
        <a href="#" target="black" className="textbox-a">
          Remix.
        </a>
      </p>
    ),

    btntext: (
      <div className="lower-button-box">
        <a href="https://reactnative.dev/" target="_blank">
          <img className="code-logo" src={chart} alt="code logo" />
          Get started with a framework
          <img className="arrow-logo" src={arrow} alt="arrow logo" />
        </a>
      </div>
    ),
  },

  // Footer String Start
  // Footer Content
  footerContentString: {
    h2: (
      <h2 className="footer-text-h2 w-full">
        Join a community <br /> of millions
      </h2>
    ),
    firstText:
      "You’re not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.",
    secondText:
      "This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.",
  },
  // Footer Button section below the slider
  footerContentBtn: {
    h2: (
      <h2 className="footer-text-h2">
        Welcome to the
        <br />
        React community
      </h2>
    ),
    btnText: <a className="footer-start-button">Get Started</a>,
  },
};

export default string;
