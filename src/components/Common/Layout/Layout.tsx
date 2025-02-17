import { LatestTransaction } from "../../Dashboard/LatestTransaction";
import { TopStories } from "../../Dashboard/TopStories";
import { TrendingAssets } from "../../Dashboard/TrendingAssets";
import { YourPortfolio } from "../../Dashboard/YourPortfolio";
import { HeaderNav } from "./HeaderNav";
import { SideNavbar } from "./SideNavbar";

export const LayOut = () => {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white flex">
        <div className="w-[20%] hidden md:hidden lg:block border-[0px] md:border-[1px] border-r-Soft_Gray  ">
          <SideNavbar />
        </div>
        <div className="w-[100%] md:w-[100%] lg:w-[80%] ">
          <HeaderNav />
          <div className="flex flex-col p-3 gap-3 md:flex-col lg:flex-row cont">
            <div className="w-[100%] md:w-[70%] lg:w-[50%]">
              <YourPortfolio />
            </div>
            <div className="w-[100%] md:w-[70%] lg:w-[50%]">
              <LatestTransaction />
            </div>
          </div>
          <div className="cont flex gap-3">
            <div className="lg:w-[70%]  md:-[90%]">
              <TopStories />
            </div>
            <div className="lg:w-[30%]">
              <TrendingAssets />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
