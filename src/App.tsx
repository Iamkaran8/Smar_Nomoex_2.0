import {useSelector } from "react-redux";
import { Routing } from "./routes/Routing";
import { RootState } from "./redux/store";

function App() {
  const isDark = useSelector((state:RootState) => state.theme.isDark)
  return (
    <>
      <div className={isDark ? 'dark' : 'light'}>
        <Routing />
      </div>
    </>
  );
}

export default App;
