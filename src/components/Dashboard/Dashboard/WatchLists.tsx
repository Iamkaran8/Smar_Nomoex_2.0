import { WatchListCard } from "./WatchListCard";

export const WatchLists = () => {
  return (
    <>
      <div className="border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20">
        <div className="border-b-[1px] border-Soft_Gray p-5 dark:border-Soft_Gray_20">
          <h3 className="text-[16x]">Watchlist</h3>
        </div>
        <div className="p-5  ">
          <WatchListCard />
        </div>
      </div>
    </>
  );
};
