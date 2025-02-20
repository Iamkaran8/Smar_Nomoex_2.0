import btc from "../../../assets/Dummy_images/Bitcoin.svg";
import sol from "../../../assets/Dummy_images/Solana.svg";
import ltc from "../../../assets/Dummy_images/Litecoin.svg";
import xrp from "../../../assets/Dummy_images/Xrp.svg";
import eos from "../../../assets/Dummy_images/EosToken.png";
import eth from "../../../assets/Dummy_images/Ethereum.svg";
import { Pagination } from "../Pagination";
import { useState } from "react";

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

  const totalNumberOfPage = [...Array(Math.ceil(transactionsDetails.length / 9)).keys()];
  const [currentPage, setCurrentPage] = useState<number>(0);
  const Start = currentPage * 9 ;
  const End  =  Start + 9;
  const FilteredTransDetails = transactionsDetails.slice( Start , End);
  
  return (
    <>
      <div className="cont">
        <div className="flex p-3 px-2">
          <div className="w-[55%]">
            <h3 className="text-[12px] font-bold">Hash</h3>
          </div>
          <div className="w-[10%]">
            <h3 className="text-[12px] font-bold text-right">Time</h3>
          </div>
          <div className="w-[20%]">
            <h3 className="text-[12px] font-bold text-right">Amount (BTC)</h3>
          </div>
          <div className="w-[15%]">
            <h3 className="text-[12px] font-bold text-right">Amount (USD)</h3>
          </div>
        </div>
        {FilteredTransDetails.map((hash) => (
          <div className="flex p-3 border-[1px] border-Soft_Gray_20 rounded-[6px]  mb-2 hover:bg-Soft_Gray_20 ease-in duration-300">
            <div className="w-[55%] flex gap-3">
              <img
                className="h-[24px] w-[24px]"
                src={hash.image}
                alt={hash.btc_amount}
              />{" "}
              <p className="text-[14px] font-normal leading-[21px]">{hash.hash}</p>
            </div>
            <div className="w-[10%]">
              <p className="text-right text-Slate_Gray text-[14px] font-normal leading-[21px]">{hash.time}</p>
            </div>
            <div className="w-[20%]">
              <p className="text-right text-[14px] font-normal">{hash.btc_amount}</p>
            </div>
            <div className="w-[15%]">
              <p className="text-right text-[14px] font-bold">{hash.usd_amount}</p>
            </div>
          </div>
        ))}
        <Pagination totalNumberOfPage ={totalNumberOfPage} currentPage ={0} setCurrentPage ={setCurrentPage}  />
      </div>
    </>
  );
};
