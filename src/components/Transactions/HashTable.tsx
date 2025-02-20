import btc from "../../assets/Dummy_images/Bitcoin.svg";
import sol from "../../assets/Dummy_images/Solana.svg";
import ltc from "../../assets/Dummy_images/Litecoin.svg";
import xrp from "../../assets/Dummy_images/Xrp.svg";
import eos from "../../assets/Dummy_images/EosToken.png";
import eth from "../../assets/Dummy_images/Ethereum.svg";

export const HashTable = () => {
  const transactionsDetails = [
    {
      id: 1,
      hash: "7569aaca5438424d69ee7fcd69b21df9e30a62a09c473516d5374756e0197b9f",
      time: "14:33",
      btc_amount: "22.16908829 BTC",
      usd_amount: "$641,583.17",
      image: btc,
    },
    {
      id: 2,
      hash: "04164c06f2fba25dfa562cc4e0d162d61b2aa8c5cdc74207c42926aabb12dfde",
      time: "14:33",
      btc_amount: "0.01133392 BTC",
      usd_amount: "$330.38",
      image: sol,
    },
    {
      id: 3,
      hash: "f4cd5dbe3c78be32ebf515eaad36224e40c1cbf58221e2116027fe9a97fd8173",
      time: "14:33",
      btc_amount: "0.00343500 BTC",
      usd_amount: "$100.13",
      image: ltc,
    },
    {
      id: 4,
      hash: "95d080b1f238187446e083786de5415607ef4b3042fff1dc31d71c413c078445",
      time: "15:01",
      btc_amount: "0.00343500 BTC",
      usd_amount: "$100.13",
      image: xrp,
    },
    {
      id: 5,
      hash: "ada6bd5d025bede694f76273d2b740ffd261021e1d00cde22fdae85e21447e74",
      time: "16:16",
      btc_amount: "0.00327847 BTC",
      usd_amount: "$95.50",
      image: eos,
    },
    {
      id: 6,
      hash: "e171fd32c3794bc362ebccc3f8be9565a6615034db83358e699698e0462650c5",
      time: "18:16",
      btc_amount: "0.00996522 BTC",
      usd_amount: "$290.28",
      image: eth,
    },
    {
      id: 7,
      hash: "7569aaca5438424d69ee7fcd69b21df9e30a62a09c473516d5374756e0197b9f",
      time: "14:33",
      btc_amount: "22.16908829 BTC",
      usd_amount: "$641,583.17",
      image: btc,
    },
    {
      id: 8,
      hash: "04164c06f2fba25dfa562cc4e0d162d61b2aa8c5cdc74207c42926aabb12dfde",
      time: "14:33",
      btc_amount: "0.01133392 BTC",
      usd_amount: "$330.38",
      image: sol,
    },
    {
      id: 9,
      hash: "f4cd5dbe3c78be32ebf515eaad36224e40c1cbf58221e2116027fe9a97fd8173",
      time: "14:33",
      btc_amount: "0.00343500 BTC",
      usd_amount: "$100.13",
      image: ltc,
    },
    {
      id: 10,
      hash: "95d080b1f238187446e083786de5415607ef4b3042fff1dc31d71c413c078445",
      time: "15:01",
      btc_amount: "0.00343500 BTC",
      usd_amount: "$100.13",
      image: xrp,
    },
    {
      id: 11,
      hash: "ada6bd5d025bede694f76273d2b740ffd261021e1d00cde22fdae85e21447e74",
      time: "16:16",
      btc_amount: "0.00327847 BTC",
      usd_amount: "$95.50",
      image: eos,
    },
    {
      id: 12,
      hash: "e171fd32c3794bc362ebccc3f8be9565a6615034db83358e699698e0462650c5",
      time: "18:16",
      btc_amount: "0.00996522 BTC",
      usd_amount: "$290.28",
      image: eth,
    },
  ];
  return (
    <>
      {/* <table className="w-[100%]   ">
        <thead className="">
          <tr>
            <td className="p-5 ">Hash</td>
            <td className="p-5 ">Time</td>
            <td className="p-5 ">{"Amount (BTC)"}</td>
            <td className="p-5 ">{"Amount (USD)"}</td>
          </tr>
        </thead>
        <tbody className="gap-3 space-y-3">

          {transactionsDetails.map((hash) => (
            <tr
              key={hash.id}
              className="border-[1px] border-Soft_Gray p-2 rounded-[6px]"
            >
              <td className="p-5 ">{hash.hash}</td>
              <td className="p-5 ">{hash.time}</td>
              <td className="p-5 ">{hash.btc_amount}</td>
              <td className="p-5 ">{hash.usd_amount}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <div className="">
        <div className="flex">
          <div className="w-[60%]">
            <h3 className="text-[12px] font-bold">Hash</h3>
          </div>
          <div className="w-[10%]">
            <h3 className="text-[12px] font-bold">TIme</h3>
          </div>
          <div className="w-[15%]">
            <h3 className="text-[12px] font-bold">Amount (BTC)</h3>
          </div>
          <div className="w-[15%]">
            <h3 className="text-[12px] font-bold">Amount (USD)</h3>
          </div>
        </div>
        {transactionsDetails.map((hash) => (
          <div className="flex">
            <div className="w-[60%]">
              <img src={hash.image} alt={hash.btc_amount} /> <p>{hash.hash}</p>
            </div>
            <div className="w-[10%]">
              <p>{hash.time}</p>
            </div>
            <div className="w-[15%]">
              <p>{hash.btc_amount}</p>
            </div>
            <div className="w-[15%]">
              <p>{hash.usd_amount}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
