import NomoexLogo from "../../../assets/Nomoex_Full_logo.svg";
import { Link } from "react-router-dom";

export const SideNavbar = () => {
  const Navigation = [
    {
      id: 1,
      name: "Dashboard",
      icon: (color : string) => <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color} ><path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70v240L310-310q35 33 78.5 51.5T480-240Zm0 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>,
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Assets",
      icon: (color : string)=> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color} ><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z"/></svg>,
      link: "",
    },
    {
      id: 3,
      name: "Trade",
      icon: (color : string) => <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color} ><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg> ,
      link: "",
    },
    {
      id: 4,
      name: "Exchange",
      icon: (color : string)=> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color} ><path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z"/></svg>,
      link: "",
    },
    {
      id: 5,
      name: "Pay",
      icon: (color : string)=> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"  fill={color} ><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg>,
      link: "",
    },
    {
      id: 6,
      name: "Transactions",
      icon: (color:string)=><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"  fill={color}><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>,
      link: "",
    },
    {
      id: 7,
      name: "Updates",
      icon: (color:string) => <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color} ><path d="M680-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200Zm-400-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-400q0-33-23.5-56.5T280-480q-33 0-56.5 23.5T200-400q0 33 23.5 56.5T280-320Zm160-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-720q0-33-23.5-56.5T440-800q-33 0-56.5 23.5T360-720q0 33 23.5 56.5T440-640Zm240 360ZM280-400Zm160-320Z"/></svg>,
      link: "",
    },
  ];
  return (
    <>
      <div className="p-4 h-[100vh] sticky top-0">
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
                className="flex gap-3 w-[100%] items-center p-3 hover:bg-Pale_Ice_Blue dark:hover:bg-Light_Cyan_Gray rounded-[8px] group "
              >
               <a href="#" className="group-hover:text-Bright_Blue text-[#5D5D5B] dark:group-hover:text-white " > {item.icon("currentColor")}</a>
                <span className="group-hover:text-black text-Slate_Gray text-[14px] leading-[21px] font-bold dark:group-hover:text-white">
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
