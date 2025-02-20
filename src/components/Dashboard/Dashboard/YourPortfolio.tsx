import btc from "../../../assets/Dummy_images/Bitcoin.svg";
import Ethereum from "../../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../../assets/Dummy_images/Xrp.svg";
import litecoin from "../../../assets/Dummy_images/Litecoin.svg";
import Tether from "../../../assets/Dummy_images/Tether.svg";
import { HiDotsHorizontal } from "react-icons/hi";
import useScreen from "../../../customHooks/useScreen";
export const YourPortfolio = () => {
  const PorfolioDatas = [
    {
      rank: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$23.5",
      change: "+1.53%",
      marketCap: "$552,825,084,843",
      supply: "19,048,487 BTC",
      icon: btc,
    },
    {
      rank: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "1400.36",
      change: "+1.27%",
      marketCap: "$236,365,494,058",
      supply: "120,908,795 ETH",
      icon: Ethereum,
    },
    {
      rank: 3,
      name: "XRP",
      symbol: "XRP",
      price: "0.33398",
      change: "+10.93%",
      marketCap: "$19,749,990,029",
      supply: "48,343,101,197 XRP",
      icon: xrp,
    },
    {
      rank: 4,
      name: "Litecoin",
      symbol: "LTC",
      price: "46.521",
      change: "+4.98%",
      marketCap: "$4,756,757,353",
      supply: "70,357,381 LTC",
      icon: litecoin,
    },
    {
      rank: 5,
      name: "Tether",
      symbol: "USDT",
      price: "0.955",
      change: "-0.25%",
      marketCap: "$74,120,427,924",
      supply: "73,275,094 USDT",
      icon: Tether,
    },
  ];

  const { isMobile } = useScreen();
  return (
    <>
      {isMobile ? (
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] mb-2">Your Portfolio</h3>
          {PorfolioDatas.map((coin, index) => (
            <div
              key={index}
              className="py-4 px-3 rounded-lg flex justify-between items-center border border-gray-300  dark:border-Soft_Gray_20"
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
        <div className=" border-[1px] rounded-[8px] border-Soft_Gray dark:border-Soft_Gray_20">
          <div className="border-b-[1px] border-Soft_Gray p-5 dark:border-Soft_Gray_20">
            <h3 className="text-[16px]">Your Portfolio</h3>
          </div>
          <table className="w-[100%] ">
            {PorfolioDatas.map((data, index) => (
              <tbody key={index} >
                <tr className="" >
                  <td className="flex p-4 gap-3">
                    <img className="w-[28px]" src={data.icon} alt={data.name} />
                    <h4 className="text-[14px] hidden md:block lg:block ">
                      {data.name}
                    </h4>
                    <h4 className="text-Slate_Gray text-[14px] md:font-normal font-bold">
                      {data.symbol}
                    </h4>
                  </td>
                  <td className="p-4 text-right  ">
                    <h4 className="text-[14px] font-normal">{data.price}</h4>
                  </td>
                  <td className="p-4 text-right">
                    <h4 className="text-[14px] font-bold">
                      {data.price} {data.symbol}
                    </h4>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="p-5">
            <button className=" flex justify-center items-center gap-4 dark:border-Soft_Gray_20 border-[1px] rounded-[8px] border-Soft_Gray w-[100%] p-3 font-[14px] font-bold">
              <i className="text-[25px]">
                {" "}
                <HiDotsHorizontal />{" "}
              </i>{" "}
              See All Assets
            </button>
          </div>
        </div>
      )}
    </>
  );
};
