import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import Show_Icon from "../../../assets/Show_iCon.svg";
import { useEffect, useState } from "react";
import { CountryDropDown } from "./CountryDropDown";
import { MdMailOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";

interface UserDataType {
  name: string;
  password: string;
  email: string;
  country: string;
  mobileNo: string;
}

export const SignUpForm = () => {
  const [isShow, setIsShow] = useState<boolean>(true);

  const showPass = () => {
    setIsShow((prev) => (prev = !prev));
  };

  //User Form Data
  const [userData, setUserData] = useState<UserDataType>({
    name: "",
    password: "",
    email: "",
    country: "",
    mobileNo: "",
  });

  // Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Input Validations
    let isValid = true;
    if (!userData.name.match(/^[a-zA-Z0-9]+$/)) {
      toast.error("Enter a Valid Username");
      isValid = false;
    }
    if (!userData.password.match(/^[a-zA-Z0-9]+$/)) {
      toast.error("Enter a Valid Password");
      isValid = false;
    }
    if (!userData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Enter a Valid Email Address");
      isValid = false;
    }
    if (userData.country === "") {
      toast.error("Enter a Valid Country");
      isValid = false;
    }
    if (!userData.mobileNo.match(/^\d{10}$/)) {
      toast.error("Enter a Valid 10-digit Mobile Number");
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
      <div className=" text-left ">
        <img
          className=" hidden md:block py-5 h-[85px]"
          src={Nomoex_Logo}
          alt="Nomoex_Icon"
        />
        <h2 className="text-[42px] font-bold leading[52px]">Sign up</h2>
        <form
          className="lg:w-[100%] md:w-[100%] flex flex-col gap-5 mt-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* User Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold ml-[2px]">
              Name
            </label>
            <input
              name="name"
              id="name"
              className="border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 dark:focus:border-Bright_Blue focus:outline-none focus:border-Bright_Blue  text-[14px] font-medium "
              type="text"
              placeholder=""
              value={userData.name}
              onChange={handleChange}
            />
          </div>

          {/* Create Password Field */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="create_pass" className="font-bold ml-[2px]">
              Create a password
            </label>
            <input
              onChange={handleChange}
              name="password"
              id="create_pass"
              className="border-[1px] border-Soft_Gray dark:focus:border-Bright_Blue dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type={isShow ? "password" : "text"}
              placeholder=""
            />
            <span
              onClick={() => showPass()}
              className="absolute cursor-pointer right-[3%] top-[58%] h-[18px] w-[18px]"
            >
              {isShow ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>

          {/* Email Address Field */}
          <div className="flex flex-col gap-2 relative ">
            <label htmlFor="email" className="font-bold ml-[2px]">
              Email address
            </label>
            <input
              name="email"
              id="email"
              className=" dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type="email"
              placeholder=""
              onChange={handleChange}
            />
            <span className="absolute right-[3%]  top-[58%] h-[18px] w-[18px] dark:text-white text-black">
              <MdMailOutline />
            </span>
          </div>

          {/* Country Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="country" className="font-bold ml-[2px]">
              Country
            </label>
            <div className="relative w-full    flex items-center">
              <CountryDropDown
                selectedCountrys={userData.country}
                setUserData={setUserData}
              />
            </div>
          </div>

          {/* Mobile Number Field */}
          <div className="flex flex-col gap-2  ">
            <label htmlFor="Mobile_num" className="font-bold ml-[2px]">
              Mobile No.
            </label>
            <input
              name="mobileNo"
              id="Mobile_num"
              className=" border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue dark:focus:border-Bright_Blue text-[14px] font-medium "
              type="text"
              placeholder=""
              value={userData.mobileNo}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-Bright_Blue rounded-[8px] text-white py-4 mt-5"
          >
            Continue
          </button>
        </form>
        <div className=" text-center py-[25px] flex  flex-col gap-[15px]">
          <p className="dark:text-white text-black text-[14px] font-bold">
            Already registered?{" "}
            <span className="text-Bright_Blue font-bold">Sign In</span>
          </p>
          <p className="dark:text-white text-black text-[14px] font-bold">
            By continue, you agree to our{" "}
            <span className="text-Bright_Blue">Terms and conditions </span>&
            that you have read our
            <span className="text-Bright_Blue"> Privacy Policy</span>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
