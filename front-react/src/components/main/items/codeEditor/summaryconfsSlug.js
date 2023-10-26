import "@/styles/codeEditor.css";
const SummaryConfsSlug = () => {
  return (
    <>
      <div className="transition-opacity mt-2.5 -space-x-2 flex flex-row w-full justify-center">
        <img
          className="h-8 w-8 border-2 shadow-md border-gray-70 object-cover rounded-full"
          // src="/images/home/conf2021/andrew.jpg"
          alt=""
        />
      </div>
      <div className="mt-1">
        <span className="inline-flex text-xs font-normal items-center text-primary-dark py-1 whitespace-nowrap outline-link px-1.5 rounded-lg">
          <svg
            width="100%"
            height="100%"
            viewBox="-10.5 -9.45 21 18.9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-xs me-1 w-4 h-4 text-link-dark"
          >
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
          React Conf
        </span>
      </div>
    </>
  );
};

export default SummaryConfsSlug;
