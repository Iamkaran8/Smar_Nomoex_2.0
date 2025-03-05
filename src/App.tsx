import { useDispatch, useSelector } from "react-redux";
import { Routing } from "./routes/Routing";
import { Dark } from "./redux/slices/ThemeSlice";
import {  FetchCoindata } from "./redux/apis/Coinmarket";
import { useEffect } from "react";
import { AppDispatch } from "./redux/store";
import { coindata } from "./redux/slices/CoinSlice";

function App() {
  const isDark = useSelector(Dark)
  const data = useSelector(coindata)
  console.log(data)
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchCoindata())
  }, [])

  return (
    <>
      <div className={isDark ? 'dark' : 'light'}>
        <Routing />
      </div>
    </>
  );
}

export default App;
