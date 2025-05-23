import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../../redux/store";
import { addForgetPasswordmail, sendOtp } from "../../../redux/slices/AuthSlice";

export const PassWordResetForm = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(
    (state: RootState) => state.auth.forgetPasswordMail
  );

  // Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Input Validations
    let isValid = true;

    if (!userEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Enter a Valid Email Address");
      isValid = false;
    }

    if (!isValid) return;

    console.log("Form submitted successfully:", userEmail);
    dispatch(sendOtp())
  };

  //User Data Storing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(addForgetPasswordmail(value));
    
  };

  return (
    <>
      <div className="dark:bg-black rounded-t-[20px] bg-white   px-5 w-[100%] lg:w-[50%]  md:w-[100%] lg:w-[50%] md:px-[8%] text-center py-10 z-10 ">
        <div className="text-left">
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
              <span className="absolute right-[3%]  top-[58%] ">
              <svg className="dark:text-white text-black" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
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
      </div>
    </>
  );
};
