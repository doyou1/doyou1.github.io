import "@/styles/codeEditor.css";
// CodeEditerVideo
const CodeEditorVideo = ({ isHover, setIsHover }) => {
  const handleMouseOver = (element) => {
    setIsHover(element);
  };

  const handleMouseOut = () => {
    setIsHover(null);
  };

  return (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword ">
            function{" "}
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Video{" "}
          </span>
          <span className="sp-syntax-punctuation">{"({"} </span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            video{" "}
          </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return{" "}
          </span>
          <span className="sp-syntax-plain">(</span>
          <br></br>
        </div>
        {/* three */}
        <div
          className={`cm-line ${
            isHover === "videoThree" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoThree")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-punctuation">
            {" "}
            &nbsp; &nbsp;&nbsp;{"<"}
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag" data-value="div">
            {"div"}
          </span>
          <span className="sp-syntax-punctuation">{">"}</span>
          <br></br>
        </div>
        {/* four */}
        <div
          className={`cm-line ${
            isHover === "videoFour" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoFour")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; {"<"}
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Thumbnail{" "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            video
          </span>
          <span className="sp-syntax-punctuation">{"={video}"}</span>
          <span className="sp-syntax-punctuation">
            {" />                     "}
          </span>
          <br></br>
        </div>
        {/* five */}
        <div
          className={`cm-line ${
            isHover === "videoFive" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoFive")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; {"<"}</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">a</span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            {" "}
            href
          </span>
          <span className="sp-syntax-plain">{"={video."}</span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">url</span>
          <span className="sp-syntax-plain">{"}>"}</span>
          <br></br>
        </div>

        {/* six */}
        <div
          className={`cm-line ${
            isHover === "videoSix" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoSix")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-plain">
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{"<"}
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">h3</span>
          <span className="sp-syntax-plain">{">"}</span>
          <span className="sp-syntax-plain">{"{video."}</span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            title
          </span>
          <span className="sp-syntax-plain">{"}</"}</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">h3</span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        <div
          className={`cm-line ${
            isHover === "videoSeven" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoSeven")}
          onMouseOut={() => handleMouseOut()}
        >
          {" "}
          {/* seven */}
          <span className="sp-syntax-plain">
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{"<"}
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">p</span>
          <span className="sp-syntax-plain">{">"}</span>
          <span className="sp-syntax-plain">{"{video."}</span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            description
          </span>
          <span className="sp-syntax-plain">{"}</"}</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">p</span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        <div
          className={`cm-line ${
            isHover === "videoEight" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoEight")}
          onMouseOut={() => handleMouseOut()}
        >
          {" "}
          {/* eight */}
          &nbsp;&nbsp; &nbsp; &nbsp;
          <span className="sp-syntax-punctuation">{"</"}</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">a</span>
          <span className="sp-syntax-punctuation">{">"}</span>
          <br></br>
        </div>
        {/* nine */}
        <div
          className={`cm-line ${
            isHover === "videoNine" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoNine")}
          onMouseOut={() => handleMouseOut()}
        >
          &nbsp;
          <span className="sp-syntax-punctuation"> &nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            LikeButton
          </span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            {" "}
            video
          </span>
          <span className="sp-syntax-punctuation">{"={video} />"}</span>
          <br></br>
        </div>
        {/* ten */}
        <div
          className={`cm-line ${
            isHover === "videoTen" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoTen")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-punctuation">
            {" "}
            &nbsp; &nbsp;&nbsp;{"</"}
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag" data-value="div">
            {"div"}
          </span>
          <span className="sp-syntax-punctuation">{">"}</span>
          <br></br>
        </div>
        {/* eleven */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">&nbsp; {");"}</span>

          <br></br>
        </div>
        {/* twelve*/}
        <div className="cm-line twelve">
          <span className="sp-syntax-punctuation">{"}"}</span>
          <br></br>
        </div>
      </code>
    </pre>
  );
};

// codeEditorVideoList
const CodeEditorVideoList = ({ isHover, setIsHover }) => {
  const handleMouseOver = (element) => {
    setIsHover(element);
  };

  const handleMouseOut = () => {
    setIsHover(null);
  };
  return (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            function{" "}
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            VideoList{" "}
          </span>
          <span className="sp-syntax-punctuation">{"({"} </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            videos
          </span>
          <span className="sp-syntax-punctuation">, </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            emptyHeading{" "}
          </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const{" "}
          </span>
          <span className="sp-syntax-plain">count</span> =
          <span className="sp-syntax-plain"> videos</span>.
          <span className="sp-syntax-property dark:sp-syntax-property">
            length
          </span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; let{" "}
          </span>
          <span className="sp-syntax-plain">heading</span> =
          <span className="sp-syntax-plain"> emptyHeading</span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; if
          </span>
          <span className="sp-syntax-punctuation"> (</span>
          <span className="sp-syntax-plain">count {">"} </span>
          <span className="sp-syntax-static dark:sp-syntax-static">0</span>
          <span className="sp-syntax-punctuation">)</span>
          <span className="sp-syntax-punctuation">{" {"}</span>
          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; &nbsp; const
          </span>
          <span className="sp-syntax-plain"> noun</span> =
          <span className="sp-syntax-plain"> count</span> &gt;
          <span className="sp-syntax-static dark:sp-syntax-static"> 1</span> ?
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" "}
            'Videos'
          </span>{" "}
          :
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" "}
            'Video'
          </span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* six */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; heading</span> =
          <span className="sp-syntax-plain"> count</span> +
          <span className="sp-syntax-string dark:sp-syntax-string"> ' '</span> +
          <span className="sp-syntax-plain"> noun</span>
          <span className="sp-syntax-punctuation">; </span>
          <br></br>
        </div>
        {/* seven */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">&nbsp;{" }"}</span>
          <br></br>
        </div>
        {/* eight */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return
          </span>
          <span className="sp-syntax-punctuation"> (</span>
          <br></br>
        </div>
        {/* nine */}
        <div
          className={`cm-line ${
            isHover === "videoListNine" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoListNine")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-punctuation">&nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">section</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <br></br>
        </div>
        {/* ten */}
        <div
          className={`cm-line ${
            isHover === "videoListTen" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoListTen")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">h2</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <span className="sp-syntax-punctuation">{"{"}</span>
          <span className="sp-syntax-plain">heading</span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <span className="sp-syntax-punctuation">&lt;/</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">h2</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <br></br>
        </div>
        {/* eleven */}
        <div className="cm-line">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; {"{"}
          </span>
          <span className="sp-syntax-plain">videos</span>.
          <span className="sp-syntax-property dark:sp-syntax-property">
            map
          </span>
          <span className="sp-syntax-punctuation">(</span>
          <span className="sp-syntax-plain">video</span>
          <span className="sp-syntax-punctuation"> =&gt;</span>
          <br></br>
        </div>
        {/* twelve*/}
        <div
          className={`cm-line ${
            isHover === "videoListTwelve" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoListTwelve")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Video
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            {" "}
            key
          </span>
          =<span className="sp-syntax-punctuation">{"{"}</span>
          <span className="sp-syntax-plain">video</span>.
          <span className="sp-syntax-property dark:sp-syntax-property">id</span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            {" "}
            video
          </span>
          =<span className="sp-syntax-punctuation">{"{"}</span>
          <span className="sp-syntax-plain">video</span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <span className="sp-syntax-punctuation"> /&gt;</span>
          <br></br>
        </div>
        {/* Thirteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp;&nbsp;)
          </span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <br></br>
        </div>
        {/* fourteen */}
        <div
          className={`cm-line ${
            isHover === "videoListFourTeen" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("videoListFourTeen")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-punctuation"> &nbsp; &nbsp;&lt;/</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">section</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <br></br>
        </div>
        {/* fifteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">&nbsp;&nbsp;)</span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* sixteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">{"}"}</span>
        </div>
      </code>
    </pre>
  );
};

// codeEditorSearchableVideoList
const CodeEditorSearchableVideoList = ({ isHover, setIsHover }) => {
  console.log(isHover);
  const handleMouseOver = (element) => {
    setIsHover(element);
  };

  const handleMouseOut = () => {
    setIsHover(null);
  };
  return (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            import{" "}
          </span>
          <span className="sp-syntax-punctuation">{"{ useState }"} </span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">from</span>
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" 'react'"}
          </span>
          <span className="sp-syntax-plain">{";"}</span>
          <br></br>
        </div>
        <br></br>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            function
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            SearchableVideoList
          </span>
          <span className="sp-syntax-plain">{"({"}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            videos
          </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-plain">
            {"[searchText, setSearchText] = "}
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            useState
          </span>
          <span className="sp-syntax-plain">(</span>
          <span className="sp-syntax-string dark:sp-syntax-string">''</span>
          <span className="sp-syntax-plain">);</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-punctuation"> foundVideos = </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            filterVideos
          </span>
          <span className="sp-syntax-plain">(videos, searchText);</span>

          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return
          </span>
          <span className="sp-syntax-plain"> (</span>
          <br></br>
        </div>
        {/* six */}
        <div
          className={`cm-line ${
            isHover === "searchableVideoSix" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("searchableVideoSix")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; {"<>"}</span>
          <br></br>
        </div>

        <div
          className={`cm-line ${
            isHover === "searchableVideoSeven" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("searchableVideoSeven")}
          onMouseOut={() => handleMouseOut()}
        >
          {/* seven */}
          <div className="cm-line ">
            <span className="sp-syntax-punctuation">
              &nbsp; &nbsp; &nbsp;{" <"}
            </span>
            <span className="sp-syntax-definition dark:sp-syntax-definition">
              SearchInput
            </span>
            <br></br>
          </div>
          {/* eight */}
          <div className="cm-line ">
            <span className="sp-syntax-property dark:sp-syntax-property">
              &nbsp; &nbsp; &nbsp; {"  value"}
            </span>
            <span className="sp-syntax-punctuation">{"={searchText}"}</span>
            <br></br>
          </div>
          {/* nine */}
          <div className="cm-line cm-line-nine">
            <span className="sp-syntax-property dark:sp-syntax-property">
              &nbsp; &nbsp; &nbsp; {"  onChange"}
            </span>
            <span className="sp-syntax-punctuation">{"={newText => "}</span>
            <span className="sp-syntax-definition dark:sp-syntax-definition">
              setSearchText
            </span>
            <span className="sp-syntax-plain">{"(newText)} />"}</span>
            <br></br>
          </div>
        </div>

        <div
          className={`cm-line ${
            isHover === "searchableVideoNine" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("searchableVideoNine")}
          onMouseOut={() => handleMouseOut()}
        >
          {/* ten */}
          <div className="cm-line ten">
            <span className="sp-syntax-punctuation">
              &nbsp; &nbsp; &nbsp; &lt;
            </span>
            <span className="sp-syntax-definition dark:sp-syntax-definition">
              VideoList
            </span>
            <br></br>
          </div>
          {/* eleven */}
          <div className="cm-line eleven ">
            <span className="sp-syntax-property dark:sp-syntax-property">
              &nbsp; &nbsp; &nbsp; {"  videos"}
            </span>
            <span className="sp-syntax-plain">{"={foundVideos}"}</span>
            <br></br>
          </div>
          {/* twelve*/}
          <div className="cm-line twelve">
            <span className="sp-syntax-property dark:sp-syntax-property">
              &nbsp; &nbsp; &nbsp; {"  emptyHeading"}
            </span>
            <span className="sp-syntax-plain">{"={"}</span>
            <span className="sp-syntax-string dark:sp-syntax-string">
              {'`No matches for "'}
            </span>
            <span className="sp-syntax-plain">{"${searchText}"}</span>
            <span className="sp-syntax-string dark:sp-syntax-string">
              {'"`'}
            </span>
            <span className="sp-syntax-plain">{"} />"}</span>
            <br></br>
          </div>
        </div>
        {/* Thirteen */}
        <div
          className={`cm-line ${
            isHover === "searchableVideoThirTeen"
              ? "hover dark:bg-opacity-10"
              : ""
          }`}
          onMouseOver={() => handleMouseOver("searchableVideoThirTeen")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-punctuation">&nbsp; &nbsp; {"</>"}</span>
          <br></br>
        </div>
        {/* fourteen */}
        <div className="cm-line fourteen">
          <span className="sp-syntax-punctuation"> &nbsp;{");"}</span>

          <br></br>
        </div>

        {/* sixteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">{"}"}</span>
        </div>
      </code>
    </pre>
  );
};

// codeEditerConferencePage
const CodeEditorConferencePage = ({ isHover, setIsHover }) => {
  const handleMouseOver = (element) => {
    setIsHover(element);
  };

  const handleMouseOut = () => {
    setIsHover(null);
  };
  return (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            import
          </span>
          <span className="sp-syntax-punctuation">{" { db } "}</span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">from</span>
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" './database.js'"}
          </span>
          <span className="sp-syntax-plain">{";"} </span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            import
          </span>
          <span className="sp-syntax-punctuation">{" { Suspense } "}</span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">from</span>
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" 'react'"}
          </span>
          <span className="sp-syntax-plain">{";"} </span>
          <br></br>
        </div>
        <br></br>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            async{" "}
          </span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            function
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            {" "}
            ConferencePage
          </span>
          <span className="sp-syntax-plain">{"({ "}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            slug
          </span>
          <span className="sp-syntax-plain">{" }) {"}</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-punctuation"> conf =</span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            {" "}
            await
          </span>
          <span className="sp-syntax-plain"> db.</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            Confs
          </span>
          .
          <span className="sp-syntax-property dark:sp-syntax-property">
            find
          </span>
          <span className="sp-syntax-punctuation">{"({"}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            {" slug "}
          </span>
          <span className="sp-syntax-punctuation">{"};"}</span>
          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return
          </span>
          <span className="sp-syntax-plain">{" ("}</span>
          <br></br>
        </div>
        {/* six */}
        <div
          className={`cm-line ${
            isHover === "ConferencePageSix" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("ConferencePageSix")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            ConferenceLayout{" "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            conf
          </span>
          <span className="sp-syntax-plain">{"={conf}>"}</span>
          <br></br>
        </div>
        {/* seven */}
        <div
          className={`cm-line ${
            isHover === "ConferencePageSeven" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("ConferencePageSeven")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Suspense{" "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            fallback
          </span>
          <span className="sp-syntax-plain">{"={<"}</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            TalksLoading
          </span>
          <span className="sp-syntax-plain">{" />}>"}</span>
          <br></br>
        </div>
        {/* eight */}
        <div
          className={`cm-line ${
            isHover === "ConferencePageEight" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("ConferencePageEight")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-plain">
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Talks{" "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            confId
          </span>
          <span className="sp-syntax-plain">{"={conf."}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">id</span>
          <span className="sp-syntax-plain">{" />}"}</span>
          <br></br>
        </div>
        {/* nine */}
        <div
          className={`cm-line ${
            isHover === "ConferencePageNine" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("ConferencePageNine")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; &lt;/</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Suspense
          </span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* ten */}
        <div
          className={`cm-line ${
            isHover === "ConferencePageTen" ? "hover dark:bg-opacity-10" : ""
          }`}
          onMouseOver={() => handleMouseOver("ConferencePageTen")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &lt;/</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            ConferenceLayout
          </span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* eleven */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">&nbsp; {");"}</span>
          <br></br>
        </div>
        {/* twelve*/}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">{"}"}</span>
          <br></br>
        </div>
        <br></br>
        {/* Thirteen */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            async{" "}
          </span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            function
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            {" "}
            Talks
          </span>
          <span className="sp-syntax-plain">{"({ "}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            slug
          </span>
          <span className="sp-syntax-plain">{" }) {"}</span>
          <br></br>
        </div>
        {/* fourteen */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-punctuation"> talks =</span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            {" "}
            await
          </span>
          <span className="sp-syntax-plain"> db.</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            Talks
          </span>
          .
          <span className="sp-syntax-property dark:sp-syntax-property">
            findAll
          </span>
          <span className="sp-syntax-punctuation">{"({"}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            {" slug "}
          </span>
          <span className="sp-syntax-punctuation">{"});"}</span>
          <br></br>
        </div>
        {/* fifteen */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-punctuation"> videos =</span>
          <span className="sp-syntax-plain"> talks.</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            map
          </span>
          <span className="sp-syntax-plain">{"(talk => talk."}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            video
          </span>
          <span className="sp-syntax-punctuation">{");"}</span>
          <br></br>
        </div>
        {/* sixteen */}
        <div
          className={`cm-line ${
            isHover === "ConferencePageSixTeen"
              ? "hover dark:bg-opacity-10"
              : ""
          }`}
          onMouseOver={() => handleMouseOver("ConferencePageSixTeen")}
          onMouseOut={() => handleMouseOut()}
        >
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return
          </span>
          <span className="sp-syntax-punctuation"> &lt;</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            {"SearchableVideoList "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            videos
          </span>
          <span className="sp-syntax-plain">{"={videos} />;"}</span>
          <br></br>
        </div>
        {/* sixteen */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">{"}"}</span>

          <br></br>
        </div>
      </code>
    </pre>
  );
};

export {
  CodeEditorVideo,
  CodeEditorVideoList,
  CodeEditorSearchableVideoList,
  CodeEditorConferencePage,
};
