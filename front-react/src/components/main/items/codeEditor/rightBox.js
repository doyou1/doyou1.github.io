import React from "react";
import "styles/rightBox.css";
export const rightBox = {
  mainVideoBox: (
    <div className="content-container-video">
      <div className="content-main-video"></div>
      <div className="content-shadow-videobox"></div>
    </div>
  ),
  mainVideoListBox: (
    <div className="content-container-videolist">
      <div className="content-main-videolist"></div>
      <div className="content-shadow-videolistbox"></div>
    </div>
  ),
  searchableVideoListBox: (
    <div className="content-container-searchable">
      <div className="content-main-searchable">
        {/* example.com/video.html   */}
        <div className="example-nav-container">
          <div className="example-nav-contantbox">
            <div className="example-nav-textbox">
              {/* svg */}
              <span>123123</span>
            </div>
          </div>
        </div>
        {/* rightBox main */}
        <div></div>
      </div>
      <div className="content-shadow-searchablebox"></div>
    </div>
  ),
};
