import OTPInput from "react-otp-input";
import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export const OtpValidation = () => {
  const [otp, setOtp] = useState("");
  const handleChange = (value: any) => {
    // Allow only numeric values
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  return (
    <>
      <div className="dark:bg-black rounded-t-[20px] bg-white md:h-[700px] lg:h-[100%]  px-5 w-[100%] lg:w-[50%]  md:w-[100%] lg:w-[50%] md:px-[8%] text-center py-10 z-10 ">
        <div className=" text-left  ">
          <img
            className=" hidden md:block py-5 h-[85px] mb-10"
            src={Nomoex_Logo}
            alt="Nomoex_Icon"
          />
          <h2 className=" text-[35px] font-bold leading-[45px]  pt-2">
            Enter OTP Send on 
            karansenthil@gmail.com
          </h2>

          <form className="lg:w-[100%] md:w-[100%] flex flex-col gap-5 mt-5">
            {/* Otp Verification Field*/}
            <div className="flex w-[100%]   gap-5 relative ">
              <OTPInput
                value={otp}
                onChange={handleChange} // Custom validation
                numInputs={4}
                shouldAutoFocus
                // isInputNum // Ensures numeric keyboard on mobile
                renderSeparator={<span>&nbsp;</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    style={{ width: "64px" }}
                    className="text-center bg-Soft_Gray dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] w-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium"
                    onKeyDown={(e) => {
                      if (!/^\d$/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault(); // Prevent non-numeric input
                      }
                    }}
                  />
                )}
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
      </div>
    </>
  );
};
