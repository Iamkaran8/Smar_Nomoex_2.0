import { LayOut } from "../components/Common/Layout/Layout";
import { BuySell } from "../components/Dashboard/Dashboard/BuySell";
import { LatestTransaction } from "../components/Dashboard/Dashboard/LatestTransaction";
import { TotalBalence } from "../components/Dashboard/Dashboard/TotalBalence";
import { WatchLists } from "../components/Dashboard/Dashboard/WatchLists";
import { YourPortfolio } from "../components/Dashboard/Dashboard/YourPortfolio";
import { TopStories } from "../components/Dashboard/TopStories";
import { TrendingAssets } from "../components/Dashboard/TrendingAssets";

const CurrentPage = () => {
  return (
    <>
      {/* Total Balance Section */}
      <div className="p-5">
        <TotalBalence />
      </div>

      {/* Watchlists and Buy/Sell */}
      <div className="flex flex-col md:flex-row p-5 gap-5">
        <div className="w-full md:w-[70%]">
          <WatchLists />
        </div>
        <div className="w-full md:w-[30%]">
          <BuySell />
        </div>
      </div>

      {/* Portfolio and Latest Transactions */}
      <div className="flex flex-col lg:flex-row gap-5 p-5">
        <div className="w-full md:w-[50%]">
          <YourPortfolio />
        </div>
        <div className="w-full md:w-[50%]">
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
    </>
  );
};

export const Dashboard = () => {
  return (
    <>
      <LayOut dynamic={<CurrentPage />} title="Dashboard"/>
    </>
  );
};
