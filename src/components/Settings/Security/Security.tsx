import { LoginDetails } from "./LoginDetails";
import { SecurityCredentials } from "./SecurityCredentials";

export const Security = () => {
  return (
    <>
      <div className="flex p-3 gap-1 flex-wrap border border-Soft_Gray w-fit rounded-lg">
        <button className={`px-4 py-2 dark:hover:bg-Light_Cyan_Gray rounded-md transition font-semibold bg-transparent text-black dark:hover:text-white    text-white }`}>
          Profile
        </button>
        <button className={`px-4 py-2 rounded-md transition font-semibold bg-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black bg-black dark:bg-white text-white dark:text-black"  }`}>
          coin
        </button>
        <button className={`px-4 py-2 rounded-md transition font-semibold bg-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black bg-black dark:bg-white text-white dark:text-black"   }`} >
          coin
        </button>
        <button className={`px-4 py-2 rounded-md transition font-semibold bg-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black bg-black dark:bg-white text-white dark:text-black"   }`}>
          coin
        </button>
      </div>
      <LoginDetails />
      <SecurityCredentials />
      <div className="flex justify-between p-4">
        <button className="bg-Bright_Blue text-white px-5 rounded-[8px] text-[14px] leading-[21px] py-2 hidden md:block lg:block">
          Update Settings
        </button>
        <button className=" text-Bright_Blue border-[1px] dark:border-Light_Cyan_Gray px-5 py-2 rounded-[8px] dark:bg-Light_Cyan_Gray text-[14px] font-bold dark:text-white leading-[21px] flex  justify-center items-center ">
          Cancel
        </button>
      </div>
    </>
  );
};
