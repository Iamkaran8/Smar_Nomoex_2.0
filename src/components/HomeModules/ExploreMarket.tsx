import useScreen from "../../customHooks/useScreen";
import btc from "../../assets/Dummy_images/Bitcoin.svg";
import Ethereum from "../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../assets/Dummy_images/Xrp.svg";
import litecoin from "../../assets/Dummy_images/Litecoin.svg";
import Tether from "../../assets/Dummy_images/Tether.svg";
import graph from "../../assets/cointpricegraph.png";

import { Link } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
const marketData = [
  {
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$23,869.5",
    change: "+1.53%",
    marketCap: "$552,825,084,843",
    supply: "19,048,487 BTC",
    icon: btc,
  },
  {
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$1400.36",
    change: "+1.27%",
    marketCap: "$236,365,494,058",
    supply: "120,908,795 ETH",
    icon: Ethereum,
  },
  {
    rank: 3,
    name: "XRP",
    symbol: "XRP",
    price: "$0.33398",
    change: "+10.93%",
    marketCap: "$19,749,990,029",
    supply: "48,343,101,197 XRP",
    icon: xrp,
  },
  {
    rank: 4,
    name: "Litecoin",
    symbol: "LTC",
    price: "$46.521",
    change: "+4.98%",
    marketCap: "$4,756,757,353",
    supply: "70,357,381 LTC",
    icon: litecoin,
  },
  {
    rank: 5,
    name: "Tether",
    symbol: "USDT",
    price: "$0.99655",
    change: "-0.25%",
    marketCap: "$74,120,427,924",
    supply: "73,275,094 USDT",
    icon: Tether,
  },
];

export const ExploreMarket = () => {

  const  [loading , isLoading] = useState(false)
  const { isMobile } = useScreen(); // No need to pass breakpoints manually

  return (
    <div className="text-center cont">
      <h4 className="text-lg font-bold mb-4">
        Explore the latest market updates
      </h4>

      {isMobile ? (
        <div className="flex flex-col gap-2">
          {marketData.map((coin, index) => (
            <div
              key={index}
              className="py-4 px-3 rounded-lg flex justify-between items-center border border-gray-300 dark:border-Soft_Gray_20"
            >
              <div className="flex items-center gap-2">
                <img src={coin.icon} alt={coin.name} />
                <h3 className="font-semibold  ">
                  {coin.name}{" "}
                  <span className="font-light text-[14px]">{coin.symbol}</span>
                </h3>
              </div>
              <div className="flex gap-1">
                <p
                  className={`${
                    coin.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.change}
                </p>
                <h5 className="">{coin.price}</h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-gray-300 rounded-lg ">
          <table className="w-full  rounded-lg bg-white dark:bg-black">
            <thead className="">
              <tr className="border-b border-gray-300 text-center ">
                <th className="p-5 text-left ">
                  <h6 className="text-Soft_White">Coin</h6>
                </th>
                <th className="p-5 text-right">
                  <h6 className="text-Soft_White">Price</h6>
                </th>
                <th className="p-5 text-right">
                  <h6></h6>
                </th>
                <th className="p-5 md:p-2 lg:p-5 text-right">
                  <h6 className="text-Soft_White">Change 7h</h6>
                </th>
                <th className="p-5 text-right">
                  <h6 className="text-Soft_White">Market Cap</h6>
                </th>
                <th className="p-5  text-right md:hidden lg:block">
                  <h6 className="text-Soft_White">Supply</h6>
                </th>
                <th className="p-5 text-right ">
                  <h6 className="text-Soft_White">Action</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((coin, index) => (
                <tr key={index} className="border-b  border-gray-300">
                  <td className="p-5">
                    <div className="flex gap-2 items-center">
                      <p className="text-[14px] ">{coin.rank}</p>
                      <span className="font-bold px-1 lg:block md:hidden text-Soft_White ">
                        <i>
                          {" "}
                          <svg
                            className=" text-black dark:text-Soft_White hover:dark:text-Gold hover:text-Gold hover-bg-Gold "
                            xmlns="http://www.w3.org/2000/svg"
                            height="18px"
                            viewBox="0 -960 960 960"
                            width="18px"
                            fill="currentColor"
                          >
                            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                          </svg>
                        </i>
                      </span>
                      <img
                        className="h-[24px] w-[24px]"
                        src={coin.icon}
                        alt={coin.name}
                      />{" "}
                      <span className="font-bold lg:block md:hidden">
                        <p className="text-[14px] font-bold">{coin.name}</p>
                      </span>{" "}
                      <span className="text-gray-500 text-[14px] font-normal">
                        {coin.symbol}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-right text-[14px] font-normal">
                    {coin.price}
                  </td>
                  <td className="p-5 flex justify-end items-center text-right">
                    <img className="text-right" src={graph} alt="graph" />
                  </td>
                  <td
                    className={`p-2 text-right text-[14px] ${
                      coin.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.change}
                  </td>
                  <td className="p-5 text-right text-[14px]">
                    {coin.marketCap}
                  </td>
                  <td className="p-5 text-right hide-on-md text-[14px]">
                    <p className="text-[14px]"> {coin.supply}</p>
                  </td>
                  <td className="p-2 text-right   ">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={"/signup"}
                        className="bg-gray-800 px-4 py-2 border-[1px] bg-white rounded-[8px] text-[14px] dark:bg-black"
                      >
                        Trade
                      </Link>
                      <div className="hidden md:hidden lg:block">
                        <button className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="22px"
                            viewBox="0 -960 960 960"
                            width="22px"
                            fill="currentColor"
                          >
                            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to='/prices'>
          <button className="bg-blue-500 text-white py-3 px-7 rounded-md my-5 lg:my-10">
            Explore cryptocurrencies
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};
