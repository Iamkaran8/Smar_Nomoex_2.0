
import { HeroSection } from "../components/HomeModules/HeroSection";
import { PortfolioOverview } from "../components/HomeModules/PortfolioOverview";
import { FeaturedPosts } from "../components/HomeModules/FeaturedPosts";
import { ExploreMarket } from "../components/HomeModules/ExploreMarket";
import { Navbar } from "../components/Common/Navbar";
import { MainFooter } from "../components/Common/MainFooter";
import { CopyRight } from "../components/Common/CopyRight";

export const Home = () => {
    return (
        <>
            <div className="dark:bg-black dark:text-white relative dark:z-10">
                <Navbar/>
                <HeroSection />
                <ExploreMarket/>
                <PortfolioOverview />
                <FeaturedPosts/>
                < MainFooter/>
                <CopyRight/>
            </div>
        </>
    );
};
