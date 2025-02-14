import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

interface UserDataType {
  email: string;
}

export const PassWordResetForm = () => {
  //User Form Data
  const [userData, setUserData] = useState<UserDataType>({
    email: "",
  });

  // Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Input Validations
    let isValid = true;

    if (!userData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Enter a Valid Email Address");
      isValid = false;
    }

    if (!isValid) return;

    console.log("Form submitted successfully:", userData);
  };

  //User Data Storing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className=" text-left  ">
        <img
          className=" hidden md:block py-5 h-[85px] mb-10"
          src={Nomoex_Logo}
          alt="Nomoex_Icon"
        />
        <h2 className=" text-[42px] font-bold leading[52px] text-Bright_Blue pt-2">
          Forgot password?
        </h2>
        <p className="text-[14px] text-Slate_Gray dark:text-white">
          Enter your Email we will send you a link to reset your password
        </p>
        <form
          className="lg:w-[100%] md:w-[100%] flex flex-col gap-5 mt-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* Email Address Field */}
          <div className="flex flex-col gap-2 relative ">
            <label htmlFor="email" className="font-bold ml-[2px]">
              Email
            </label>
            <input
              name="email"
              id="email"
              className=" dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type="email"
              placeholder="Your Email"
              onChange={handleChange}
            />
            <span className="absolute right-[3%]  top-[58%] h-[18px] w-[18px] dark:text-white text-black">
              <MdMailOutline />
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-Bright_Blue rounded-[8px] text-white py-4 mt-5 font-bold"
          >
            Send
          </button>
        </form>
        <div className=" text-center py-[25px] flex  flex-col gap-[15px]">
          <div className="flex items-center justify-center my-4">
            <div className="w-1/4 border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="w-1/4 border-t border-gray-300"></div>
          </div>
          <Link
            to={"/signin"}
            type="submit"
            className=" border-[1px] dark:text-white text-black border-Bright_Blue rounded-[8px] font-bold py-4 mt-5"
          >
            Back to Login
          </Link>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
