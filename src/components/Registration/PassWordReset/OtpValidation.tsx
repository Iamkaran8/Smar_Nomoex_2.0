import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";



export const OtpValidation = () => {
  
  return (
    <>
      <div className=" text-left  ">
        <img
          className=" hidden md:block py-5 h-[85px] mb-10"
          src={Nomoex_Logo}
          alt="Nomoex_Icon"
        />
        <h2 className=" text-[35px] font-bold leading-[45px]  pt-2">
          Enter OTP Send on <br />
          karansenthil@gmail.com
        </h2>

        <form
          className="lg:w-[100%] md:w-[100%] flex flex-col gap-5 mt-5"
        >
          {/* Otp Verification Field*/}
          <div className="flex w-[70%]   gap-5 relative ">
            <input
              className="w-[25%] bg-Soft_Gray dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type="text"
            />
            <input
              className="w-[25%] bg-Soft_Gray dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type="text"
            />
            <input
              className=" w-[25%] bg-Soft_Gray dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type="text"
            />
            <input
              className="w-[25%] bg-Soft_Gray dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type="text"
            />
          </div>
          <div className="flex py-3 gap-2 relative">
            <p className="font-bold">Didn't receive ? </p>
            <Link
              to={"/forget-password"}
              className="text-Bright_Blue font-bold text-[14px]"
            >
              Request again
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
