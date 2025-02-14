
import { HeroSection } from "../components/HomeModules/HeroSection";
import { Navbar } from "../components/Utilities/Navbar";
import { PortfolioOverview } from "../components/HomeModules/PortfolioOverview";
import { FeaturedPosts } from "../components/HomeModules/FeaturedPosts";

export const Home = () => {
    return (
        <>
            <div className="dark:bg-black dark:text-white relative dark:z-10">
                <Navbar />
                <div className="cont">
                    <HeroSection />
                    <PortfolioOverview />
                </div>
                <FeaturedPosts/>
            </div>
        </>
    );
};
