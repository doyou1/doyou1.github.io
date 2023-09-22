import { ReactComponent as HomeLogo } from "@/assets/home-logo.svg";
import { ReactComponent as SearchIcon } from "@/assets/nav/search.svg";
import { ReactComponent as SearchIcon32 } from "@/assets/nav/search-32.svg";
import { ReactComponent as DarkIcon } from "@/assets/nav/dark.svg";
import { ReactComponent as DaynightIcon } from "@/assets/nav/daynight.svg";
import { ReactComponent as GithubIcon } from "@/assets/nav/github.svg";
import { ReactComponent as HomeMenuIcon } from "@/assets/nav/home-menu.svg";
import { ReactComponent as CloseIcon } from "@/assets/nav/close.svg";
import "@/styles/nav.css";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkState } from "@/recoil/recoil_state";
import { useState } from "react";

export default function Nav() {
  const isDark = useRecoilValue(isDarkState);
  const setIsDark = useSetRecoilState(isDarkState);
  const isMac = window.navigator.platform.includes("Mac");
  // webbrowser devmode
  // const isMac = window.navigator.userAgentData.platform.toLowerCase().includes("mac");

  const [isOpenHomeMenu, setIsOpenHomeMenu] = useState(false);

  const toggleIsDark = () => {
    // 👇️ passed function to setState
    setIsDark((current) => !current);
  };

  const toggleIsOpenHomeMenu = () => {
    // 👇️ passed function to setState
    setIsOpenHomeMenu((current) => !current);
  };

  return (
    <>
      <nav
        className="flex w-full h-16 justify-between duration-300 pl-2 bg-white gap-3 sm:gap-0 dark:bg-[#404756]"
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
      >
        <div className="flex w-full h-16 justify-between items-center">
          {/* home logo */}
          <div className="flex flex-row justify-center items-center text-base pl-1 pr-1 py-1 h-10">
            <button
              type="button"
              className="active:scale-95 rounded-full transition-transform flex lg:hidden w-12 h-12 items-center justify-center outline-link"
              onClick={toggleIsOpenHomeMenu}
            >
              {!isOpenHomeMenu 
                ? <HomeMenuIcon 
                    className="mr-0 rounded-full" 
                    alt="home menu" 
                    style={{ color: !isDark ? "#404756" : "#FFFFFF"}}
                  />
                : <CloseIcon 
                    className="mr-0 rounded-full" 
                    alt="home menu close" 
                  />
              }
            </button>
            <a className="flex flex-row" href="#">
              <HomeLogo 
                className="w-10 h-10 mr-0" 
              />
              <span className="sr-only 3xl:not-sr-only">React</span>
            </a>
          </div>

          {/* search bar */}
          <div className="searchbar hidden md:flex flex-1 ml-1 justify-center items-center h-10 text-[#99a1b3] w-full 3xl:w-auto 3xl:shrink-0 3xl:justify-center rounded-full pl-4 pr-1 py-1">
            <button
              type="button"
              className="items-center 3xl:w-[56rem] w-full h-10 outline-none pointer relative text-left align-middle text-base hidden md:flex"
            >
              <SearchIcon
                className="w-4 h-4 mr-3 shrink-0 align-middle"
                alt="search"
              />
              Search
              <span className="ml-auto item-center mr-1">
                  <kbd
                    className={`${isMac ? "w-5" : "w-10"} h-5 border border-transparent bg-white dark:bg-[#404756] dark:text-[#99a1b3] rounded-md inline-flex justify-center items-center mr-1 text-xs align-middle p-0`}
                    data-platform={isMac ? "mac" : "win"}
                  >
                    {isMac ? "⌘" : "Ctrl"}
                  </kbd>
                <kbd className="w-5 h-5 border border-transparent bg-white dark:bg-[#404756] dark:text-[#99a1b3] rounded-md inline-flex justify-center items-center mr-1 text-xs align-middle p-0">
                  K
                </kbd>
              </span>
            </button>
          </div>

          {/* buttons */}
          <div className="justify-center items-center flex flex-row gap-1.5 mx-2.5 text-base">
            <div className="mx-2 items-center hidden lg:flex">
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
            </div>
            <div className="mx-2 items-center flex">
              <div className="flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5 active:scale-95 flex md:hidden">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <SearchIcon32
                    className="align-middle w-5 h-5"
                    alt="search"
                    style={{ color: !isDark ? "#404756" : "#FFFFFF"}}
                  />
                </a>
              </div>
              {/* Day/Night icon */}
              <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5 active:scale-95">
                <a
                  href="#"
                  onClick={toggleIsDark}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  {!isDark ? <DaynightIcon alt="daynight" /> : <DarkIcon alt="dark" />}
                </a>
              </div>
              {/* Github icon */}
              <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5 active:scale-95 ">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <GithubIcon
                    className={`rounded-full ${!isDark & "bg-[#404756]"}`}
                    alt="github"
                    style={{ color: !isDark ? "#404756" : "#FFFFFF"}}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* buttons */}
        </div>
      </nav>
      {isOpenHomeMenu && 
          <div 
            className="absolute w-full h-full bg-black"
          >
            Hello World
          </div>
        }
    </>
    
  );
}