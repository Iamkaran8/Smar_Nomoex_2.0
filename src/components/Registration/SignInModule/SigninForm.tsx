import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { addSignInUserData } from "../../../redux/slices/AuthSlice";

export const SigninForm = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const userData = useSelector((state: RootState) => state.auth.userSignInData);
  const dispatch = useDispatch();

  const showPass = () => {
    setIsShow((prev) => (prev = !prev));
  };

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
    dispatch(addSignInUserData({ name, value }));
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
                <svg
                  className="dark:text-white text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="currentColor"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
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
                {isShow ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16px"
                    viewBox="0 -960 960 960"
                    width="16px"
                    fill="currentColor"
                  >
                    <path d="m637-425-62-62q4-38-23-65.5T487-576l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833-480q-49-101-144.5-158.5T480-696q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912-480q-22 57-58.5 103.5T770-292Zm-2 202L638-220q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48-480q22-57 58-104t84-85L90-769l51-51 678 679-51 51ZM241-617q-35 28-65 61.5T127-480q49 101 144.5 158.5T480-264q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16px"
                    viewBox="0 -960 960 960"
                    width="16px"
                    fill="currentColor"
                  >
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                  </svg>
                )}
              </span>
            </div>

            {/*  Password Reset Link */}
            <div className="flex justify-end gap-2 relative">
              <Link
                to={"/forget-password"}
                className="text-Bright_Blue font-bold text-[14px]"
              >
                Forget Password?
              </Link>
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
