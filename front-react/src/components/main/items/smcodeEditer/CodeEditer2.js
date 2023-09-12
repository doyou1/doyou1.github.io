import React from "react";
import "styles/codeEditer.css";

// CodeEditer 1
export const CodeEditer = {
  code: (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword">function </span>
          <span className="sp-syntax-definition">Video </span>
          <span className="sp-syntax-punctuation">{"({"} </span>
          <span className="sp-syntax-property">videos </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; return </span>
          <span className="sp-syntax-plain">(</span>
          <br></br>
        </div>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-tag">&nbsp; &nbsp;&nbsp;{"<div>"} </span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; {"<"}
          </span>
          <span className="sp-syntax-definition">Thumbnail </span>
          <span className="sp-syntax-property">video</span>
          <span className="sp-syntax-punctuation">{"={video}"}</span>
          <span className="sp-syntax-punctuation">{" />"}</span>
          <br></br>
        </div>
        {/* five */}
        {/* &gt; = > */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; {"<"}</span>
          <span className="sp-syntax-tag">a</span>
          <span className="sp-syntax-property"> href</span>
          <span className="sp-syntax-static">{"={video."}</span>
          <span className="sp-syntax-property">url</span>
          <span className="sp-syntax-string">{"}>"}</span>
          <br></br>
        </div>
        {/* six */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{"<"}
          </span>
          <span className="sp-syntax-tag">h3</span>
          <span className="sp-syntax-plain">{">"}</span>
          <span className="sp-syntax-static">{"{video."}</span>
          <span className="sp-syntax-property">title</span>
          <span className="sp-syntax-string">{"}</"}</span>
          <span className="sp-syntax-tag">h3</span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* seven */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{"<"}
          </span>
          <span className="sp-syntax-tag">p</span>
          <span className="sp-syntax-plain">{">"}</span>
          <span className="sp-syntax-static">{"{video."}</span>
          <span className="sp-syntax-property">description</span>
          <span className="sp-syntax-string">{"}</"}</span>
          <span className="sp-syntax-tag">p</span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* eight */}
        <div className="cm-line ">
          &nbsp;&nbsp; &nbsp; &nbsp;
          <span className="sp-syntax-punctuation">{"</"}</span>
          <span className="sp-syntax-tag">a</span>
          <span className="sp-syntax-punctuation">{">"}</span>
          <br></br>
        </div>
        {/* nine */}
        <div className="cm-line cm-line-nine">
          &nbsp;
          <span className="sp-syntax-punctuation"> &nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition">LikeButton</span>
          <span className="sp-syntax-property"> video</span>
          <span className="sp-syntax-punctuation">{"={video} />"}</span>
          <br></br>
        </div>
        {/* ten */}
        <div className="cm-line ">
          <span className="sp-syntax-tag">&nbsp; &nbsp;&nbsp;{"<div>"} </span>
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
  ),
};

// CodeEditer 2
export const CodeEditer2 = {
  code: (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword">function </span>
          <span className="sp-syntax-definition">VideoList </span>
          <span className="sp-syntax-punctuation">{"({"} </span>
          <span className="sp-syntax-property">videos</span>
          <span className="sp-syntax-punctuation">, </span>
          <span className="sp-syntax-property">emptyHeading </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; const </span>
          <span className="sp-syntax-plain">count</span> =
          <span className="sp-syntax-plain"> videos</span>.
          <span className="sp-syntax-property">length</span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; let </span>
          <span className="sp-syntax-plain">heading</span> =
          <span className="sp-syntax-plain"> emptyHeading</span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; if</span>
          <span className="sp-syntax-punctuation"> (</span>
          <span className="sp-syntax-plain">count {">"} </span>
          <span className="sp-syntax-static">0</span>
          <span className="sp-syntax-punctuation">)</span>
          <span className="sp-syntax-punctuation">{" {"}</span>
          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; &nbsp; const</span>
          <span className="sp-syntax-plain"> noun</span> =
          <span className="sp-syntax-plain"> count</span> &gt;
          <span className="sp-syntax-static"> 1</span> ?
          <span className="sp-syntax-string"> 'Videos'</span> :
          <span className="sp-syntax-string"> 'Video'</span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* six */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; heading</span> =
          <span className="sp-syntax-plain"> count</span> +
          <span className="sp-syntax-string"> ' '</span> +
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
          <span className="sp-syntax-keyword">&nbsp; return</span>
          <span className="sp-syntax-punctuation"> (</span>
          <br></br>
        </div>
        {/* nine */}
        <div className="cm-line cm-line-nine">
          <span className="sp-syntax-punctuation">&nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-tag">section</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <br></br>
        </div>
        {/* ten */}
        <div className="cm-line ten">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-tag">h2</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <span className="sp-syntax-punctuation">{"{"}</span>
          <span className="sp-syntax-plain">heading</span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <span className="sp-syntax-punctuation">&lt;/</span>
          <span className="sp-syntax-tag">h2</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <br></br>
        </div>
        {/* eleven */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; {"{"}
          </span>
          <span className="sp-syntax-plain">videos</span>.
          <span className="sp-syntax-property">map</span>
          <span className="sp-syntax-punctuation">(</span>
          <span className="sp-syntax-plain">video</span>
          <span className="sp-syntax-punctuation"> =&gt;</span>
          <br></br>
        </div>
        {/* twelve*/}
        <div className="cm-line twelve">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-definition">Video</span>
          <span className="sp-syntax-property"> key</span>=
          <span className="sp-syntax-punctuation">{"{"}</span>
          <span className="sp-syntax-plain">video</span>.
          <span className="sp-syntax-property">id</span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <span className="sp-syntax-property"> video</span>=
          <span className="sp-syntax-punctuation">{"{"}</span>
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
        <div className="cm-line fourteen">
          <span className="sp-syntax-punctuation"> &nbsp; &nbsp;&lt;/</span>
          <span className="sp-syntax-tag">section</span>
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
  ),
};

// CodeEditer 3
export const CodeEditer3 = {
  code: (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword">import </span>
          <span className="sp-syntax-punctuation">{"{ useState }"} </span>
          <span className="sp-syntax-keyword">from</span>
          <span className="sp-syntax-punctuation">{" 'react';"}</span>
          <br></br>
        </div>
        <br></br>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">function</span>
          <span className="sp-syntax-definition"> SearchableVideoList</span>
          <span className="sp-syntax-plain">{"({"}</span>
          <span className="sp-syntax-property"> video </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; const </span>
          <span className="sp-syntax-plain">
            {"[searchText, setSearchText] = "}
          </span>
          <span className="sp-syntax-definition">useState</span>
          <span className="sp-syntax-punctuation">('');</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; const</span>
          <span className="sp-syntax-punctuation"> foundVideos = </span>
          <span className="sp-syntax-definition">filterVideos</span>
          <span className="sp-syntax-static">(videos, searchText);</span>

          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; return</span>
          <span className="sp-syntax-plain"> (</span>
          <br></br>
        </div>
        {/* six */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; {"<>"}</span>
          <br></br>
        </div>
        {/* seven */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp;{" <"}
          </span>
          <span className="sp-syntax-definition">SearchInput</span>
          <br></br>
        </div>
        {/* eight */}
        <div className="cm-line ">
          <span className="sp-syntax-property">
            &nbsp; &nbsp; &nbsp; {"  value"}
          </span>
          <span className="sp-syntax-punctuation">{"={searchText}"}</span>
          <br></br>
        </div>
        {/* nine */}
        <div className="cm-line cm-line-nine">
          <span className="sp-syntax-property">
            &nbsp; &nbsp; &nbsp; {"  onChange"}
          </span>
          <span className="sp-syntax-punctuation">{"={newText => "}</span>
          <span className="sp-syntax-definition">setSearchText</span>
          <span className="sp-syntax-plain">{"(newText)} />"}</span>
          <br></br>
        </div>
        {/* ten */}
        <div className="cm-line ten">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-definition">VideoList</span>
          <br></br>
        </div>
        {/* eleven */}
        <div className="cm-line eleven ">
          <span className="sp-syntax-property">
            &nbsp; &nbsp; &nbsp; {"  videos"}
          </span>
          <span className="sp-syntax-plain">{"={foundVideos}"}</span>
          <br></br>
        </div>
        {/* twelve*/}
        <div className="cm-line twelve">
          <span className="sp-syntax-property">
            &nbsp; &nbsp; &nbsp; {"  emptyHeading"}
          </span>
          <span className="sp-syntax-string">{'={`No matches for "$'}</span>
          <span className="sp-syntax-plain">{"{searchText}"}</span>
          <span className="sp-syntax-string">{'"`} />'}</span>
          <br></br>
        </div>
        {/* Thirteen */}
        <div className="cm-line ">
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
  ),
};

// CodeEditer 4
export const CodeEditer4 = {
  code: (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword">import</span>
          <span className="sp-syntax-punctuation">{" { db } "}</span>
          <span className="sp-syntax-keyword">from</span>
          <span className="sp-syntax-punctuation">{" './database.js';"} </span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line">
          <span className="sp-syntax-keyword">import</span>
          <span className="sp-syntax-punctuation">{" { Suspense } "}</span>
          <span className="sp-syntax-keyword">from</span>
          <span className="sp-syntax-punctuation">{" 'react';"} </span>
          <br></br>
        </div>
        <br></br>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">async </span>
          <span className="sp-syntax-keyword">function</span>
          <span className="sp-syntax-definition"> ConferencePage</span>
          <span className="sp-syntax-plain">{"({ "}</span>
          <span className="sp-syntax-property">slug</span>
          <span className="sp-syntax-plain">{" }) {"}</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; const</span>
          <span className="sp-syntax-punctuation"> conf =</span>
          <span className="sp-syntax-keyword"> await</span>
          <span className="sp-syntax-plain"> db.</span>
          <span className="sp-syntax-property">Confs</span>.
          <span className="sp-syntax-property">find</span>
          <span className="sp-syntax-punctuation">{"({"}</span>
          <span className="sp-syntax-property">{" slug "}</span>
          <span className="sp-syntax-punctuation">{"})"}</span>
          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; return</span>
          <span className="sp-syntax-plain">{" ("}</span>
          <br></br>
        </div>
        {/* six */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition">ConferenceLayout </span>
          <span className="sp-syntax-property">conf</span>
          <span className="sp-syntax-plain">{"={conf}>"}</span>
          <br></br>
        </div>
        {/* seven */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition">Suspense </span>
          <span className="sp-syntax-property">fallback</span>
          <span className="sp-syntax-plain">{"={<"}</span>
          <span className="sp-syntax-definition">TalksLoading</span>
          <span className="sp-syntax-plain">{" />}>"}</span>
          <br></br>
        </div>
        {/* eight */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-definition">Talks </span>
          <span className="sp-syntax-property">confId</span>
          <span className="sp-syntax-plain">{"={conf."}</span>
          <span className="sp-syntax-property">id</span>
          <span className="sp-syntax-plain">{" />}"}</span>
          <br></br>
        </div>
        {/* nine */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; &lt;/</span>
          <span className="sp-syntax-definition">Suspense</span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* ten */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; &lt;/</span>
          <span className="sp-syntax-definition">ConferenceLayout</span>
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
          <span className="sp-syntax-keyword">async </span>
          <span className="sp-syntax-keyword">function</span>
          <span className="sp-syntax-definition"> Talks</span>
          <span className="sp-syntax-plain">{"({ "}</span>
          <span className="sp-syntax-property">slug</span>
          <span className="sp-syntax-plain">{" }) {"}</span>
          <br></br>
        </div>
        {/* fourteen */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; const</span>
          <span className="sp-syntax-punctuation"> talks =</span>
          <span className="sp-syntax-keyword"> await</span>
          <span className="sp-syntax-plain"> db.</span>
          <span className="sp-syntax-property">Talks</span>.
          <span className="sp-syntax-property">findAll</span>
          <span className="sp-syntax-punctuation">{"({"}</span>
          <span className="sp-syntax-property">{" confId "}</span>
          <span className="sp-syntax-punctuation">{"});"}</span>
          <br></br>
        </div>
        {/* fifteen */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword">&nbsp; const</span>
          <span className="sp-syntax-punctuation"> videos =</span>
          <span className="sp-syntax-plain"> talks.</span>
          <span className="sp-syntax-property">map</span>
          <span className="sp-syntax-plain">{"(talk => talk."}</span>
          <span className="sp-syntax-property">video</span>
          <span className="sp-syntax-punctuation">{");"}</span>
          <br></br>
        </div>
        {/* sixteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">{"}"}</span>
        </div>
      </code>
    </pre>
  ),
};
