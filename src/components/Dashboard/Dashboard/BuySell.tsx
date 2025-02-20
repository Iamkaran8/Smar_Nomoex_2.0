import btc from "../../../assets/Dummy_images/Bitcoin.svg";
import Ethereum from "../../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../../assets/Dummy_images/Xrp.svg";
import litecoin from "../../../assets/Dummy_images/Litecoin.svg";
import Tether from "../../../assets/Dummy_images/Tether.svg";
import { useState } from "react";

export const BuySell = () => {
  const coinsData = [
    {
      rank: 1,
      name: "Bitcoin",
      icon: btc,
    },
    {
      rank: 2,
      name: "Ethereum",
      icon: Ethereum,
    },
    {
      rank: 3,
      name: "XRP",
      icon: xrp,
    },
    {
      rank: 4,
      name: "Litecoin",
      icon: litecoin,
    },
    {
      rank: 5,
      name: "Tether",
      icon: Tether,
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="border-[1px] border-Soft_Gray rounded-[8px]  dark:border-Soft_Gray_20">
        <div className="border-b-[1px] border-Soft_Gray p-5 dark:border-Soft_Gray_20">
          <h3 className="text-[16x]">Start selling or buying</h3>
        </div>
        <div className="p-5 flex justify-center flex-col gap-7">
          <div>
            <div
              className=" bg-[#EBF0F0] dark:bg-Light_Cyan_Gray rounded-[8px] relative  cursor-pointer"
              onClick={handleToggle}
            >
              <div className=" flex p-3 gap-3 justify-between ">
                <div className="flex p-2 gap-3 items-center">
                  <img className="w-[18px]" src={coinsData[0].icon} />
                  {coinsData[0].name}
                </div>
                <div className="flex p-2 items-center">
                  <i className="dark:text-Soft_White text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="currentColor"
                    >
                      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                    </svg>
                  </i>
                </div>
              </div>
              {isOpen && (
                <div className="absolute bg-Light_Cyan_Gray w-[100%] bg-[#EBF0F0] dark:bg-black -mt-1 rounded-b-[8px] p-2">
                  {coinsData.map((coin) => (
                    <div className="flex p-2 gap-3 items-center hover:bg-Light_Cyan_Gray">
                      <img className="w-[18px]" src={coin.icon} />
                      {coin.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="text-[28px] leading-[px]font-extrabold">$0.00</h2>
              <p className="text-Slate_Gray text-[14px]">0 BTC ~ $0.00</p>
            </div>
            <div>
              <button className="border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20 p-2 w-[52px] h-[52px] leading-[21px] h-[40px] w-[40px] flex  justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="currentColor"
                >
                  <path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z" />
                </svg>
              </button>
            </div>
          </div>
          <button className="bg-Bright_Blue py-2 w-[100%] rounded-[8px] text-white">
            Continue Transfer
          </button>
        </div>
      </div>
    </>
  );
};
