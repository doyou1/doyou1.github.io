import "@/styles/docSearch.css";
import { useState, useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { ReactComponent as SearchIcon } from "@/assets/nav/search.svg";
import { ReactComponent as LoadingIcon } from "@/assets/nav/loading.svg";
import { ReactComponent as CloseIcon } from "@/assets/nav/close.svg";
import { ReactComponent as HomeMenuIcon } from "@/assets/nav/home-menu.svg";
import { ReactComponent as ActionIcon } from "@/assets/nav/action.svg";
import { ReactComponent as AlgoliaIcon } from "@/assets/nav/algolia.svg";
import { ReactComponent as CommandSelectIcon } from "@/assets/nav/command-select.svg";
import { ReactComponent as CommandNavigateIcon } from "@/assets/nav/command-navigate.svg";
import { ReactComponent as CommandCloseIcon } from "@/assets/nav/command-close.svg";
import { ReactComponent as NoSearchIcon } from "@/assets/nav/no-search.svg";

import { isOpenDocSearchState } from "@/recoil/recoil_state";

export default function DocSearch() {
  const [inputValue, setInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [timer, setTimer] = useState(0);
  const [list, setList] = useState([]);

  const setIsOpenDocSearch = useSetRecoilState(isOpenDocSearchState);

  const closeDocSearch = () => {
    setIsOpenDocSearch(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);

    debounce(e.target.value);
  };

  // 디바운싱 - 마지막 호출만 적용
  const debounce = (value) => {
    // 이전 타이머 종료
    clearTimeout(timer);

    // 유효성검사 : 입력값 없을시 타이머 설정X
    if (value.length == 0) {
      // 에러처리 : 입력 중 입력값이 ''이 될 경우에도 로딩아이콘이 돌아가는 에러 해결
      if (isSearching) setIsSearching(false);
      return;
    }

    // 입력 중: 로딩아이콘 표시O
    if (!isSearching) setIsSearching(true);

    // 최신 타이머 설정
    const newTimer = setTimeout(() => {
      // 실제 api 처리 필요
      callApi(value);

      // 검색완료: 로딩아이콘 표시X
      setIsSearching(false);
    }, 1000);
    setTimer(newTimer);
  };

  const callApi = (value) => {
    console.log("call search api: ", value);
  };

  const handleReset = () => {
    setInputValue("");
  };

  const handleKeydown = useCallback((event) => {
    // ESC key
    if (event.keyCode === 27) closeDocSearch();
  }, []);

  useEffect(() => {
    // onMounted
    document.addEventListener("keydown", handleKeydown, false);
    // onUnMounted
    return () => document.removeEventListener("keydown", handleKeydown, false);
  }, []);

  return (
    <>
      <div
        role="combobox"
        aria-expanded="true"
        aria-haspopup="listbox"
        aria-labelledby="docsearch-label"
        className="max-[750px]:h-screen max-[750px]:absolute flex justify-center bg-[#343a46]/[.8] w-screen h-screen	left-0 top-0 fixed z-50	box-border"
        onClick={closeDocSearch}
        aria-owns={list.length != 0 ? "docsearch-list" : ""}
      > 
        <div
          className="max-[1024px]:max-w-full max-[1024px]:my-0 max-[1024px]:rounded-none  max-w-3xl w-full rounded-2xl	overflow-hidden	mx-0 my-4 flex justify-center flex-col relative bg-white dark:bg-[#23272f]"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="py-3 px-5 flex">
            <form className="h-10 rounded-full shadow-none text-[15px] text-[#5e687e] bg-[#ebecf0] items-center flex m-0 py-0 px-3 relative w-full" onSubmit={() => false}>
              <label
                className={`items-center justify-center ${isSearching ? "hidden" : "flex"}`}
              >
                <SearchIcon className="w-[15px] h-[15px] ml-1 mr-1 stroke-[1.6px]" style={{ color: "#99a1b3"}} />
              </label>
              <div
                className={`items-center justify-center ${!isSearching ? "hidden" : "flex"}`}
              >
                <LoadingIcon className="w-[15px] h-[15px] ml-1 mr-1" style={{ color: "#99a1b3"}}/>
              </div>
              <input
                className="cancel-button-none outline-offset-[-2px] pt-3 pb-3 ps-2 pe-0 text-[15px] leading-5 appearance-none bg-transparent border-0 flex-1 h-full outline-none pl-[8px] w-4/5"
                aria-autocomplete="both"
                aria-labelledby="docsearch-label"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                enterKeyHint="search"
                spellCheck="false"
                placeholder="Search docs"
                maxLength="64"
                type="search"
                onChange={handleChange}
              />
              <button
                className={`DocSearch-Reset ${
                  inputValue.length == 0 && "hidden"
                }`}
                type="reset"
                title="Clear the query"
                onClick={handleReset}
              >
                <CloseIcon />
              </button>
            </form>
            <button className="DocSearch-Cancel" onClick={closeDocSearch}>
              Cancel
            </button>
          </header>
          <div className="DocSearch-Dropdown">
            {list.length == 0 && inputValue.length == 0 && (
              <div className="DocSearch-StartScreen">
                <p className="DocSearch-Help">No recent searches</p>
              </div>
            )}
            {list.length == 0 && inputValue.length > 0 && !isSearching && (
              <div className="DocSearch-NoResults">
                <div className="DocSearch-Screen-Icon">
                  <NoSearchIcon/>
                </div>
                <p className="DocSearch-Title">
                  No results for &quot;<strong>{ inputValue }</strong>&quot;
                </p>
                <div className="DocSearch-NoResults-Prefill-List">
                  <p className="DocSearch-Help">Try searching for:</p>
                  <ul>
                    <li>
                      <button className="DocSearch-Prefill">React APIs</button>
                    </li>
                  </ul>
                </div>
                <p className="DocSearch-Help">
                  Believe this query should return results?{" "}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let us know
                  </a>
                  .
                </p>
              </div>
            )}
            {list.length > 0 && (
              <div className="DocSearch-Dropdown-Container">
              <section className="DocSearch-Hits">
                <div className="DocSearch-Hit-source">React APIs</div>
                <ul
                  role="listbox"
                  aria-labelledby="docsearch-label"
                  id="docsearch-list"
                >
                  <li
                    className="DocSearch-Hit"
                    id="docsearch-item-0"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="#">
                      <div className="DocSearch-Hit-Container">
                        <div className="DocSearch-Hit-icon">
                          <HomeMenuIcon />
                        </div>
                        <div className="DocSearch-Hit-content-wrapper">
                          <span className="DocSearch-Hit-title">
                            <mark>width</mark>: A string. Specifies the image{" "}
                            <mark>width</mark> for a type …
                          </span>
                          <span className="DocSearch-Hit-path">
                            &lt;input&gt;
                          </span>
                        </div>
                        <div className="DocSearch-Hit-action">
                          <svg width="20" height="20" viewBox="0 0 20 20">
                            <g
                              stroke="currentColor"
                              fill="none"
                              fillRule="evenodd"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                              <path d="M8 17l-6-6 6-6"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li
                    className="DocSearch-Hit"
                    id="docsearch-item-1"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="#">
                      <div className="DocSearch-Hit-Container">
                        <div className="DocSearch-Hit-icon">
                          <HomeMenuIcon />
                        </div>
                        <div className="DocSearch-Hit-content-wrapper">
                          <span className="DocSearch-Hit-title">
                            <mark>width</mark>
                          </span>
                          <span className="DocSearch-Hit-path">
                            Common components (e.g. &lt;div&gt;)
                          </span>
                        </div>
                        <div className="DocSearch-Hit-action">
                          <ActionIcon />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li
                    className="DocSearch-Hit"
                    id="docsearch-item-2"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="#">
                      <div className="DocSearch-Hit-Container">
                        <div className="DocSearch-Hit-icon">
                          <HomeMenuIcon />
                        </div>
                        <div className="DocSearch-Hit-content-wrapper">
                          <span className="DocSearch-Hit-title">
                            cols: A number. Specifies the default{" "}
                            <mark>width</mark> in average character …
                          </span>
                          <span className="DocSearch-Hit-path">
                            &lt;textarea&gt;
                          </span>
                        </div>
                        <div className="DocSearch-Hit-action">
                          <ActionIcon />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </section>
              <section className="DocSearch-Hits">
                <div className="DocSearch-Hit-source">Learn</div>
                <ul
                  role="listbox"
                  aria-labelledby="docsearch-label"
                  id="docsearch-list"
                >
                  <li
                    className="DocSearch-Hit"
                    id="docsearch-item-3"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="#">
                      <div className="DocSearch-Hit-Container">
                        <div className="DocSearch-Hit-icon">
                          <HomeMenuIcon />
                        </div>
                        <div className="DocSearch-Hit-content-wrapper">
                          <span className="DocSearch-Hit-title">
                            … example, className, src, alt, <mark>width</mark>,
                            and height are some …
                          </span>
                          <span className="DocSearch-Hit-path">
                            Passing Props to a Component
                          </span>
                        </div>
                        <div className="DocSearch-Hit-action">
                          <ActionIcon />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li
                    className="DocSearch-Hit"
                    id="docsearch-item-4"
                    role="option"
                    aria-selected="false"
                  >
                    <a href="#">
                      <div className="DocSearch-Hit-Container">
                        <div className="DocSearch-Hit-icon">
                          <HomeMenuIcon />
                        </div>
                        <div className="DocSearch-Hit-content-wrapper">
                          <span className="DocSearch-Hit-title">
                            … For example, instead of stroke-
                            <mark>width</mark> you use stroke
                            <mark>Width</mark> …
                          </span>
                          <span className="DocSearch-Hit-path">
                            Writing Markup with JSX
                          </span>
                        </div>
                        <div className="DocSearch-Hit-action">
                          <ActionIcon />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </section>
              <section className="DocSearch-HitsFooter"></section>
            </div>
            )}
          </div>
          <footer className="DocSearch-Footer">
            <div className="DocSearch-Logo">
              <a
                href="https://www.algolia.com/docsearch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="DocSearch-Label">Search by</span>
                <AlgoliaIcon />
              </a>
            </div>
            <ul className="DocSearch-Commands">
              <li>
                <span className="DocSearch-Commands-Key">
                  <CommandSelectIcon />
                </span>
                <span className="DocSearch-Label">to select</span>
              </li>
              <li>
                <span className="DocSearch-Commands-Key">
                  <svg width="15" height="15">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    >
                      <path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path>
                    </g>
                  </svg>
                </span>
                <span className="DocSearch-Commands-Key">
                  <CommandNavigateIcon />
                </span>
                <span className="DocSearch-Label">to navigate</span>
              </li>
              <li>
                <span className="DocSearch-Commands-Key">
                  <CommandCloseIcon />
                </span>
                <span className="DocSearch-Label">to close</span>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}
