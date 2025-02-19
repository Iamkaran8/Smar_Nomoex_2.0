import { BuySell } from "./BuySell"
import { LatestTransaction } from "./LatestTransaction"
import { TopStories } from "../TopStories"
import { TotalBalence } from "./TotalBalence"
import { TrendingAssets } from "../TrendingAssets"
import { WatchLists } from "./WatchLists"
import { YourPortfolio } from "./YourPortfolio"
import { LayOut } from "../../Common/Layout/Layout"


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
    )
}


export const DashboardPage = () => {
    return (
        <>
            <LayOut dynamic={<CurrentPage />} />
        </>
    )
}