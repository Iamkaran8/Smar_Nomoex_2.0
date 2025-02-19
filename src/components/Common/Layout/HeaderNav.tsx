import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileImg from "../../../assets//Dummy_images/profile_pic.png";

export const HeaderNav = () => {
  return (
    <>
      <div className="border-[0px] md:border-b-[1px]  border-b-Soft_Gray cont flex justify-between py-4 dark:border-Soft_Gray_20">
        <div className=" flex items-center">
          <h2 className="text-[24px] mb-0 hidden md:block lg:block">
            Dashboard
          </h2>
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
