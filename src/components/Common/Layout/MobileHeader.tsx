import { Link } from "react-router-dom";
import useScreen from "../../../customHooks/useScreen";

export const MobileHeader = () => {
  const { isMobile } = useScreen();
  const Navigation = [
    {
      id: 1,
      name: "Dashboard",
      icon: (color: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={color}
        >
          <path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70v240L310-310q35 33 78.5 51.5T480-240Zm0 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      ),
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Assets",
      icon: (color: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={color}
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z" />
        </svg>
      ),
      link: "/assets",
    },
    {
      id: 3,
      name: "Trade",
      icon: (color: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={color}
        >
          <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
        </svg>
      ),
      link: "/trade",
    },
    {
      id: 4,
      name: "Exchange",
      icon: (color: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={color}
        >
          <path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z" />
        </svg>
      ),
      link: "/exchange",
    },

  ];
  return (
    <>
      {isMobile && (
        <div className="fixed flex bottom-[0px] dark:bg-black bg-white w-[100%] py-5 border-t-[1px] border-t-Soft_Gray_20 gap-5 justify-evenly  ">
          {Navigation.map((nav) => (
            <Link to={nav.link} className="flex items-center justify-center ">
              <p className="text-black dark:text-white hover:text-Bright_Blue "> {nav.icon("currentColor")} </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
