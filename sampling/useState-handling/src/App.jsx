import { useState } from 'react'
import Summary from './components/summary'
import { CodeEditorFirst,CodeEditorSecond } from './components/summary/codeEditor'
import { RightBoxFirst, RightBoxSecond } from './components/summary/rightBox'
const App = () => {
  const [isHover, setIsHover] = useState({
    summaryFirst: {
      first: false,
      second: false,
    },
    summarySecond: {
      first: false,
      second: false,
    },
  })

  const style = {
    border: "solid 2px black",
  }

  return (
    <>
      <div style={style}>
        <Summary 
          title={"first summary"}
          codeEditor={() => <CodeEditorFirst setIsHover={setIsHover}/>}
          rightBox={() => <RightBoxFirst isHover={isHover.summaryFirst}/>}
        />
      </div>
      <hr/>
      <div style={style}>
        <Summary 
          title={"second summary"}
          codeEditor={() => <CodeEditorSecond setIsHover={setIsHover}/>}
          rightBox={() => <RightBoxSecond isHover={isHover.summarySecond}/>}
        />
      </div>
    </>
  )
}

export default App
