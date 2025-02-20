import { Link, useLocation } from "react-router-dom";
import { Navlinks } from "../Utilities/Urls";
import { ButtonBlue, ButtonTransparent } from "./Button";
import nomoex from "../../assets/Nomoex_Full_logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import useScreen from "../../customHooks/useScreen";
import { Popup } from "./PopupMenu";

export const Navbar = () => {
    const { isTablet, isMobile } = useScreen();
    const location = useLocation(); // Get the current route
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false); // ✅ Added missing state

    const handleChange = () => {
        setIsOpen((prev) => !prev);
    };

    // Show popup only when menu is open & on home page
    useEffect(() => {
        setShowPopup(location.pathname === "/" && isOpen);
    }, [location.pathname, isOpen]); // ✅ Added 'isOpen' to dependency array

    return (
        <div className="dark:z-20 z-20 shadow-sm bg-transparent bg-white dark:bg-black sticky border-b-[1px] border-Soft_Gray_20 top-0">
            <div className="cont py-5">
                <div className="flex justify-between items-center">
                    <div>
                        <img src={nomoex} className="w-[120px]" alt="nomoex" />
                    </div>

                    {/* Tablet Menu */}
                    {isTablet || isMobile ? (
                        <div className="block text-white relative">
                            <button
                                onClick={handleChange}
                                className="bg-transparent border-[1px] border-Soft_Gray px-5 py-2 rounded-[8px] font-bold"
                            >
                                <i className="text-black dark:text-white">
                                    <RxHamburgerMenu />
                                </i>
                            </button>
                            {showPopup && <Popup onClose={() => setIsOpen(false)} />}
                        </div>
                    ) : (
                        <div className="flex gap-5 items-center">
                            <ul className="flex gap-7">
                                {Navlinks.map((items, index) => (
                                    <li key={index}>
                                        <Link
                                            className="text-Slate_Gray dark:hover:text-white hover:text-black transition-all duration-300"
                                            to={items.url}
                                        >
                                            <h5>{items.name}</h5>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ButtonTransparent border="Soft_Gray" title="Sign in" link="/signin" />
                            <ButtonBlue title="Register" link="/signup" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
