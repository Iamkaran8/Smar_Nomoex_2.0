import { useState } from "react";
import { NavButtons } from "../NavButtons";
import { LoginDetails } from "./LoginDetails";
import { SecurityCredentials } from "./SecurityCredentials";

export const Security = () => {
  const renderComponent = () => {
    {
      switch (currentNav) {
        case "Profile":
          return (
            <>
              <LoginDetails /> <SecurityCredentials />
            </>
          );
        case "Security":
          return <SecurityCredentials />;
      }
    }
  };
  const [currentNav, setCurrentNav] = useState<string>("Profile");
  return (
    <>
      {/* Navbar */}
      <NavButtons currentNav={currentNav} setCurrentNav={setCurrentNav} />

      {/* Based Out The Condition It Will Display Active Component */}
      {renderComponent()}

      <div className="flex justify-between p-4">
        <button className="bg-Bright_Blue text-white px-5 rounded-[8px] text-[14px] leading-[21px] py-2 hidden md:block lg:block">
          Update Settings
        </button>
        <button className=" text-Bright_Blue border-[1px] dark:border-Light_Cyan_Gray px-5 py-2 rounded-[8px] dark:bg-Light_Cyan_Gray text-[14px] font-bold dark:text-white leading-[21px] flex  justify-center items-center ">
          Cancel
        </button>
      </div>
    </>
  );
};
