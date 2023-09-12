import React from "react";
import "styles/summary.css";

function TextBox({ children }) {
  /*React에서 children은 컴포넌트 내에 포함된 모든 자식 요소를 나타내는 특별한 프로퍼티이다 */
  return <p className="text-box-p">{children}</p>;
}

export default TextBox;
