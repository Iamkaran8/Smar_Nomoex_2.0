import {useSelector } from "react-redux";
import { Routing } from "./routes/Routing";
import { Dark} from "./redux/slices/ThemeSlice";

function App() {
  const isDark = useSelector(Dark)
  return (
    <>
      <div className={isDark ? 'dark' : 'light'}>
        <Routing />
      </div>
    </>
  );
}

export default App;
