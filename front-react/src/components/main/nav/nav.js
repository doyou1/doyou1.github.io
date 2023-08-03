import logo from "images/home-logo.svg";
import search from "images/search.svg";

export default function Nav() {
    return (
        <nav >
            <div className="flex w-fill h-16 justify-between">
                {/* home logo */}
                <div className="flex items-center">
                    <a className="flex flex-row" href="#">
                        <img className="w-10 h-10" src={logo} alt="home logo"/>
                    </a>
                </div>

                {/* search bar */}
                <div className="flex justify-center items-center w-[56rem] text-[#99a1b3] bg-[#99a1b3]/30 rounded-full  shrink-0">
                    <button type="button" className="flex relative items-center w-full h-10 outline-none pointer text-left align-middle text-base">
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
                    <div className="mx-2 flex">
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
                    </div>
                </div>
                    {/* Day/Night icon */}
                    {/* Github icon */}
                {/* buttons */}
            </div>
        </nav>
    );
}