import logo from "@/assets/home-logo.svg";
import search from "@/assets/search.svg";
import dark from "@/assets/dark.svg";
import daynight from "@/assets/daynight.svg";
import menu from "@/assets/home-menu.svg";
import githubDaynight from "@/assets/github-daynight.svg";
import githubDark from "@/assets/github-dark.svg";
import "@/styles/nav.css";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkState } from "@/recoil/recoil_state";

export default function Nav() {
  const isDark = useRecoilValue(isDarkState);
  const setIsDark = useSetRecoilState(isDarkState);
  const isMac = window.navigator.platform.includes("Mac");

  const toggleIsDark = () => {
    // 👇️ passed function to setState
    setIsDark((current) => !current);
  };

  return (
    <nav
      className="flex w-full h-16 justify-between pl-4 pr-5 duration-300 bg-white dark:bg-[#404756]"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
    >
      <div className="flex w-full h-16 justify-between items-center ">
        {/* home logo */}
        <div className="flex flex-row justify-center items-center text-base pl-4 pr-1 py-1 h-10">
          <button
            type="button"
            className="active:scale-95 transition-transform flex lg:hidden w-12 h-12 rounded-full items-center justify-center outline-link"
          >
            <img className="w-10 h-10 mr-0" src={menu} alt="home menu" />
          </button>

          <a className="flex flex-row" href="#">
            <img className="w-10 h-10 mr-0" src={logo} alt="home logo" />
            <span className="sr-only 3xl:not-sr-only">React</span>
          </a>
        </div>

        {/* search bar */}
        <div className="searchbar hidden md:flex flex-1 ml-1 justify-center items-center h-10 text-[#99a1b3] w-full 3xl:w-auto 3xl:shrink-0 3xl:justify-center rounded-full pl-4 pr-1 py-1">
          <button
            type="button"
            className="flex items-center 3xl:w-[56rem] w-full h-10 outline-none pointer relative text-left align-middle text-base"
          >
            <img
              className="w-4 h-4 mr-3 shrink-0 align-middle"
              src={search}
              alt="home logo"
            />
            Search
            <span className="ml-auto item-center mr-1">
              {isMac && (
                <kbd
                  className="w-5 h-5 border border-transparent bg-white dark:bg-[#404756] dark:text-[#99a1b3] rounded-md inline-flex justify-center items-center mr-1 text-xs align-middle p-0"
                  data-platform="mac"
                >
                  ⌘
                </kbd>
              )}
              {!isMac && (
                <kbd
                  className="w-10 h-5 border border-transparent bg-white dark:bg-[#404756] dark:text-[#99a1b3] rounded-md inline-flex justify-center items-center mr-1 text-xs align-middle p-0"
                  data-platform="win"
                >
                  Ctrl
                </kbd>
              )}
              <kbd className="w-5 h-5 border border-transparent bg-white dark:bg-[#404756] dark:text-[#99a1b3] rounded-md inline-flex justify-center items-center mr-1 text-xs align-middle p-0">
                K
              </kbd>
            </span>
          </button>
        </div>

        {/* buttons */}
        <div className="justify-center items-center flex flex-row gap-1.5 mx-2.5 text-base ">
          <div className="mx-2 flex items-center">
            {/* Learn */}
            <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
              <a href="#" className="px-1.5 py-1.5 dark:text-[#ebecf0]">
                Learn
              </a>
            </div>
            {/* Reference */}
            <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
              <a href="#" className="px-1.5 py-1.5 dark:text-[#ebecf0]">
                Reference
              </a>
            </div>
            {/* Community */}
            <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
              <a href="#" className="px-1.5 py-1.5 dark:text-[#ebecf0]">
                Community
              </a>
            </div>
            {/* Blog */}
            <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
              <a href="#" className="px-1.5 py-1.5 dark:text-[#ebecf0]">
                Blog
              </a>
            </div>
            {/* Day/Night icon */}
            <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5 active:scale-95">
              <a
                href="#"
                onClick={toggleIsDark}
                className="w-12 h-12 flex items-center justify-center"
              >
                {!isDark && <img src={daynight} alt="daynight" />}
                {isDark && <img src={dark} alt="dark" />}
              </a>
            </div>
            {/* Github icon */}
            <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5 active:scale-95 ">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center"
              >
                {!isDark && (
                  <img
                    className=""
                    src={githubDaynight}
                    alt="github-daynight"
                  />
                )}
                {isDark && (
                  <img
                    className="bg-[#404756] rounded-full"
                    src={githubDark}
                    alt="github-dark"
                  />
                )}
              </a>
            </div>
          </div>
        </div>
        {/* buttons */}
      </div>
    </nav>
  );
}
