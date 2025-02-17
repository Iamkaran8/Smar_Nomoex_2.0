import useScreen from "../../customHooks/useScreen";
import btc from "../../assets/Dummy_images/Bitcoin.svg";
import Ethereum from "../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../assets/Dummy_images/Xrp.svg";
import litecoin from "../../assets/Dummy_images/Litecoin.svg";
import Tether from "../../assets/Dummy_images/Tether.svg";
import graph from "../../assets/cointpricegraph.png";
import { HiDotsVertical } from "react-icons/hi";
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
              className="py-4 px-3 rounded-lg flex justify-between items-center border border-gray-300"
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
        <div className="border border-gray-300 rounded-lg">
          <table className="w-full rounded-lg bg-white dark:bg-black">
            <thead>
              <tr className="border-b border-gray-300 text-center">
                <th className="p-5 text-left ">
                  <h6>Coin</h6>
                </th>
                <th className="p-5 text-right">
                  <h6>Price</h6>
                </th>
                <th className="p-5 text-right">
                  <h6></h6>
                </th>
                <th className="p-5 md:p-2 lg:p-5 text-right">
                  <h6>Change 7h</h6>
                </th>
                <th className="p-5 text-right">
                  <h6>Market Cap</h6>
                </th>
                <th className="p-5  text-right md:hidden lg:block">
                  <h6>Supply</h6>
                </th>
                <th className="p-5 text-right ">
                  <h6>Action</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((coin, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-5 flex items-center gap-2">
                    {coin.rank}{" "}
                    <img className="px-2" src={coin.icon} alt={coin.name} />{" "}
                    <span className="font-bold lg:block md:hidden">{coin.name}</span>{" "}
                    <span className="text-gray-500">{coin.symbol}</span>
                  </td>
                  <td className="p-5 text-right">{coin.price}</td>
                  <td className="p-5 text-right">
                    <img className="text-right" src={graph} alt="graph" />
                  </td>
                  <td
                    className={`p-2 text-right ${
                      coin.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.change}
                  </td>
                  <td className="p-5 text-right">{coin.marketCap}</td>
                  <td className="p-5 text-right md:hidden lg:block">
                    {coin.supply}
                  </td>
                  <td className="p-2 text-right  ">
                    <button className="bg-gray-800 px-3 py-1 rounded-lg text-white dark:border-[1px] dark:border-Soft_Gray_20 dark:bg-black text-[14px]">
                      Trade
                    </button>
                    <button className="">
                    <HiDotsVertical/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="bg-blue-500 text-white py-3 px-7 rounded-md my-5 lg:my-10">
            Explore cryptocurrencies
          </button>
        </div>
      )}
    </div>
  );
};
