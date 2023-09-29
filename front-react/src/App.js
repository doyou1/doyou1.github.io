import Main from '@/components/main/main';
import { useRecoilValue } from "recoil";
import { isDarkState } from "@/recoil/recoil_state";


function App() {
  const isDark = useRecoilValue(isDarkState);

  return (
    <div className={ `App ${isDark ? 'dark' : ''}` }>
      <Main />
    </div>
  );
}

export default App;
