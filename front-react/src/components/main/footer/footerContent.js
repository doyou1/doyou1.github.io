import React from "react";
import logo from "images/home-logo.svg";
import FooterSlide from "./footerSlide";

const FooterContent = () => {
  return (
    <div className="footer-content-container">
      <div className="footer-content-box w-full">
        <div className="w-full">
          <div className="footer-text-wrap">
            <div className="footer-text-box padding1-25rem">
              <h2 className="footer-text-h2 w-full">
                Join a community of millions
              </h2>
              <p className="footer-text-p">
                You’re not alone. Two million developers from all over the world
                visit the React docs every month. React is something that people
                and teams can agree on.
              </p>
            </div>
          </div>
          <div className="w-full footer-slider-container">
            <FooterSlide />
          </div>
          <div>
            <div className="footer-text-box padding1-25rem">
              <p className="text-opacity-80 footer-text-p ">
                This is why React is more than a library, an architecture, or
                even an ecosystem. React is a community. It’s a place where you
                can ask for help, find opportunities, and meet new friends. You
                will meet both developers and designers, beginners and experts,
                researchers and artists, teachers and students. Our backgrounds
                may be very different, but React lets us all create user
                interfaces together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
