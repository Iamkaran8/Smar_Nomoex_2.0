
import { useEffect, useState } from "react";
// import { Pagination } from "./Pagination";
import Eth from "../../../assets/Dummy_images/Ethereum.svg"
import SOL from "../../../assets/Dummy_images/Solana.svg";
import ltc from "../../../assets/Dummy_images/Litecoin.svg";
import { Pagination } from "../Pagination";

export const WatchListCard = () => {
  const WatchList = [
    {
      id: 1,
      title: "Top gainer (24h)",
      name: "Ethereum",
      symbol: "ETH",
      image: Eth,
      percentage: "+1.53%",
    },
    {
      id: 2,
      title: "Highest vol (24h)",
      name: "Solana",
      symbol: "SOL",
      image: SOL,
      percentage: "+2.43%",
    },
    {
      id: 3,
      title: "New listing",
      name: "Litecoin",
      symbol: "LTC",
      image: ltc,
      percentage: "+12.53%",
    },
    {
      id: 4,
      title: "Highest vol (24h)",
      name: "Bitcoin",
      symbol: "BTC",
      image: Eth,
      percentage: "+12.53%",
    },
    {
      id: 5,
      title: "Highest vol (24h)",
      name: "Bitcoin",
      symbol: "BTC",
      image: SOL,
      percentage: "+12.53%",
    },
    {
      id: 6,
      title: "Highest vol (24h)",
      name: "Bitcoin",
      symbol: "BTC",
      image: ltc,
      percentage: "+12.53%",
    },
    {
      id: 7,
      title: "Highest vol (24h)",
      name: "Bitcoin",
      symbol: "BTC",
      image: SOL,
      percentage: "+12.53%",
    },
    {
        id: 8,
        title: "Top gainer (24h)",
        name: "Ethereum",
        symbol: "ETH",
        image: Eth,
        percentage: "+1.53%",
      },
      {
        id: 9,
        title: "Highest vol (24h)",
        name: "Solana",
        symbol: "SOL",
        image: SOL,
        percentage: "+2.43%",
      },
      {
        id: 10,
        title: "Top gainer (24h)",
        name: "Ethereum",
        symbol: "ETH",
        image: Eth,
        percentage: "+1.53%",
      },
      {
        id: 11,
        title: "Highest vol (24h)",
        name: "Solana",
        symbol: "SOL",
        image: SOL,
        percentage: "+2.43%",
      },
  ];

const totalNumberOfPage = [...Array(Math.ceil(WatchList.length / 4)).keys()];
const [currentPage, setCurrentPage] = useState<number>(0);
const Start = currentPage * 3 ;
const End  =  Start + 3;
const prod = WatchList.slice( Start , End);




  return (
    <>
      <div className="flex md:flex-row flex-col gap-5 items-center">
        {prod.map((data) => (
          <div
            className="ease-in duration-300 flex md:flex-row flex-col gap-1 md:flex-col border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20 lg:w-[33%] md:w-[33%] w-[80%]  p-5 lg:p-5 md:p-3 hover:bg-Soft_Gray_20"
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
      <Pagination  totalNumberOfPage={totalNumberOfPage}  currentPage={currentPage} setCurrentPage={setCurrentPage}  />
  
    </>
  );
};
