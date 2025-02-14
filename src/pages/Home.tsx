
import { HeroSection } from "../components/HomeModules/HeroSection";
import { PortfolioOverview } from "../components/HomeModules/PortfolioOverview";
import { FeaturedPosts } from "../components/HomeModules/FeaturedPosts";
import { ExploreMarket } from "../components/HomeModules/ExploreMarket";
import { Navbar } from "../components/Common/Navbar";
import { MainFooter } from "../components/Common/MainFooter";

export const Home = () => {
    return (
        <>
            <div className="dark:bg-black dark:text-white relative dark:z-10">
                <Navbar />
                <div className="cont">
                    <HeroSection />
                    <ExploreMarket/>
                    <PortfolioOverview />
                </div>
                <FeaturedPosts/>
                < MainFooter/>
            </div>
        </>
    );
};
