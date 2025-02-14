import {useDispatch, useSelector } from "react-redux";
import { Routing } from "./routes/Routing";
import { RootState } from "./redux/store";
import { toggleTheme } from "./redux/slices/ThemeSlice";




function App() {
  
  const isDark = useSelector((state:RootState) => state.theme.isDark)
  const dispatch = useDispatch()
  return (
    <>
      <div className={isDark ? 'dark' : 'light'}>
        <button onClick={()=>dispatch(toggleTheme())} className="p-5">theme</button>    
        <Routing />
      </div>
    </>
  );
}

export default App;
