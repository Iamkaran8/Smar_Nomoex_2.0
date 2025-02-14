import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import portfolio from "../../assets/porfolio.png";
import elipse from "../../assets/elipse.png";
import elipse_dark from "../../assets/ellipse_dark.png";
import manage_your_portfolio from "../../assets/manage_your_portfolio.png";
import recurring_buys from "../../assets/recurring_buys.png";
import mobile_apps from "../../assets/mobile_apps.png";
import manage_your_portfolio_white from "../../assets/manage_your_portfolio_white.png";
import recurring_buys_white from "../../assets/recurring_buys_white.png";
import mobile_apps_white from "../../assets/mobile_apps_white.png";
import { FeatureProps } from "../../model";

const features: FeatureProps[] = [
    {
        icon: manage_your_portfolio,
        icon_white: manage_your_portfolio_white,
        title: "Manage your portfolio",
        description: "Buy and sell popular digital currencies, keep track of them in one place.",
    },
    {
        icon: recurring_buys,
        icon_white: recurring_buys_white,
        title: "Recurring buys",
        description: "Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.",
    },
    {
        icon: mobile_apps,
        icon_white: mobile_apps_white,
        title: "Mobile apps",
        description: "Stay on top of the markets with our trading app for Android or iOS.",
    },
];

export const PortfolioOverview = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="flex gap-10 items-center flex-wrap md:flex-nowrap py-14 lg:py-20">
            {/* Left Side */}
            <div className="w-full md:w-[45%] lg:w-1/2 relative">
                <img className="absolute -z-10 portfolio_bg" src={isDark ? elipse_dark : elipse} alt="background elipse" />
                <img className="py-10" src={portfolio} alt="portfolio overview" />
            </div>

            {/* Right Side */}
            <div className="w-full md:w-[55%] lg:w-1/2 md:text-left text-center">
                <h2>Create your cryptocurrency portfolio today</h2>
                <p className="lg:pr-24">Our trading app has a variety of features that make it the best place to start trading.</p>

                {features.map((item, index) => (<>
                    <div key={index} className="flex items-center gap-5 my-5 py-5 md:py-0 md:px-0 px-3 dark:bg-[#0e0e0e] dark:md:bg-transparent shadow rounded-lg md:shadow-none group flex-col md:flex-row" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} >
                        {/* Circular Icon Container */}
                        <div className="w-16 h-16 aspect-square rounded-full flex items-center justify-center shadow group-hover:bg-[#0052FF] dark:bg-[#EBF0F01A] transition-all duration-300">
                            <img src={hoveredIndex === index ? item.icon_white : item.icon} className="w-5 object-contain" alt={item.title} /></div>
                        {/* Feature Text */}
                        <div>
                            <h3>{item.title}</h3>
                            <p className="lg:pr-24">{item.description}</p>
                        </div>
                    </div>
                </>
                ))}
            </div>
        </div>
    );
};

