import { ReactNode } from "react";
import { CopyRight } from "../CopyRight";
import { MainFooter } from "../MainFooter";
import { Navbar } from "../Navbar";

interface PageLayoutProps {
    Pagecontent: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ Pagecontent }) => {
    return (
        <div className="dark:bg-black dark:text-white relative dark:z-10">
            <Navbar />
            {Pagecontent}
            <MainFooter />
            <CopyRight />
        </div>
    );
};
