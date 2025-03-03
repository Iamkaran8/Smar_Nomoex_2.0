import { useState } from "react";
import { Pagination } from "../Pagination";
import useScreen from "../../../customHooks/useScreen";
import { useSelector } from "react-redux";
import { selectTransactionData } from "../../../redux/slices/TransactionsSlice";

export const HashTable = () => {


  // Transaction Data From TransactionSlice 
  const transactionsDetails = useSelector(selectTransactionData);

  const totalNumberOfPage = [
    ...Array(Math.ceil(transactionsDetails.length / 9)).keys(),
  ];
  const [currentPage, setCurrentPage] = useState<number>(0);
  const Start = currentPage * 9;
  const End = Start + 9;
  const FilteredTransDetails = transactionsDetails.slice(Start, End);
  const { isTablet, isMobile } = useScreen();
  return (
    <>
      <div className={``}>
        {isTablet || isMobile ? (
          <>
            {/* {
            isTablet ? (
              <div className="flex p-3 px-2">
              <div className="w-[55%]">
                <h3 className="text-[12px] font-bold">Hash</h3>
              </div>
              <div className="w-[10%]">
                <h3 className="text-[12px] font-bold text-right">Time</h3>
              </div>
              <div className="w-[20%]">
                <h3 className="text-[12px] font-bold text-right">
                  Amount (BTC)
                </h3>
              </div>
              <div className="w-[15%]">
                <h3 className="text-[12px] font-bold text-right">
                  Amount (USD)
                </h3>
              </div>
            </div>
            ) : null
          } */}
            {FilteredTransDetails.map((hash) => (
              <div
                key={hash.id} // Added key prop
                className="flex p-3 border-[1px] border-Soft_Gray_20 rounded-[6px] mb-2 hover:bg-Soft_Gray_20 ease-in duration-300"
              >
                <div className="w-[55%] lg:w-[55%] md:w-[60%] flex gap-3">
                  <div className="flex gap-3">
                    <img
                      className="h-[24px] w-[24px]"
                      src={hash.image}
                      alt={hash.btc_amount}
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-normal leading-[21px]  bg-gradient-to-r from-black to-white dark:from-white dark:to-black  bg-clip-text text-transparent">
                      {isMobile
                        ? hash.hash.substring(0, 14)
                        : hash.hash.substring(0, 28)}
                    </p>
                    <p className="t text-Slate_Gray text-[14px] font-normal leading-[21px]">
                      {hash.time}
                    </p>
                  </div>
                </div>
                <div className="w-[55%] lg:w-[55%] md:w-[40%]  flex justify-end gap-3">
                  <div>
                    <p className="text-right text-[14px] font-bold">
                      {hash.usd_amount}
                    </p>
                    <p className="text-right text-[14px] font-normal">
                      {hash.btc_amount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="cont">
            <div className="flex p-3 px-2">
              <div className="w-[55%]">
                <h3 className="text-[12px] font-bold">Hash</h3>
              </div>
              <div className="w-[10%]">
                <h3 className="text-[12px] font-bold text-right">Time</h3>
              </div>
              <div className="w-[20%]">
                <h3 className="text-[12px] font-bold text-right">
                  Amount (BTC)
                </h3>
              </div>
              <div className="w-[15%]">
                <h3 className="text-[12px] font-bold text-right">
                  Amount (USD)
                </h3>
              </div>
            </div>
            {FilteredTransDetails.map((hash) => (
              <div
                key={hash.id} // Added key prop
                className="flex p-3 border-[1px] border-Soft_Gray_20 rounded-[6px] mb-2 hover:bg-Soft_Gray_20 ease-in duration-300"
              >
                <div className="w-[55%] flex gap-3">
                  <img
                    className="h-[24px] w-[24px]"
                    src={hash.image}
                    alt={hash.btc_amount}
                  />
                  <p className="text-[14px] font-normal leading-[21px]">
                    {hash.hash}
                  </p>
                </div>
                <div className="w-[10%]">
                  <p className="text-right text-Slate_Gray text-[14px] font-normal leading-[21px]">
                    {hash.time}
                  </p>
                </div>
                <div className="w-[20%]">
                  <p className="text-right text-[14px] font-normal">
                    {hash.btc_amount}
                  </p>
                </div>
                <div className="w-[15%]">
                  <p className="text-right text-[14px] font-bold">
                    {hash.usd_amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cont">
          <Pagination
            totalNumberOfPage={totalNumberOfPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            justify="start"
          />
        </div>
      </div>
    </>
  );
};
