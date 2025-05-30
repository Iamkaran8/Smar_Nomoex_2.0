import { PaginationProps } from "../../model";

export const Pagination = ({
  totalNumberOfPage,
  currentPage,
  setCurrentPage,
  justify
}: PaginationProps) => {
  return (
    <>
      {/* Pagination Section */}
      <div className={`flex justify-${justify} gap-3 py-3 md:mt-0 lg:mt-0 mt-4 -mb-3`}>
        <button
          disabled={currentPage === 0}
          className="border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20 p-2 leading-[21px] h-[40px] w-[40px] flex  justify-center items-center "
          onClick={() => setCurrentPage((prev: number) => prev - 1)}
        >
          {"<-"}
        </button>
        <div className="flex gap-3">
          {totalNumberOfPage.map((num, i) => (
            <button
              key={i}
              className={`${currentPage === num ? "bg-Bright_Blue text-white " : ""
                } font-bold text-black  hover:text-white  dark:text-white ease-in duration-300 h-[40px] w-[40px] rounded-[8px] hover:bg-Bright_Blue`}
              onClick={() => setCurrentPage(num)}
            >
              {num + 1}
            </button>
          ))}
        </div>
        <button
          disabled={totalNumberOfPage.length === currentPage + 1}
          className="border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20 p-2 h-[40px] w-[40px] leading-[21px] h-[40px] w-[40px] flex  justify-center items-center "
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
        >
          {"->"}
        </button>
      </div>
    </>
  );
};
