import btc from "../../assets/Dummy_images/Bitcoin.svg";
import Ethereum from "../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../assets/Dummy_images/Xrp.svg";
import litecoin from "../../assets/Dummy_images/Litecoin.svg";
import Tether from "../../assets/Dummy_images/Tether.svg";
import graph from "../../assets/cointpricegraph.png";
import { Link } from "react-router-dom";
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

export const Skeleton = () => {
  return (
    <>
      <table className="w-full  overflow-hidden	 bg-Soft_Gray_20  dark:bg-transparent  border-Soft_Gray_20  mb-2 hover:bg-Soft_Gray_20 ease-in duration-300 animate-pulse">
        <tbody className="">
          {
            <>
              {marketData.map((coin, index) => (
                <tr key={index} className="rounded-[8px]">
                  <td className="p-5">
                    <div className="flex gap-2 items-center">
                      <p className="min-h-[25px] w-[28px] bg-Soft_Gray rounded-full animate-pulse  text-transparent">
                        .
                      </p>
                      <span className="font-bold lg:block md:hidden">
                        <p className="w-[100px]  text-transparent min-h-[21px] bg-Soft_Gray rounded-full animate-pulse">
                          .
                        </p>
                      </span>
                      <span className="w-[50px]  text-transparent min-h-[21px] bg-Soft_Gray rounded-full animate-pulse ">
                        .
                      </span>
                    </div>
                  </td>
                  <td className="p-5  ">
                    <p className="w-[400px] text-right text-transparent min-h-[21px] bg-Soft_Gray rounded-full animate-pulse ">
                      .
                    </p>
                  </td>
                  <td className="p-5 flex justify-end items-center text-right">
                    {/* <img className="text-right" src={graph} alt="graph" /> */}
                  </td>
                  <td
                
                  >
                    <p className=" w-[150px]  text-transparent min-h-[21px] bg-Soft_Gray rounded-full animate-pulse ">
                      .
                    </p>
                  </td>

                  <td className="p-2 text-right   ">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={"/signup"}
                        className=" h-[100%] px-2 text-transparent bg-Soft_Gray rounded-full animate-pulse "
                      >
                       trade
                      </Link>

                    </div>
                  </td>
                </tr>
              ))}
            </>
          }
        </tbody>
      </table>
    </>
  );
};
