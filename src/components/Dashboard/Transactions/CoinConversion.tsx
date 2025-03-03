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
  return (
    <>
      
        <div className="flex justify-around items-center w-[20%] border-[1px] border-Soft_Gray_20 rounded-[6px] hover:bg-Soft_Gray_20 ease-in duration-300">
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
      

      {/* DropDown */}
      {/* <div className="flex justify-around items-center w-[20%] border-[1px] border-Soft_Gray_20 rounded-[6px] hover:bg-Soft_Gray_20 ease-in duration-300">
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
      </div> */}
    </>
  );
};
