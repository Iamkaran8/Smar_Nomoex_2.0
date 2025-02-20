import { BuySell } from "./BuySell";
import { LatestTransaction } from "./LatestTransaction";
import { TopStories } from "../TopStories";
import { TotalBalence } from "./TotalBalence";
import { TrendingAssets } from "../TrendingAssets";
import { WatchLists } from "./WatchLists";
import { YourPortfolio } from "./YourPortfolio";
import { LayOut } from "../../Common/Layout/Layout";

const CurrentPage = () => {
  return (
    <div className="lg:cont mmd:cont p-0">
      {/* Total Balance Section */}
      <div className="p-5">
        <TotalBalence />
      </div>

      {/* Watchlists and Buy/Sell */}
      <div className="flex flex-col lg:flex-row md:flex-col p-5 gap-5 items-stretch max-h-full ">
        <div className="w-full lg:w-[70%] md:w-[100%]">
          <WatchLists />
        </div>
        <div className="w-full lg:w-[30%] md:w-[100%]">
          <BuySell />
        </div>
      </div>

      {/* Portfolio and Latest Transactions */}
      <div className="flex flex-col lg:flex-row  gap-5 p-5">
        <div className="w-full md:w-[100%] lg:w-[50%]">
          <YourPortfolio />
        </div>
        <div className="w-full md:w-[100%] lg:w-[50%]">
          <LatestTransaction />
        </div>
      </div>

      {/* Top Stories and Trending Assets */}
      <div className="flex flex-col lg:flex-row p-5 gap-5">
        <div className="w-full lg:w-[70%]">
          <TopStories />
        </div>
        <div className="w-full lg:w-[30%] mt-3 md:mt-0">
          <TrendingAssets />
        </div>
      </div>
    </div>
  );
};

export const DashboardPage = () => {
  return (
    <>
      <LayOut dynamic={<CurrentPage />} />
    </>
  );
};
