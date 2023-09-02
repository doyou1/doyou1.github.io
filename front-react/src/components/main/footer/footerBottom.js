import React from "react";
import metaLogo from "images/metaOpenSource-logo.svg";

const FooterBottom = () => (
  <div className="footer-bottom-wrap-padding">
    <footer>
      <div className="footer-bottom-container">
        <div className="footer-grid-box-1">
          <a className="footer-grid-text-sm">
            <div>
              <img src={metaLogo} />
            </div>
          </a>
          <div className="footer-bottom-text-xs">©2023</div>
        </div>
        <div className="footer-flex footer-flex-col">
          <div>
            <a className="footer-bottom-item-title footer-text-border-bottom">Learn React</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Quick Start</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Installation</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Describing the UI </a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Adding Interactivity</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Managing State</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Escape Hatches</a>
          </div>
        </div>
        <div className="footer-flex footer-flex-col">
          <div>
            <a className="footer-bottom-item-title footer-text-border-bottom">API Reference</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">React APIs</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">React DOM APIs</a>
          </div>
        </div>
        <div className="footer-grid-box-4 footer-flex footer-flex-col">
          <div>
            <a className="footer-bottom-item-title footer-text-border-bottom">Community</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Code of Conduct</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Meet the Team</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Docs Contributors</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Acknowledgements</a>
          </div>
        </div>
        <div className="footer-flex footer-flex-col">
          <div>
            <a className="footer-bottom-item-title footer-text-border-bottom">More</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Blog</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">React Native</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Privacy</a>
          </div>
          <div>
            <a className="footer-grid-text-sm footer-text-border-bottom">Terms</a>
          </div>
          <div className="footer-flex footer-bottom-logo">
            <a href="https://www.facebook.com/react">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.33em"
                height="1.33em"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/reactjs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.33em"
                height="1.33em"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/react">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.33em"
                height="1.33em"
                viewBox="0 -2 24 24"
                fill="currentColor"
              >
                <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default FooterBottom;
