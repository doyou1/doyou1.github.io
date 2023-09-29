import "@/styles/rightBox.css";

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
        {" "}
        {/* example.com/video.html   */}
        <div className="example-nav-container">
          <div className="example-nav-contantbox">
            <div className="example-nav-textbox">
              {/* svg */}
              <span className="text-gray-30">example.com/</span>
              videos.html
            </div>
          </div>
        </div>
        {/* rightBox main */}
        <div className="example-main-container"></div>
      </div>
      <div className="content-shadow-searchablebox"></div>
    </div>
  ),
};
