import Eth from "../../../assets/Dummy_images/Ethereum.svg"
import SOL from "../../../assets/Dummy_images/Solana.svg";
import ltc from "../../../assets/Dummy_images/Litecoin.svg";

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
      title: "Highest volume (24h)",
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

  ]
  return (
    <>
      <div className="flex gap-5 ">
        {WatchList.map((data) => (
          <div className="flex gap-1 flex-col border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20 w-[30%] p-5" key={data.id}>
            <p className="text-[14px] text-Slate_Gray dark:text-white">{data.title}</p>
            <img className="mt-3 h-[36px] w-[36px]" src={data.image} alt={data.name} />
            <div className="flex gap-2 items-center">
              <h4 className="text-[14px] font-bold ">{data.name}</h4>
              <p className="text-[14px] text-Slate_Gray font-normal">{data.symbol}</p>
            </div>
            <p className="text-[14px] text-Green">{data.percentage}</p>
          </div>
        ))}
      </div>
    </>
  );
};
