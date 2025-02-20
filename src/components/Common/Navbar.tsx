import { Link, useLocation } from "react-router-dom";
import { ButtonBlue, ButtonTransparent } from "./Button";
import nomoex from "../../assets/Nomoex_Full_logo.svg";
import { useState, useEffect } from "react";
import useScreen from "../../customHooks/useScreen";
import { useSelector } from "react-redux";
import { NavLinks } from "../../redux/slices/NavmenusSlice";
import { createPortal } from "react-dom";
import { Dark } from "../../redux/slices/ThemeSlice";

const Popup: React.FC<{ onClose: () => void; Navlinks: any[] }> = ({ onClose, Navlinks }) => {
    const isDark = useSelector(Dark);

    return createPortal(
        <div className={`fixed inset-0 z-50 ${isDark ? "dark" : ""}`}>
            <div className="fixed inset-0 z-50 bg-white dark:bg-black w-full h-full">
                <div className="cont py-5">
                    <div className="flex justify-between items-center">
                        <img src={nomoex} className="w-[120px]" alt="nomoex" />
                        <button onClick={onClose} className="border border-Soft_Gray px-5 py-2 rounded-lg font-bold text-black dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        </button>
                    </div>
                    <ul className="py-5">
                        {Navlinks.map((item, index) => (
                            <li key={index} className="py-5">
                                <Link className="text-Slate_Gray dark:hover:text-white hover:text-black transition-all duration-300" to={item.url}>
                                    <h5 className="text-[18px]">{item.name}</h5>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>,
        document.body
    );
};

export const Navbar = () => {
    const { isTablet, isMobile } = useScreen();
    const Navlinks = useSelector(NavLinks);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <div className="dark:z-20 z-20 shadow-sm bg-white dark:bg-black sticky border-b-[1px] border-Soft_Gray_20 top-0">
            <div className="cont py-5">
                <div className="flex justify-between items-center">
                    <img src={nomoex} className="w-[120px]" alt="nomoex" />

                    {isTablet || isMobile ? (
                        <button onClick={() => setIsOpen(!isOpen)} className="border-[1px] border-Soft_Gray px-5 py-2 rounded-[8px] font-bold dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                            </svg>
                        </button>
                    ) : (
                        <div className="flex gap-5 items-center">
                            <ul className="flex gap-7">
                                {Navlinks.map((item) => (
                                    <li key={item.url}>
                                        <Link
                                            className={`text-Slate_Gray transition-all duration-300 ${
                                                location.pathname === item.url ? "text-black font-bold dark:text-white" : "hover:text-black dark:hover:text-white"
                                            }`}
                                            to={item.url}
                                        >
                                            <h5>{item.name}</h5>
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
            {isOpen && <Popup Navlinks={Navlinks} onClose={() => setIsOpen(false)} />}
        </div>
    );
};
