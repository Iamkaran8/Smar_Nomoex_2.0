import { CoinConversion } from "./CoinConversion";
import { CoinExplorer } from "./CoinExplorer";
import { SearchBar } from "./SearchBar";

export const TopBar = () => {
  return (
    <>
      <div className="cont flex ">
        <div className="w-[50%] flex gap-3">
          <div className="w-[50%]">
            <CoinExplorer />
          </div>
          <div className="w-[50%] relative">
            <CoinConversion />
          </div>
        </div>
        <div className="w-[50%] flex justify-end">
          <SearchBar />
        </div>
      </div>
    </>
  );
};
