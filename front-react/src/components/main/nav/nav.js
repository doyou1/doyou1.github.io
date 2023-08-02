import logo from "images/home-logo.svg";

export default function Nav() {
    return (
        <nav className="flex">
            {/* home logo */}
            <div className="flex items-center">
                <a className="" href="#">
                    <img className="w-10 h-10" src={logo} alt="home logo"/>
                </a>
            </div>

            {/* search bar */}
            <div className="flex justify-center items-center w-full">
                <button type="button" className="flex relative items-center w-full rounded-full bg-gray-30">
                    Search
                </button>
            </div>

            {/* buttons */}
                {/* Learn */}
                {/* Reference */}
                {/* Community */}
                {/* Blog */}
                {/* Day/Night icon */}
                {/* Github icon */}
            {/* buttons */}
        </nav>
    );
}