import React from "react";
import logo from "@/assets/home-logo.svg";
import FooterSlide from "./footerSlide";

const FooterContent = ({ footerContentString, footerContentBtn }) => {
  return (
    <div className="footer-content-container">
      <div className="footer-content-box w-full">
        <div className="w-full footer-content-wrap">
          <div className="footer-text-wrap">
            <div className="footer-text-box padding1-25rem">
                {footerContentString.h2}
              <p className="footer-text-p">{footerContentString.firstText}</p>
            </div>
          </div>
          <div className="w-full footer-slider-container">
            <FooterSlide />
          </div>
          <div>
            <div className="footer-text-box padding1-25rem">
              <p className="text-opacity-80 footer-text-p ">
                {footerContentString.secondText}
              </p>
            </div>
          </div>
        </div>
        <div className="content-bottom-box">
          <img
            className="footer-react-logo"
            src={logo}
            alt="react logo in footer"
          />
          {footerContentBtn.h2}
          {footerContentBtn.btnText}
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
