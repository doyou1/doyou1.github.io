import SpriteIcon from "@/assets/icons/sprite.svg";
import ReactIcon from "@/assets/icons/react.svg";

import { useState } from "react";
import { HuePicker } from 'react-color';
import "@/App.css";

function App() {
  const titles = ["<img>로 SVG 로딩하기", "SVG 스프라이트 - use를 사용하기", "다크모드"];

  const [spriteSize, setSpriteSize] = useState(32);
  const [spriteColor, setSpriteColor] = useState("#00D8FF");
  const [isDark, setIsDark] = useState(false);
  
  return (
    <>
      {/* <img>로 SVG 로딩하기 */}
      <h1>{ titles[0] }</h1>
      <img src={ReactIcon} loading="lazy" />

      {/* SVG 스프라이트 - use를 사용하기 */}
      <h1>{ titles[1] }</h1>
        {/* Edit Form */}
        <div>
          Size : <input type="number" value={spriteSize} onChange={(e) => setSpriteSize(Number(e.target.value))} />
        </div>
        <div>
          Color Picker(current: <span style={{color: spriteColor}}>{ spriteColor }</span>) : 
            <HuePicker 
              color={spriteColor}
              onChangeComplete={(color) => setSpriteColor(color.hex) }
            />
        </div>
      {/* !!! 중요 !!! */}
      <div>
        <svg width={spriteSize} height={spriteSize}  >
          <use href={`${SpriteIcon}#react`} width={spriteSize} height={spriteSize} style={{color: spriteColor}}/>
        </svg>
      </div>
      
      <h1>{ titles[2] }</h1>
      <div>
        <button type="button" onClick={() => setIsDark(!isDark)}>다크모드 on/off</button> status: { isDark ? "다크모드 ON" : "다크모드 OFF" }
      </div>
      <div>
        <svg className={"w-32 h-32 " + (isDark ? "dark" : "")}>
          <use href={`${SpriteIcon}#react`} className="w-32 h-32" />
        </svg>
      </div>
      
    </>
  )
}

export default App
