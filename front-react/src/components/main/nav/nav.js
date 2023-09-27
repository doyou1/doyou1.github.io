import "@/styles/nav.css";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { ReactComponent as HomeLogo } from "@/assets/home-logo.svg";
import { ReactComponent as SearchIcon } from "@/assets/nav/search.svg";
import { ReactComponent as DarkIcon } from "@/assets/nav/dark.svg";
import { ReactComponent as DaynightIcon } from "@/assets/nav/daynight.svg";
import { ReactComponent as GithubIcon } from "@/assets/nav/github.svg";
import { ReactComponent as HomeMenuIcon } from "@/assets/nav/home-menu.svg";
import { ReactComponent as CloseIcon } from "@/assets/nav/close.svg";
import { isDarkState, isMacState, isOpenHomeMenuState, isOpenDocSearchState } from "@/recoil/recoil_state";

import { throttle } from 'lodash';
import { useMemo, useEffect, useState } from "react";

export default function Nav() {
  const isDark = useRecoilValue(isDarkState);
  const setIsDark = useSetRecoilState(isDarkState);
  const isMac = useRecoilValue(isMacState);

  const isOpenHomeMenu = useRecoilValue(isOpenHomeMenuState);
  const setIsOpenHomeMenu = useSetRecoilState(isOpenHomeMenuState);

  const setIsOpenDocSearch = useSetRecoilState(isOpenDocSearchState);

  const [isScrollOn, setIsScrollOn] = useState(false);

  const toggleIsDark = () => {
    setIsDark((current) => !current);
  };

  const toggleIsOpenHomeMenu = () => {
    setIsOpenHomeMenu((current) => !current);
  };

  const openDocSearch = () => {
    setIsOpenDocSearch(true);
  };


  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        const nextTabnavOn = window.scrollY > 0
        if (nextTabnavOn !== isScrollOn) setIsScrollOn(nextTabnavOn);
      }, 300),
      [isScrollOn]
    );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll]);

  const throttledResize = useMemo(
    () =>
      throttle(() => {
        const {innerWidth: width } = window;
        if(width > 1024) setIsOpenHomeMenu(false);
      }, 100),
      [isOpenHomeMenu]
    );

  useEffect(() => {
    window.addEventListener('resize', throttledResize);
    return () => {
      window.removeEventListener('resize', throttledResize);
    };
  }, [throttledResize]);

  useEffect(() => {
    document.body.style.overflow = isOpenHomeMenu ? "hidden" : "visible";
  }, [isOpenHomeMenu]);

  return (
    <div>
      <nav className={`${isOpenHomeMenu ? "dark:shadow-dark shadow-none" : ""} ${isScrollOn ? "dark:shadow-dark shadow-dark" : ""} duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full flex justify-between bg-[#FFFFFF] dark:bg-[#23272f] dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4 z-50`}>
        <div className="h-16 w-full gap-0 sm:gap-3 flex items-center justify-between">
          <div className="3xl:flex-1 flex flex-row">
            <button
              type="button"
              aria-label="Menu"
              className="active:scale-95 transition-transform flex lg:hidden w-12 h-12 rounded-full items-center justify-center hover:bg-hover-light-dark hover:dark:bg-hover-deep-dark outline-link"
              onClick={toggleIsOpenHomeMenu}
            >
              {!isOpenHomeMenu 
                ? <HomeMenuIcon 
                    alt="home menu" 
                    style={{ color: !isDark ? "#404756" : "#FFFFFF"}}
                  />
                : <CloseIcon 
                    alt="home menu close" 
                    style={{ color: "#087ea4"}}
                  />
              }
            </button>
            <div className="3xl:flex-1 flex align-center">
              <a
                className="active:scale-95 overflow-hidden transition-transform relative items-center text-primary dark:text-primary-dark p-1 whitespace-nowrap outline-[#087ea4] rounded-full 3xl:rounded-xl inline-flex text-lg font-normal gap-2"
                href="/"
              >
                <HomeLogo 
                  className="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
                  style={{ color: "#087ea4"}}
                />
                <span className="sr-only 3xl:not-sr-only">React</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-1 justify-center items-center w-full 3xl:w-auto 3xl:shrink-0 3xl:justify-center">
            <button
              type="button"
              className="flex 3xl:w-[56rem] 3xl:mx-0 relative ps-4 pe-1 py-1 h-10 bg-opacity-20 bg-[#99a1b3] dark:bg-opacity-20 dark:bg-[#78839b] outline-none focus:outline-[#087ea4] pointer items-center text-start w-full rounded-full align-middle text-base"
              style={{ color: "#99a1b3"}}
              onClick={openDocSearch}
            >
              <SearchIcon 
                className="me-3 align-middle text-gray-30 shrink-0 group-betterhover:hover:text-gray-70"
              />
              Search
              <span className="ms-auto hidden sm:flex item-center me-1">
                <kbd
                  className={`${isMac ? "inline-flex" : "hidden"} w-5 h-5 border border-transparent me-1 bg-[#FFFFFF] dark:bg-[#23272f] text-gray-30 align-middle p-0 justify-center items-center text-xs text-center rounded-md`}
                  data-platform="mac"
                >
                  ⌘
                </kbd>
                <kbd
                  className={`${isMac ? "hidden" : "inline-flex"} w-10 h-5 border border-transparent me-1 bg-[#FFFFFF] dark:bg-[#23272f] text-gray-30 align-middle p-0 justify-center items-center text-xs text-center rounded-md`}
                  data-platform="win"
                >
                  Ctrl
                </kbd>
                <kbd className="w-5 h-5 border border-transparent me-1 bg-[#FFFFFF] dark:bg-[#23272f] text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md">
                  K
                </kbd>
              </span>
            </button>
          </div>
          <div className="text-base justify-center items-center gap-1.5 flex 3xl:flex-1 flex-row 3xl:justify-end">
            <div 
              className="mx-2.5 gap-1.5 hidden lg:flex"
              style={{ color: !isDark ? "#414755" : "#FFFFFF"}}
              >
              <div className="flex flex-auto sm:flex-1">
                <a
                  className="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize hover:bg-hover-light-dark hover:dark:bg-hover-deep-dark"
                  href="#"
                >
                  Learn
                </a>
              </div>
              <div className="flex flex-auto sm:flex-1">
                <a
                  className="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize hover:bg-hover-light-dark hover:dark:bg-hover-deep-dark"
                  href="#"
                >
                  Reference
                </a>
              </div>
              <div className="flex flex-auto sm:flex-1">
                <a
                  className="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize hover:bg-hover-light-dark hover:dark:bg-hover-deep-dark"
                  href="#"
                >
                  Community
                </a>
              </div>
              <div className="flex flex-auto sm:flex-1">
                <a
                  className="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize hover:bg-hover-light-dark hover:dark:bg-hover-deep-dark"
                  href="#"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="flex w-full md:hidden"></div>
            <div className="flex items-center -space-x-2.5 xs:space-x-0">
              <div className="flex md:hidden">
                <button
                  aria-label="Search"
                  type="button"
                  className="active:scale-95 transition-transform flex md:hidden w-12 h-12 rounded-full items-center justify-center hover:bg-[#ebecf0] hover:dark:bg-[#404756] outline-link"
                >
                  <SearchIcon
                    className="align-middle w-5 h-5"
                    style={{ color: !isDark ? "#414755" : "#FFFFFF"}}
                  />
                </button>
              </div>
              <div className="flex dark:hidden">
                <button
                  type="button"
                  aria-label="Use Dark Mode"
                  className="active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-hover-light-dark hover:dark:bg-hover-deep-dark outline-link"
                  onClick={toggleIsDark}
                >
                  <DarkIcon 
                    style={{ color: "#414755" }}
                  />
                </button>
              </div>
              <div className="hidden dark:flex">
                <button
                  type="button"
                  aria-label="Use Light Mode"
                  className="active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-hover-light-dark hover:dark:bg-hover-deep-dark outline-link"
                  onClick={toggleIsDark}
                >
                  <DaynightIcon 
                    style={{ color: "#FFFFFF" }}
                  />
                </button>
              </div>
              <div className="flex">
                <a
                  className="active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-hover-light-dark hover:dark:bg-hover-deep-dark outline-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open on GitHub"
                  href="#"
                >
                  <GithubIcon
                    style={{ color: !isDark ? "#414755" : "#FFFFFF"}}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
