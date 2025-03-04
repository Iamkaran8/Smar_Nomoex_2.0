import img from "../../../assets/Dummy_images/Bitcoin.svg";

export const CoinExplorer = () => {
  const coinsName = [
    {
      id: 1,
      name: "Bitcoin Explorer",
      icon: img,
    },
    {
      id: 2,
      name: "Solana Explorer",
      icon: img,
    },
    {
      id: 3,
      name: "Eth Explorer",
      icon: img,
    },
    {
      id: 4,
      name: "Xrp Explorer",
      icon: img,
    },
  ];
  return (
    <>
      <div className="flex relative justify-evenly items-center p-3 w-[100%] border-[1px] border-Soft_Gray_20 rounded-[6px]  hover:bg-Soft_Gray_20 ease-in duration-300">
        <img src={img} alt="btc" />
        <h4 className="font-medium">Bitcoin Explorer</h4>
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

      {/* All Code */}

      {/* <div className="flex flex-col w-[50%]">
        <div className="flex relative justify-evenly items-center p-3 w-[100%] border-[1px] border-Soft_Gray_20 rounded-[6px]  hover:bg-Soft_Gray_20 ease-in duration-300">
          <img src={img} alt="btc" />
          <h4 className="font-medium">Bitcoin Explorer</h4>
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

        <div className="flex absolute justify-evenly items-center p-3 w-[100%] border-[1px] border-t-[0px] border-Soft_Gray_20 rounded-[6px]  ">
          <div className="flex-col flex">
            {coinsName.map((coin) => (
              <div className="flex hover:bg-Soft_Gray_20 ease-in duration-300">
                <img src={coin.icon} alt={coin.name} />
                <h4 className="font-medium">{coin.name}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  className="invisible "
                >
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};
