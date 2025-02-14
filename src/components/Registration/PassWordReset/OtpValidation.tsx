import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


interface UserDataType {
  email: string;
}

export const OtpValidation = ()=>{
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
          <h2 className=" text-[35px] font-bold leading-[45px]  pt-2">
            Enter OTP Send on <br/>
            karansenthil@gmail.com
          </h2>

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
          </form>
          <ToastContainer />
        </div>
      </>
    )
}