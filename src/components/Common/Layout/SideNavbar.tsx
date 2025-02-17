import { FaArrowRightArrowLeft, FaArrowTrendUp } from "react-icons/fa6";
import NomoexLogo from "../../../assets/Nomoex_Full_logo.svg";

// import dashboardicon from "../../../assets/dashboardicon.svg";
import { IoMdCard } from "react-icons/io";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { SiDatabricks } from "react-icons/si";
import { Link } from "react-router-dom";

export const SideNavbar = () => {
  const Navigation = [
    {
      id: 1,
      name: "Dashboard",
      icon: <MdOutlineIncompleteCircle />,
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Assets",
      icon: <SiDatabricks />,
      link: "",
    },
    {
      id: 3,
      name: "Trade",
      icon: <FaArrowTrendUp />,
      link: "",
    },
    {
      id: 4,
      name: "Exchange",
      icon: <FaArrowRightArrowLeft />,
      link: "",
    },
    {
      id: 5,
      name: "Pay",
      icon: <IoMdCard />,
      link: "",
    },
    {
      id: 6,
      name: "Transactions",
      icon: <SiDatabricks />,
      link: "",
    },
    {
      id: 7,
      name: "Updates",
      icon: <FaArrowTrendUp />,
      link: "",
    },
  ];
  return (
    <>
      <div className="py-4 cont">
        <div>
          <img
            className="h-[36px] w-[150px]"
            src={NomoexLogo}
            alt="Nomoex_Logo"
          />
        </div>
        <div className="mt-10">
          <p className="text-Slate_Gray text-[14px]">Navigation</p>

          <div className="flex flex-col">
            {Navigation.map((item) => (
              <Link
                to={item.link}
                className="flex gap-3 w-[70%] items-center p-3 hover:bg-Pale_Ice_Blue rounded-[8px] group "
              >
                {/* <img src={item.icon} alt={item.name} /> */}

                <p className="leading-[0px]">{item.icon}</p>
                <span className="group-hover:text-black text-Slate_Gray text-[14px] leading-[21px] font-bold">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
