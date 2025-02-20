import btc from "../../../assets/Dummy_images/Bitcoin.svg";
import Ethereum from "../../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../../assets/Dummy_images/Xrp.svg";
import litecoin from "../../../assets/Dummy_images/Litecoin.svg";
import { HiDotsHorizontal } from "react-icons/hi";
export const LatestTransaction = () => {
  const transaction = [
    {
      id: 1,
      transactionId: "aa55dacfa6c6975396291e",
      value: "148 ETH",
      image: Ethereum,
    },
    {
      id: 2,
      transactionId: "a3373f8ac9d3313abbfab1839",
      value: "0.65 BTC",
      image: btc,
    },
    {
      id: 3,
      transactionId: "0b2e7c498776f3c56660",
      value: "345 LTC",
      image: litecoin,
    },
    {
      id: 4,
      transactionId: "00af48c5a70c8e2a6d80d7",
      value: "1.8 BTC",
      image: btc,
    },
    {
      id: 5,
      transactionId: "c1b5244030ab98b806e5",
      value: "235.7 TE",
      image: xrp,
    },
  ];

  return (
    <>
      <div className=" border-[1px] rounded-[8px] border-Soft_Gray dark:border-Soft_Gray_20">
        <div className="border-b-[1px] border-Soft_Gray dark:border-Soft_Gray_20 p-5">
          <h3 className="text-[16px]">Latest Transaction</h3>
        </div>
        <table className="w-[100%] ">
          {transaction.map((data) => (
            <tbody key={data.id}>
              <tr className="hover:bg-Soft_Gray_20 ease-in duration-300 ">
                <td className="flex p-4 gap-3">
                  <img
                    className="w-[28px]"
                    src={data.image}
                    alt={data.transactionId}
                  />
                  <h3 className="lg:text-[14px]md:text-[14px] font-bold hidden md:block lg:block">
                    {data.transactionId}
                  </h3>
                  <h3 className="lg:text-[14px]md:text-[14px] font-bold lg:hidden md:hidden block">
                    {data.transactionId.substring(0, 12)}...
                  </h3>
                </td>
                <td className="p-4 text-right">
                  <h4 className="text-[14px] font-bold">{data.value}</h4>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <div className="p-5">
          <button className=" flex justify-center items-center gap-4 border-[1px] rounded-[8px] border-Soft_Gray w-[100%] dark:border-Soft_Gray_20 p-3 font-[14px] font-bold">
            <i className="text-[25px]">
              {" "}
              <HiDotsHorizontal />{" "}
            </i>{" "}
            See All Transactions
          </button>
        </div>
      </div>
    </>
  );
};
