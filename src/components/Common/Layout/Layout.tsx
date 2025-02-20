import { ReactNode } from "react";
import { CopyRight } from "../CopyRight";
import { HeaderNav } from "./HeaderNav";
import { SideNavbar } from "./SideNavbar";

interface LayOutProps {
  dynamic: ReactNode;
}

export const LayOut = ({ dynamic }: LayOutProps) => {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white flex flex-col md:flex-row ">
        {/* Side Navbar */}
        <div className="w-[24%] hidden md:block xl:w-[250px] border-r-[1px] border-r-Soft_Gray dark:border-Soft_Gray_20">
          <SideNavbar />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[76%] lg:w-[85%] xl:w-[1720px]">
          <HeaderNav />

          {dynamic}

          {/* Footer */}
          <div className="mt-3">
            <CopyRight />
          </div>
        </div>
      </div>
    </>
  );
};