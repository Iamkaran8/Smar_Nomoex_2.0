import { BuySell } from "../../Dashboard/BuySell";
import { LatestTransaction } from "../../Dashboard/LatestTransaction";
import { TopStories } from "../../Dashboard/TopStories";
import { TotalBalence } from "../../Dashboard/TotalBalence";
import { TrendingAssets } from "../../Dashboard/TrendingAssets";
import { WatchLists } from "../../Dashboard/WatchLists";
import { YourPortfolio } from "../../Dashboard/YourPortfolio";
import { CopyRight } from "../CopyRight";
import { HeaderNav } from "./HeaderNav";
import { SideNavbar } from "./SideNavbar";

export const LayOut = () => {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white flex">
        <div className="w-[20%] hidden md:block md:w-[25%] lg:block border-r-[1px] border-r-Soft_Gray  dark:border-Soft_Gray_20">
          <SideNavbar />
        </div>
        <div className="w-[100%] md:w-[75%] lg:w-[80%] ">
          <HeaderNav />
          <div className=" p-5 gap-3 cont">
            <TotalBalence/>
          </div>
          <div className=" p-5 gap-3 cont flex">
            <div className="w-[70%]">
            <WatchLists/>
            </div>
            <div className="w-[30%]">
            <BuySell/>
            </div>
          </div>
          <div className="flex flex-col p-3 gap-3 md:flex-col lg:flex-row cont">
            <div className="w-[100%] md:w-[100%] lg:w-[50%]">
              <YourPortfolio />
            </div>
            <div className="w-[100%] md:w-[100%] lg:w-[50%]">
              <LatestTransaction />
            </div>
          </div>
          <div className="cont flex flex-col  md:flex-row lg:flex-row gap-3">
            <div className="lg:w-[70%]  md:-[90%]">
              <TopStories />
            </div>
            <div className="lg:w-[30%] mt-3 md:mt-0">
              <TrendingAssets />
            </div>
          </div>
          <div className="mt-3">
          <CopyRight/>
          </div>
        </div>

      </div>
    </>
  );
};
