import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";

interface UserDataType {
  password: string;
  email: string;
}

export const SigninForm = () => {
  const [isShow, setIsShow] = useState<boolean>(true);

  const showPass = () => {
    setIsShow((prev) => (prev = !prev));
  };

  //User Form Data
  const [userData, setUserData] = useState<UserDataType>({
    password: "",
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

    if (!userData.password.match(/^[a-zA-Z0-9]+$/)) {
      toast.error("Enter a Valid Password");
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
    <div className="dark:bg-black rounded-t-[20px] bg-white  px-5 w-[100%] lg:w-[50%]  md:w-[100%] lg:w-[50%] md:px-[8%] text-center py-10 z-10 ">
      <div className="text-left ">
        <img
          className=" hidden md:block py-5 h-[85px]"
          src={Nomoex_Logo}
          alt="Nomoex_Icon"
        />
        <h2 className="text-[42px] font-bold leading[52px]">Sign In</h2>
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

          {/*  Password Field */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="create_pass" className="font-bold ml-[2px]">
              Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              id="create_pass"
              className="border-[1px] border-Soft_Gray dark:focus:border-Bright_Blue dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type={isShow ? "password" : "text"}
              placeholder="Enter your Password"
            />
            <span
              onClick={() => showPass()}
              className="absolute cursor-pointer right-[3%] top-[58%] h-[18px] w-[18px]"
            >
              {isShow ? <GoEyeClosed /> : <GoEye />}
            </span>
          </div>

          {/*  Password Reset Link */}
          <div className="flex justify-end gap-2 relative">
          <Link  to={'/forget-password'} className="text-Bright_Blue font-bold text-[14px]">Forget Password?</Link>
          </div>
          

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-Bright_Blue rounded-[8px] text-white py-4 mt-5"
          >
            Sign in
          </button>
        </form>
        <div className=" text-center py-[25px] flex  flex-col gap-[15px]">
          <p className="dark:text-white text-black text-[14px] font-bold">
            You don’t have an account?{" "}
            <span className="text-Bright_Blue font-bold">
              <Link to={"/signup"}>Create account </Link>
            </span>
          </p>
          <div className="flex items-center justify-center my-4">
            <div className="w-1/4 border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="w-1/4 border-t border-gray-300"></div>
          </div>

          <p className="dark:text-white text-black text-[14px] font-bold">
            By Providing, I accept{" "}
            <span className="text-Bright_Blue font-bold">
              T&C, Privacy policy
            </span>
          </p>
        </div>
        <ToastContainer />
      </div>
      </div>
    </>
  );
};
