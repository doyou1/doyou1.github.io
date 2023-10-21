// import logo from "@/assets/home-logo.svg";
import { ReactComponent as FooterLogo } from "@/assets/home-logo.svg";
import FooterSlide from "./footerSlide";

const FooterContent = ({ footerContentString, footerContentBtn }) => {
  return (
    <div className="mx-auto flex flex-col w-full footer-content-container border-t border-primary/10">
      <div className="flex-col gap-2 flex grow w-full my-20 lg:my-32 mx-auto items-center">
        <div className="w-full">
          <div className="mx-auto flex flex-col max-w-4xl">
            <div className="px-5 lg:px-0 max-w-4xl lg:text-center text-opacity-80 flex flex-col items-center justify-center">
              {footerContentString.h2}
              <p className="mx-auto flex flex-col max-w-4xl">
                {footerContentString.firstText}
              </p>
            </div>
          </div>
            <FooterSlide />
          <div className="mx-auto flex flex-col max-w-4xl">
            <div className="footer-text-box px-5 lg:px-0 max-w-4xl lg:text-center text-white text-opacity-80 flex flex-col items-center justify-center">
              <p className="mx-auto flex flex-col max-w-4xl footer-text-p ">
                {footerContentString.secondText}
              </p>
            </div>
          </div>
        </div>
        <div className="content-bottom-box">
          <FooterLogo
            className="footer-react-logo"
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
