import Nomoex_Logo from "../../../assets/Nomoex_Full_logo.svg";
import Email_icon from "../../../assets/Email.svg";
import Email_icon_White from "../../../assets/mail_white.svg";
import Show_Icon from "../../../assets/Show_iCon.svg";
import { useEffect, useState } from "react";
import { CountryDropDown } from "./CountryDropDown";
import { MdMailOutline } from "react-icons/md";

export const SignUpForm = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isSubmited, setSubmited] = useState<boolean>(false);

  const [isDisable, setDisable] = useState<boolean>(true);

  const showPass = () => {
    setIsShow((prev) => (prev = !prev));
  };

  interface UserDataType {
    name: string;
    password: string;
    email: string;
    country: string;
    mobileNo: string;
  }

  const [userData, setUserData] = useState<UserDataType>({
    name: "",
    password: "",
    email: "",
    country: "",
    mobileNo: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmited(true);
    if (
      userData.name ||
      userData.password ||
      userData.email ||
      userData.country ||
      userData.mobileNo === ""
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }

    setSubmited(true);
    console.log(userData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const isFormIncomplete =
      !userData.name ||
      !userData.password ||
      !userData.email ||
      !userData.country ||
      !userData.mobileNo;

    setDisable(isFormIncomplete); // Disable when any field is empty
  }, [userData]);

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
              className="border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-Black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 dark:focus:border-Bright_Blue focus:outline-none focus:border-Bright_Blue  text-[14px] font-medium "
              type="text"
              placeholder=""
              value={userData.name}
              onChange={handleChange}
            />
            {isSubmited && userData.name == "" ? (
              <span className="text-[12px] text-Red font-bold ml-1">
                Enter Your Name
              </span>
            ) : (
              ""
            )}
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
              className="border-[1px] border-Soft_Gray dark:focus:border-Bright_Blue dark:border-Soft_Gray_20 dark:bg-Black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type={isShow ? "password" : "text"}
              placeholder=""
            />
            <img
              onClick={() => showPass()}
              className="absolute right-[3%] top-[58%] h-[18px] w-[18px]"
              src={Show_Icon}
              alt="Show_Icon"
            />
          </div>
          {isSubmited && userData.password == "" ? (
            <span className="text-[12px] text-Red font-bold ml-1 -mt-2">
              Pls Enter Pasword
            </span>
          ) : (
            ""
          )}

          {/* Email Address Field */}
          <div className="flex flex-col gap-2 relative ">
            <label htmlFor="email" className="font-bold ml-[2px]">
              Email address
            </label>
            <input
              name="email"
              id="email"
              className=" dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-Black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] font-medium "
              type="email"
              placeholder=""
              onChange={handleChange}
            />
            {/* <img
              className="absolute right-[3%]  top-[58%] h-[18px] w-[18px]"
              src={Email_icon_White}
              alt="Email_icon"
            /> */}
            <span className="absolute right-[3%]  top-[58%] h-[18px] w-[18px] dark:text-White text-Black">
              <MdMailOutline />
            </span>
          </div>
          {isSubmited && userData.email == "" ? (
            <span className="text-[12px] text-Red font-bold ml-1 -mt-2">
              Pls Enter Email
            </span>
          ) : (
            ""
          )}

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
            {isSubmited && userData.country == "" ? (
              <span className="text-[12px] text-Red font-bold ml-1">
                Select Country
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Mobile Number Field */}
          <div className="flex flex-col gap-2  ">
            <label htmlFor="Mobile_num" className="font-bold ml-[2px]">
              Mobile No.
            </label>
            <input
              name="mobileNo"
              id="Mobile_num"
              className=" border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-Black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue dark:focus:border-Bright_Blue text-[14px] font-medium "
              type="text"
              placeholder=""
              value={userData.mobileNo}
              onChange={handleChange}
            />
            {isSubmited && userData.mobileNo == "" ? (
              <span className="text-[12px] text-Red font-bold ml-1">
                Pls Enter Mobile No
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={isDisable}
            type="submit"
            className="bg-Bright_Blue rounded-[8px] text-White py-4 mt-5"
          >
            Continue
          </button>
        </form>
        <div className=" text-center py-[25px] flex  flex-col gap-[15px]">
          <p className="dark:text-White text-Black text-[14px] font-bold">
            Already registered?{" "}
            <span className="text-Bright_Blue font-bold">Sign In</span>
          </p>
          <p className="dark:text-White text-Black text-[14px] font-bold">
            By continue, you agree to our{" "}
            <span className="text-Bright_Blue">Terms and conditions </span>&
            that you have read our
            <span className="text-Bright_Blue"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
};
