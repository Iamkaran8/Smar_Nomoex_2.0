export const Skeleton = () => {
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
        {[1, 2, 3, 4, 5, 6, 7].map((hash) => (
          <div
            key={hash} // Added key prop
            className="flex p-3   "
          >
            <div className="w-[55%] flex gap-3">
              <span className="min-h-[25px] w-[28px] bg-Soft_Gray rounded-full animate-pulse"></span>
              <p className=" w-[90%] text-transparent min-h-[21px] bg-Soft_Gray  rounded-full animate-pulse">
                .
              </p>
            </div>
            <div className="w-[10%] flex justify-end">
              <p className="text-right w-[50%]  text-transparent min-h-[21px] bg-Soft_Gray rounded-full animate-pulse ">
                .
              </p>
            </div>
            <div className="w-[20%] flex justify-end ">
              <p className="text-right w-[50%] text-transparent min-h-[21px] bg-Soft_Gray rounded-full animate-pulse ">
                .
              </p>
            </div>
            <div className="w-[15%] flex justify-end">
              <p className="text-right  w-[50%] text-transparent min-h-[21px] bg-Soft_Gray rounded-full animate-pulse">
                .
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
