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
import { ReactComponent as CommandNavigateUpIcon } from "@/assets/nav/command-navigate-up.svg";
import { ReactComponent as CommandNavigateDownIcon } from "@/assets/nav/command-navigate-down.svg";
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
        className="dark:text-[#f6f7f9] max-[750px]:h-screen max-[750px]:absolute flex justify-center bg-[#343a46]/[.8] w-screen h-screen	left-0 top-0 fixed z-50	box-border"
        onClick={closeDocSearch}
        aria-owns={list.length != 0 ? "docsearch-list" : ""}
      > 
        <div
          className="max-[1024px]:max-w-full max-[1024px]:my-0 max-[1024px]:rounded-none  max-w-3xl w-full rounded-2xl	overflow-hidden	mx-0 my-4 flex justify-center flex-col relative bg-white dark:bg-[#23272f]"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="py-3 px-5 flex">
            <form className="dark:bg-[#343a46] h-10 rounded-full shadow-none text-[15px] text-[#5e687e] bg-[#ebecf0] items-center flex m-0 py-0 px-3 relative w-full" onSubmit={() => false}>
              <label
                className={`items-center justify-center ${isSearching ? "hidden" : "flex"}`}
              >
                <SearchIcon className="w-[15px] h-[15px] ml-1 mr-1 stroke-[1.6px]" style={{ color: "#99a1b3" }} />
              </label>
              <div
                className={`items-center justify-center ${!isSearching ? "hidden" : "flex"}`}
              >
                <LoadingIcon className="w-[15px] h-[15px] ml-1 mr-1" style={{ color: "#99a1b3" }}/>
              </div>
              <input
                className="dark:text-[#f6f7f9] cancel-button-none outline-offset-[-2px] pt-3 pb-3 ps-2 pe-0 text-[15px] leading-5 appearance-none bg-transparent border-0 flex-1 h-full outline-none pl-[8px] w-4/5"
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
                autoFocus="true"
                onChange={handleChange}
              />
              <button
                className={`group animate-[fade-in_.1s_ease-in_forwards] p-[2px] bg-transparent bg-none ${
                  inputValue.length == 0 && "hidden"
                }`}
                type="reset"
                title="Clear the query"
                onClick={handleReset}
              >
                <CloseIcon className="bg-transparent block text-[#99a1b3] group-hover:text-[#087ea4] dark:text-inherit dark:group-hover:text-[#149eca]" />
              </button>
            </form>
            <button className="inline-block lg:hidden ps-5 ms-0 text-[15px] text-[#087ea4] font-normal	 bg-transparent bg-none" onClick={closeDocSearch}>
              Cancel
            </button>
          </header>
          <div className="px-0 h-full max-h-full min-h-[12px]" style={{overflowY: "overlay"}} >
            {list.length == 0 && inputValue.length == 0 && (
              <div className="text-[0.9em] my-0 mx-auto py-9 px-0 text-center w-4/5">
                <p className="text-center mt-4 text-[0.9rem] m-0 select-none text-[#969faf]">No recent searches</p>
              </div>
            )}
            {list.length == 0 && inputValue.length > 0 && !isSearching && (
              <div className="text-[0.9em] my-0 mx-auto py-9 px-0 text-center w-4/5">
                <div className="flex justify-center text-[#969faf] pb-3">
                  <NoSearchIcon/>
                </div>
                <p className="text-[1.2em]">
                  No results for &quot;<strong>{ inputValue }</strong>&quot;
                </p>
                <div className="inline-block pb-6 text-left">
                  <p className="text-[#969faf] text-center mt-4 text-[0.9em] select-none">Try searching for:</p>
                  <ul className="me-5 inline-block pt-2">
                    <li className="list-inside list-»">
                      <button className="hover:outline-none hover:underline appearance-none bg-none border-0  rounded-2xl text-[#087ea4] inline-block text-[1em] font-bold p-0">React APIs</button>
                    </li>
                  </ul>
                </div>
                <p className="text-center mt-4 text-[0.9em] select-none text-[#969faf]">
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

            {/* json api server 작업 이후 추가 작업 필요 */}
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
          <footer className="dark:bg-[#23272f] bg-transparent flex-col-reverse items-start h-auto pb-2 pl-5 pr-5 shadow-black bg-white rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg flex shrink-0 justify-between relative select-none w-full z-50">
            <div className="pt-4 pb-2">
              <a
                className="flex"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[11px] text-[#969faf] leading-[1.6em]">Search by</span>
                <AlgoliaIcon className="ms-2 me-0 text-[#5468ff] ml-2"/>
              </a>
            </div>
            <ul className="max-[1024px]:hidden  w-full justify-between border-t-[1px] border-[#ebecf0] pt-4 text-[#969faf] flex list-none m-0">
              <li className="items-center flex mr-[0.8em]">
                <span className="me-[0.4rem] ms-0 bg-[#ebecf0] text-[#23272f]">
                  <CommandSelectIcon />
                </span>
                <span className="text-[11px] text-[#969faf] leading-[1.6em]">to select</span>
              </li>
              <li className="items-center flex mr-[0.8em]">
                <span className="me-[0.4rem] ms-0 bg-[#ebecf0] text-[#23272f]">
                  <CommandNavigateDownIcon />
                </span>
                <span className="me-[0.4rem] ms-0 bg-[#ebecf0] text-[#23272f]">
                  <CommandNavigateUpIcon />
                </span>
                <span className="text-[11px] text-[#969faf] leading-[1.6em]">to navigate</span>
              </li>
              <li className="items-center flex">
                <span className="me-[0.4rem] ms-0 bg-[#ebecf0] text-[#23272f]">
                  <CommandCloseIcon />
                </span>
                <span className="text-[11px] text-[#969faf] leading-[1.6em]">to close</span>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}
