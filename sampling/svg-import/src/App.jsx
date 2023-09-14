import {ReactComponent as ReactIcon} from "@/assets/icons/react.svg";
import "@/App.css";

function App() {
  return (
    <>
      <ReactIcon style={{ color: 'red' }}/>
      <ReactIcon style={{ width: '100px', height: '100px', color: 'blue' }}/>
      <ReactIcon style={{ backgroundColor: 'black', color: 'white'}}/>
    </>
  )
}

export default App
