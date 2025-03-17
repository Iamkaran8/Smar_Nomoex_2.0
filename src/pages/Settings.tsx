import { CopyRight } from "../components/Common/CopyRight";
import { MobileHeader } from "../components/Common/DashFooter";
import { SideNavbar } from "../components/Common/DashSidebar";
import { Header } from "../components/Settings/Header";
import { Profile } from "../components/Settings/Profile/Profile";
import { Security } from "../components/Settings/Security/Security";

export const Settings = () => {
  return (
    <>
      <div className="bg-white  dark:bg-black text-black dark:text-white flex flex-col md:flex-row min-h-screen">
        {/* Side Navbar */}

        <div className="w-[24%] hidden md:block xl:w-[250px] border-r-[1px] border-r-Soft_Gray dark:border-Soft_Gray_20">
          <SideNavbar />
        </div>

        {/* Main Content */}
        <div className="w-full  md:w-[76%] lg:w-[85%] xl:w-[1720px] flex flex-col">
          <Header />

          <div className="px-[2%]">
            <Security />
          </div>
          
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
