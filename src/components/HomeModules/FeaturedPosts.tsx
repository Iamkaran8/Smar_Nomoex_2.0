import { useState, useEffect } from "react";
import featured from "../../assets/featured.png";

const articles = [
    {
        category: "How-to Guides",
        title: "A Complete Guide to Making Passive Income With Lending",
        description: "Chart of the to the MetaverseTrading volume",
        posted_by: "Brijanohan Mallick",
        date: "01 Feb 22",
        difficulty: "Easy",
        image: featured,
    },
    {
        category: "How-to Guides",
        title: "The Ultimate Dummy’s Guide to Passive Income with Staking",
        description: "Japanese investment bank Nomura is launching",
        posted_by: "Praskovya Dubinina",
        date: "23 Mar 22",
        difficulty: "Experienced",
        image: featured,
    },
    {
        category: "How-to Guides",
        title: "How To Give Crypto as a Gift, and What Are The Best Crypto Gift Cards?",
        description: "Gifting cryptocurrency has become an increasingly",
        posted_by: "Homura Yunosuke",
        date: "19 Jun 22",
        difficulty: "Easy",
        image: featured,
    },
    {
        category: "How-to Guides",
        title: "How To Give Crypto as a Gift, and What Are The Best Crypto Gift Cards?",
        description: "Gifting cryptocurrency has become an increasingly",
        posted_by: "Homura Yunosuke",
        date: "19 Jun 22",
        difficulty: "Easy",
        image: featured,
    },
    {
        category: "How-to Guides",
        title: "How To Give Crypto as a Gift, and What Are The Best Crypto Gift Cards?",
        description: "Gifting cryptocurrency has become an increasingly",
        posted_by: "Homura Yunosuke",
        date: "19 Jun 22",
        difficulty: "Easy",
        image: featured,
    }
];

export const FeaturedPosts = () => {
    const [itemsToShow, setItemsToShow] = useState(3);

    // Function to update items based on screen size
    const updateItemsToShow = () => {
        if (window.innerWidth < 640) {
            setItemsToShow(1); // Mobile
        } else if (window.innerWidth < 1024) {
            setItemsToShow(2); // Tablet
        } else {
            setItemsToShow(3); // Laptop & Desktop
        }
    };

    // Run once on mount & update on resize
    useEffect(() => {
        updateItemsToShow(); // Initial check
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    return (
        <div className="bg-[#ebf0f01a] py-14 lg:py-20 text-center">
            <div className="cont">
                <h2>The week’s biggest crypto news, sent right to your inbox</h2>
                <p className="text-Slate_Gray">Start with these guides and explainers</p>
                <p className="font-bold text-Bright_Blue py-2 cursor-pointer">See all 148 articles</p>

                {/* Article Cards Section */}
                <div className="flex justify-center gap-5 pt-5 md:pt-10">
                    {articles.slice(0, itemsToShow).map((article, index) => (
                        <div key={index} className="bg-white dark:bg-black text-start rounded-lg w-full md:w-1/2 lg:w-1/3 p-5 border border-[#CFDBD5] dark:border-Soft_Gray_20">

                            {/* Background Image */}
                            <div className="h-48 rounded-lg p-3 text-end" style={{ backgroundImage: `url(${article.image})`, backgroundSize: "cover", backgroundPosition: "center", }} >
                                <span className="text-xs font-semibold px-4 py-2 rounded-md bg-Bright_Blue text-white"> {article.difficulty} </span>
                            </div>

                            {/* Article Details */}
                            <div className="pt-2">
                                <span className="text-sm text-Bright_Blue font-bold">{article.category}</span>
                                <h3 className="font-bold text-lg mt-2">{article.title}</h3>
                                <p className="text-Slate_Gray text-sm my-3">{article.description}</p>
                                <div className="flex justify-between text-xs">
                                    <span>Posted by<span className="text-Bright_Blue"> {article.posted_by}</span></span>
                                    <span className="font-bold">{article.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
