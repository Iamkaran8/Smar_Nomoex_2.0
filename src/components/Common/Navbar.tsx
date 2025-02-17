import { Link } from "react-router-dom";
import { Navlinks } from "../Utilities/Urls";
import { ButtonBlue, ButtonTransparent } from "./Button";
import nomoex from "../../assets/Nomoex_Full_logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="dark:z-20 z-20 shadow-sm bg-transparent bg-white dark:bg-black sticky border-b-[1px] border-Soft_Gray_20 top-0">
      <div className="cont py-5">
        <div className="flex justify-between items-center">
          <div>
            <img src={nomoex} className="w-[120px]" alt="nomoex" />
          </div>

          {/* Laptop Menu - Only Visible For tablet And Mobile */}
          <div className="hidden lg:block">
            <div className="flex gap-5 items-center ">
              <ul className="flex gap-7">
                {Navlinks.map((items, index) => (
                  <li key={index}>
                    <Link className="text-Slate_Gray dark:hover:text-white hover:text-black transition-all duration-300	" to={items.url}>
                      <h5>{items.name}</h5>
                    </Link>
                  </li>
                ))}
              </ul>
              <ButtonTransparent border="Soft_Gray" title="Sign in" link="/signin" />
              <ButtonBlue title="Register" link="/signup" />
              <div></div>
            </div>
          </div>

          {/* Tablet Menu - Only Visible For tablet And Mobile */}
          <div className="block lg:hidden md:block relative">
            <button onClick={handleChange} className={`bg-transparent  border-[1px] border-Soft_Gray px-5 py-2 rounded-[8px] font-bold`} >
              <RxHamburgerMenu />
            </button>
            {isOpen ? (
              <div className="absolute w-[400px] -right-5 mt-5  bg-black h-screen">
                <div className="flex flex-col gap-5 items-center ">
                  <ul className="flex flex-col text-center gap-7 mt-5 py-3">
                    {Navlinks.map((items, index) => (
                      <li key={index}>
                        <Link className=" text-Slate_Gray" to={items.url}>
                          <h5 className="text-[20px]">{items.name}</h5>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ButtonTransparent border="Soft_Gray" title="Sign in" link="/signin" />
                  <ButtonBlue title="Register" link="/signup" />
                  <div></div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
