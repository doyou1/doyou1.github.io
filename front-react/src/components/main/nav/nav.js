import logo from "images/home-logo.svg";
import search from "images/search.svg";
import dark from "images/dark.svg";
import daynight from "images/daynight.svg";
import githubDaynight from "images/github-daynight.svg";
import githubDark from "images/github-dark.svg";


import React, { useState } from 'react';



export default function Nav() {

    // Declare a new state variable, which we'll call "count"
    const [isDark, setIsDark] = useState(false);

    const toggleIsDark = () => {
        // 👇️ passed function to setState
        setIsDark(current => !current);
      };

    return (
        <nav className="flex w-full h-16 justify-between" >
            <div className="flex w-full h-16 justify-between items-center">
                {/* home logo */}
                <div className="flex flex-row justify-center items-center">
                    <a className="flex flex-row" href="#">
                        <img className="w-10 h-10" src={logo} alt="home logo"/>
                    </a>
                </div>

                {/* search bar */}
                <div className="flex flex-1 justify-center items-center w-full h-10 text-[#99a1b3] bg-[#99a1b3]/30 rounded-full shrink-0 ">
                    <button type="button" className="flex items-center w-full h-10 outline-none pointer text-left align-middle text-base">
                        <img className="w-4 h-4" src={search} alt="home logo"/>
                        Search
                    </button>
                    <span className="ml-auto item-center mr-1">
                        <kbd className="w-5 h-5 border border-transparent" data-platform="mac">⌘</kbd>
                        {/* <kbd className="w-10 h-5 border border-transparent" data-platform="win">Ctrl</kbd> */}
                        <kbd className="w-5 h-5 border border-transparent" >K</kbd>
                    </span>
                </div>

                {/* buttons */}
                <div className="justify-center items-center flex flex-row gap-1.5 mx-2.5">
                    <div className="mx-2 flex items-center">
                        {/* Learn */}
                        <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
                            <a href="#">
                                Learn
                            </a>
                        </div>
                        {/* Reference */}
                        <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5"> 
                            <a href="#">
                                Reference
                            </a>
                        </div>
                        {/* Community */}
                        <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
                            <a href="#">
                                Community
                            </a>
                        </div>
                        {/* Blog */}
                        <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
                            <a href="#">
                                Blog
                            </a>
                        </div>
                        {/* Day/Night icon */}
                        <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
                            <a href="#" onClick={toggleIsDark}>
                                {!isDark && <img className="w-12 h-12" src={daynight} alt="daynight" />}
                                {isDark && <img className="w-12 h-12" src={dark} alt="dark" />}
                            </a>
                        </div>
                        {/* Github icon */}
                        <div className="flex flex-auto text-gray-500 w-full font-medium py-1.5 px-1.5">
                            <a href="#">
                                {!isDark && <img className="w-12 h-12" src={githubDaynight} alt="github-daynight" />}
                                {isDark && <img className="w-12 h-12 bg-[#404756]" src={githubDark} alt="github-dark" />}
                            </a>
                        </div>
                    </div>
                </div>
                {/* buttons */}
            </div>
        </nav>
    );
}