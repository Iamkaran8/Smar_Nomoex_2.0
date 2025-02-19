import Umacoin from "../../assets/Dummy_images/umacoin.png";
import idexcoin from "../../assets/Dummy_images/IdexCoin.png";
import Madrid from "../../assets/Dummy_images/madrid.png";
import EosToken from "../../assets/Dummy_images/EosToken.png";
import burgerswap from "../../assets/Dummy_images/BurgerSwap.png";
import { HiDotsHorizontal } from "react-icons/hi";

export const TrendingAssets = () => {
  const trendingAssets = [
    {
      id: 1,
      name: "UmaCoin",
      symbol: "UMA",
      price: "$5.727",
      percentage: "+1.53%",
      image: Umacoin,
    },
    {
      id: 2,
      name: "idexCoin",
      symbol: "IDC",
      price: "$7.3925",
      percentage: "+0.75%",
      image: idexcoin,
    },
    {
      id: 3,
      name: "Madrid",
      symbol: "ATM",
      price: "$4.57",
      percentage: "+39.43%",
      image: Madrid,
    },
    {
      id: 4,
      name: "EosToken",
      symbol: "UMA",
      price: "$2.500",
      percentage: "+35.49%",
      image: EosToken,
    },
    {
      id: 5,
      name: "UmaBurgerSwapoin",
      symbol: "BUR",
      price: "$0.936",
      percentage: "+34.13%",
      image: burgerswap,
    },
  ];
  return (
    <div className=" border-[1px] rounded-[8px] border-Soft_Gray dark:border-Soft_Gray_20">
      <div className="border-b-[1px] border-Soft_Gray p-5 dark:border-Soft_Gray_20">
        <h3 className="text-[16px]">Trending Assets</h3>
      </div>
      <table className="w-[100%]">
        {trendingAssets.map((data) => (
          <tbody key={data.id}>
            <tr className="" >
              <td className="flex p-4 gap-3">
                <img
                  className="w-[40px] h-[40px]"
                  src={data.image}
                  alt={data.name}
                />
                <div>
                  <h3 className="lg:text-[16px] md:text-[16px] font-bold">
                    {data.name}
                  </h3>
                  <p className="text-Slate_Gray text-[14px]">{data.symbol}</p>
                </div>
              </td>
              <td className="p-4 text-right">
                <h4 className="text-[16px] font-bold">{data.price}</h4>
                <p className="text-[14px] font-bold text-Green">
                  {data.percentage}
                </p>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="p-5">
        <button className=" flex justify-center items-center gap-4 border-[1px] rounded-[8px] dark:border-Soft_Gray_20 border-Soft_Gray w-[100%] p-3 font-[14px] font-bold">
          <i className="text-[25px]">
            {" "}
            <HiDotsHorizontal />{" "}
          </i>{" "}
          See All Assets
        </button>
      </div>
    </div>
  );
};
