const RightBoxFirst = ({ isHover }) => {
  return (
    <div>
      <div>RightBoxFirst</div>
      <li style={{ color: isHover.first && "#FF0000" }}>first: {isHover.first ? "true" : "false"}</li>
      <li style={{ color: isHover.second && "#FF0000" }}>second: {isHover.second ? "true" : "false"}</li>
    </div>
  );
};

const RightBoxSecond = ({ isHover }) => {
  return (
    <div>
      <div>RightBoxSecond</div>
      <li style={{ color: isHover.first && "#FF0000" }}>first: {isHover.first ? "true" : "false"}</li>
      <li style={{ color: isHover.second && "#FF0000" }}>second: {isHover.second ? "true" : "false"}</li>
    </div>
  );
};

export { RightBoxFirst, RightBoxSecond };
