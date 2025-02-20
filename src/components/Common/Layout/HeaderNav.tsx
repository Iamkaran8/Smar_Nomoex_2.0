import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileImg from "../../../assets//Dummy_images/profile_pic.png";

export const HeaderNav = ({ title }: { title: string }) => {
  return (
    <>
      <div className="border-[0px] md:border-b-[1px] sticky top-0 border-b-Soft_Gray flex justify-between p-4 dark:border-Soft_Gray_20 bg-white dark:bg-black">
        <div className=" flex items-center">
          <h2 className="text-[24px] mb-0 hidden md:block lg:block">
            {title}
          </h2>
          <div className="md:hidden block">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="bg-Bright_Blue text-white px-5 rounded-[8px] text-[14px] leading-[21px] py-2 hidden md:block lg:block">
            Deposit
          </button>
          <div className="hidden md:block lg:block">
            <button className="border-[1px] border-Soft_Gray rounded-[8px] dark:border-Soft_Gray_20 p-2 leading-[21px] h-[40px] w-[40px] flex  justify-center items-center ">
              <IoMdNotificationsOutline />
            </button>
          </div>

          <img
            className="h-[40px] w-[40x] rounded-full"
            src={ProfileImg}
            alt="Profile Image"
          />
        </div>
      </div>
    </>
  );
};
