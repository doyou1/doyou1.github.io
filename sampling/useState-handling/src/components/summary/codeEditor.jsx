const CodeEditorFirst = ({ setIsHover }) => {
  return (
    <div>
      <div>CodeEditorFirst</div>
      <li
        onMouseOver={() => {
          setIsHover((prev) => {
            return {
                ...prev,
                summaryFirst: {
                    ...prev.summaryFirst,
                    first: true
                },
            }
          });
        }}
        onMouseOut={() => {
          setIsHover((prev) => {
            return {
                ...prev,
                summaryFirst: {
                    ...prev.summaryFirst,
                    first: false
                },
            }
          });
        }}
      >
        first(Hover Me!)
      </li>
      <li
        onMouseOver={() => {
          setIsHover((prev) => {
            return {
                ...prev,
                summaryFirst: {
                    ...prev.summaryFirst,
                    second: true
                },
            }
          });
        }}
        onMouseOut={() => {
          setIsHover((prev) => {
            return {
                ...prev,
                summaryFirst: {
                    ...prev.summaryFirst,
                    second: false
                },
            }
          });
        }}
      >
        second(Hover Me!)
      </li>
    </div>
  );
};

const CodeEditorSecond = ({ setIsHover }) => {
  return (
    <div>
      <div>CodeEditorSecond</div>
      <li
        onMouseOver={() => {
          setIsHover((prev) => {
            return {
                ...prev,
                summarySecond: {
                    ...prev.summarySecond,
                    first: true
                },
            }
          });
        }}
        onMouseOut={() => {
          setIsHover((prev) => {
            return {
                ...prev,
                summarySecond: {
                    ...prev.summarySecond,
                    first: false
                },
            }
          });
        }}
      >
        first(Hover Me!)
      </li>
      <li
        onMouseOver={() => {
          setIsHover((prev) => {
            return {
                ...prev,
                summarySecond: {
                    ...prev.summarySecond,
                    second: true
                },
            }
          });
        }}
        onMouseOut={() => {
          setIsHover((prev) => {
            return {
                ...prev,
                summarySecond: {
                    ...prev.summarySecond,
                    second: false
                },
            }
          });
        }}
      >
        second(Hover Me!)
      </li>
    </div>
  );
};

export { CodeEditorFirst, CodeEditorSecond };
