import { useState } from "react";
import "../../../App.css";
export const CoinConversion = () => {
  const coinsName = [
    {
      id: 1,
      Currency: "USD",
    },
    {
      id: 2,
      Currency: "INR",
    },
    {
      id: 2,
      Currency: "USDT",
    },
  ];

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div
        className="flex   justify-evenly items-center w-[43%] h-full border-[1px] border-Soft_Gray_20 rounded-[6px] hover:bg-Soft_Gray_20 ease-in duration-300"
        onClick={handleClick}
      >
        <h4 className="font-medium">USD </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </div>
      {isOpen && (
        <div
          className="flex flex-col h-[100px] overflow-y-scroll absolute border-[1px] mt-1 rounded-[6px]  border-Soft_Gray_20 justify-evenly items-center w-[43%]   rounded-b-[6px] "
          onClick={handleClick}
        >
          {coinsName.map((data) => (
            <div className="flex  flex-col rounded-[5px] p-1  items-start w-[100%] h-full  hover:bg-Soft_Gray_20 ease-in duration-300">
              <div className="flex ">
                <h4 className="font-normal pl-3">{data.Currency}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  className="invisible"
                >
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
