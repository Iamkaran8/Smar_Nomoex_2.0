import { useSelector } from "react-redux";
import { Socials } from "../Utilities/Socials";
import { NewsletterPlain } from "./NewsletterVariants";
import { RootState } from "../../redux/store";
import { Footerurls } from "../Utilities/Urls";
import { Link } from "react-router-dom";
import { ThemeBtn } from "./ThemeBtn";


export const MainFooter = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    return (
        <div className="border-t border-Soft_Gray_20">
            <div className="cont">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 pt-14 lg:pt-20">
                    <div className=" w-full lg:w-1/3 flex justify-between flex-col md:flex-row lg:flex-col lg:items-start items-center text-center md:text-start">
                        <div>
                            <h3>Get crypto news every day</h3>
                            <NewsletterPlain />
                            <ThemeBtn/>
                        </div>
                        <div>
                            <h3>Follow us</h3>
                            <div className="flex my-5">
                                {Socials.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <a href={item.url} key={index}>
                                            <div className="p-4 border border-transparent hover:border-Soft_Gray rounded-lg">
                                                <IconComponent
                                                    size={24} // Adjust size if needed
                                                    color={isDark ? item.color_dark : item.color_light} // Dynamic color
                                                />
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 flex">
                        {Footerurls.map((section, index) => (
                            <div key={index} className="w-1/4 hidden md:block">
                                <h3 className="mb-3">{section.title}</h3>
                                <ul className="flex flex-col gap-3">
                                    {section.links.map((link, idx) => (
                                        <li key={idx} className="text-Slate_Gray font-semibold cursor-pointer">
                                            <Link to={link.url}><h5>{link.name}</h5></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
