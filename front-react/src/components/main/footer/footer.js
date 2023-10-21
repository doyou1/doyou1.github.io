import "@/styles/footer.css";
import { ReactComponent as FooterMetaLogo } from "@/assets/meta-open-source-logo.svg";
import { ReactComponent as FooterFacebookLogo } from "@/assets/footer/footer-facebook-logo.svg";
import { ReactComponent as FooterTwitterLogo } from "@/assets/footer/footer-twitter-logo.svg";
import { ReactComponent as FooterGithubLogo } from "@/assets/footer/footer-github-logo.svg";

export default function Footer() {
  return (
    <div className="footer-bottom-wrap-padding">
    <footer>
      <div className="footer-bottom-container">
        <div className="footer-grid-box-1">
          <a className="footer-grid-text-sm">
            <div>
              <FooterMetaLogo />
            </div>
          </a>
          <div className="footer-bottom-text-xs">©2023</div>
        </div>
        <div className="footer-flex footer-flex-col">
          <div>
            <a className="footer-bottom-item-title footer-text-border-bottom">
              Learn React
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Quick Start
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Installation
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Describing the UI
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Adding Interactivity
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Managing State
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Escape Hatches
            </a>
          </div>
        </div>
        <div className="footer-flex footer-flex-col">
          <div>
            <a className="footer-bottom-item-title footer-text-border-bottom">
              API Reference
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              React APIs
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              React DOM APIs
            </a>
          </div>
        </div>
        <div className="footer-grid-box-4 footer-flex footer-flex-col">
          <div>
            <a className="footer-bottom-item-title footer-text-border-bottom">
              Community
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Code of Conduct
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Meet the Team
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Docs Contributors
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Acknowledgements
            </a>
          </div>
        </div>
        <div className="footer-flex footer-flex-col">
          <div>
            <a className="footer-bottom-item-title footer-text-border-bottom">
              More
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Blog
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              React Native
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Privacy
            </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">
              Terms
            </a>
          </div>
          <div className="footer-flex footer-bottom-logo">
            <a href="https://www.facebook.com/react">
              <FooterFacebookLogo className="footer-bottom-logo-tag"/>
            </a>
            <a href="https://twitter.com/reactjs">
              <FooterTwitterLogo className="footer-bottom-logo-tag"/>
            </a>
            <a href="https://github.com/facebook/react">
              <FooterGithubLogo className="footer-bottom-logo-tag"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}
