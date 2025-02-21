
import { HeroSection } from "../components/HomeModules/HeroSection";
import { PortfolioOverview } from "../components/HomeModules/PortfolioOverview";
import { FeaturedPosts } from "../components/HomeModules/FeaturedPosts";
import { ExploreMarket } from "../components/HomeModules/ExploreMarket";
import { LearnAboutBlockChain } from "../components/HomeModules/LearnAboutBlockChain";
import { PageLayout } from "../components/Common/Layout/PagesLayout";

const CurrentPage = () => {
    return (
        <>
            <HeroSection />
            <ExploreMarket />
            <PortfolioOverview />
            <FeaturedPosts />
            <LearnAboutBlockChain />
        </>
    )
}

export const Home = () => {
    return (
        <>
            <PageLayout Pagecontent = {<CurrentPage/>} />
        </>
    );
};
