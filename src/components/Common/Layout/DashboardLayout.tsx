import { ReactNode } from "react";
import { CopyRight } from "../CopyRight";
import { HeaderNav } from "../DashNav";
import { SideNavbar } from "../DashSidebar";
import { MobileHeader } from "../DashFooter";

interface LayOutProps {
  dynamic: ReactNode;
  title: string;
}

export const DashboardLayout = ({ dynamic, title }: LayOutProps) => {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white flex flex-col md:flex-row min-h-screen">
        {/* Side Navbar */}
        <div className="w-[24%] hidden md:block xl:w-[250px] border-r-[1px] border-r-Soft_Gray dark:border-Soft_Gray_20">
          <SideNavbar />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[76%] lg:w-[85%] xl:w-[1720px] flex flex-col">
          <HeaderNav title={title} />

          {/* Content Wrapper - Pushes Footer Down */}
          <div className="flex-grow">{dynamic}</div>

          {/* Sticky Footer */}
          <div className="mt-auto">
            <CopyRight />
          </div>
        </div>
      </div>

      <MobileHeader />
    </>
  );
};
