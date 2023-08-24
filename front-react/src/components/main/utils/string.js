import React from "react";
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
  },
};

export default string;
