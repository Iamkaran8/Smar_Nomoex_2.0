import { useState } from "react";
import { Pagination } from "../Pagination";
import { useSelector } from "react-redux";
import { selectWatchListdata } from "../../../redux/slices/CryptoSlice";

export const WatchListCard = () => {

  const WatchList = useSelector(selectWatchListdata)
  const totalNumberOfPage = [...Array(Math.ceil(WatchList.length / 4)).keys()];
  const [currentPage, setCurrentPage] = useState<number>(0);
  const Start = currentPage * 4;
  const End = Start + 4;
  const prod = WatchList.slice(Start, End);

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-5  md:flex-row lg:flex-nowrap md:flex-wrap items-center">
        {prod.map((data) => (
          <div
            className="flex md:items-center items-center lg:items-start md:flex-row flex-col gap-1 md:flex-col border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20 lg:w-[25%] md:w-[47%] w-[80%]  p-5 lg:p-5 md:p-3 hover:bg-Soft_Gray_20 ease-in duration-300 "
            key={data.id}
          >
            <p className="text-[14px] text-Slate_Gray dark:text-Soft_White ">
              {data.title}
            </p>
            <img
              className="mt-3 h-[36px] w-[36px] mb-1"
              src={data.image}
              alt={data.name}
            />
            <div className="flex gap-2 items-center ">
              <h4 className="text-[16px] font-bold ">{data.name}</h4>
              <p className="text-[14px] text-Slate_Gray font-normal">
                {data.symbol}
              </p>
            </div>
            <p className="text-[14px] text-Green">{data.percentage}</p>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <Pagination
        totalNumberOfPage={totalNumberOfPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        justify="between"
      />
    </>
  );
};
