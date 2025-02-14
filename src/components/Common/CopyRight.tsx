import { Link } from "react-router-dom";
import useScreen from "../../customHooks/useScreen";
import { copyrighturl } from "../Utilities/Urls";
import { ThemeBtn } from "./ThemeBtn"
import { FaGlobeAmericas } from "react-icons/fa";


export const CopyRight = () => {
    const year = new Date().getFullYear();
    const { isMobile } = useScreen();
    return (
        <div className=" dark:bg-black border-t border-Soft_Gray_20">
            <div className="cont py-5 lg:py-2">
                <div className="flex items-center">
                    {/* urls */}
                    <div className="w-1/2 md:w-2/3 lg:w-1/2 flex gap-5">
                        <ul className="flex gap-3">
                            {isMobile ? (
                                // Show only the first element on mobile
                                copyrighturl.length > 0 && (
                                    <li className="font-semibold cursor-pointer">
                                        <Link to={copyrighturl[0].url}>
                                        <h4 className="flex gap-2 items-center">{copyrighturl[0].name}</h4>
                                        </Link>
                                    </li>
                                )
                            ) : (
                                // Show all elements on larger screens
                                copyrighturl.map((item, index) => (
                                    <li key={index} className="font-semibold cursor-pointer">
                                        <Link to={item.url}>
                                            <h5>{item.name}</h5>
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                        <p className="font-medium text-[14px] hidden md:block">© {year} All rights reserved</p>
                    </div>
                    {/* language and theme */}
                    <div className="w-1/2 md:w-1/3 lg:w-1/2 flex gap-2 justify-end">
                        <h4 className="flex gap-2 items-center">English <FaGlobeAmericas /></h4>
                        {isMobile || <ThemeBtn />}
                    </div>
                </div>
            </div>
        </div>
    )
}