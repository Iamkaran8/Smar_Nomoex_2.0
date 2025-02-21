import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PageLayout } from "../components/Common/Layout/PagesLayout";
import { selectcategories, selectcryptodata } from "../redux/slices/CryptoSlice"; // Import selector from Redux
import useScreen from "../customHooks/useScreen";
import { Pagination } from "../components/Dashboard/Pagination";

const CurrentPage = () => {
    const categories = useSelector(selectcategories); // Get categories from Redux
    const cryptodata = useSelector(selectcryptodata);
    const { isMobile } = useScreen();
    const [activeCategory, setActiveCategory] = useState<string | null>(null); // Initially null

    // Set the first category as active once categories are available
    useEffect(() => {
        if (categories.length > 0 && activeCategory === null) {
            setActiveCategory(categories[0]);
        }
    }, [categories, activeCategory]);

    const totalNumberOfPage = [...Array(Math.ceil(cryptodata.length / 2)).keys()];
    const [currentPage, setCurrentPage] = useState<number>(0);
    const Start = currentPage * 2;
    const End = Start + 2;
    const FilteredTransDetails = cryptodata.slice(Start, End);

    return (
        <div className="cont py-10">
            <h1>Top Cryptocurrency Prices</h1>
            {/* Categories menu */}
            <div className="flex p-3 gap-1 flex-wrap border border-Soft_Gray w-fit rounded-lg">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-md transition font-semibold bg-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black ${activeCategory === category
                            && "bg-black dark:bg-white text-white dark:text-black"  // Active category style
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div>
                {isMobile ? (
                    <div className="flex flex-col gap-2">
                        {FilteredTransDetails.map((coin, index) => (
                            <div
                                key={index}
                                className="py-4 px-3 rounded-lg flex justify-between items-center border border-gray-300 dark:border-Soft_Gray_20"
                            >
                                <div className="flex items-center gap-2">
                                    <img src={coin.icon} alt={coin.name} />
                                    <h3 className="font-semibold  ">
                                        {coin.name}{" "}
                                        <span className="font-light text-[14px]">{coin.symbol}</span>
                                    </h3>
                                </div>
                                <div className="flex gap-1">
                                    <p
                                        className={`${coin.change.startsWith("+")
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}
                                    >
                                        {coin.change}
                                    </p>
                                    <h5 className="">{coin.price}</h5>
                                </div>
                            </div>
                        ))}
                        <Pagination totalNumberOfPage={totalNumberOfPage} currentPage={currentPage} setCurrentPage={setCurrentPage} justify="between" />
                    </div>
                ) : (
                    <div>
                        <table className="w-full rounded-lg bg-white dark:bg-black">
                            <thead>
                                <tr className="border-b border-gray-300 text-center">
                                    <th className="p-5 text-left ">
                                        <h6>Coin</h6>
                                    </th>
                                    <th className="p-5 text-right">
                                        <h6>Market Cap</h6>
                                    </th>
                                    <th className="p-5 text-right">
                                        <h6>Price</h6>
                                    </th>
                                    <th className="p-5 md:p-2 lg:p-5 text-right">
                                        <h6>Change 01h</h6>
                                    </th>
                                    <th className="p-5 text-right">
                                        <h6>Change 7h</h6>
                                    </th>
                                    <th className="p-5  text-right md:hidden lg:block">
                                        <h6>Last 7 days</h6>
                                    </th>
                                    <th className="p-5 text-right ">
                                        <h6>Action</h6>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {FilteredTransDetails.map((coin, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        <td className="p-5 flex items-center gap-2">
                                            {coin.rank}{" "}
                                            <img className="px-2" src={coin.icon} alt={coin.name} />{" "}
                                            <span className="font-bold lg:block md:hidden">
                                                {coin.name}
                                            </span>{" "}
                                            <span className="text-gray-500">{coin.symbol}</span>
                                        </td>
                                        <td className="p-5 text-right">{coin.marketCap}</td>
                                        <td className="p-5 text-right">
                                            {coin.price}
                                        </td>
                                        <td
                                            className={`p-2 text-right ${coin.change.startsWith("+")
                                                ? "text-green-500"
                                                : "text-red-500"
                                                }`}
                                        >
                                            {coin.change}
                                        </td>
                                        <td className="p-5 text-right"></td>
                                        <td className="p-5 text-right md:hidden lg:block">
                                            {coin.supply}
                                        </td>
                                        <td className="p-2 text-right   ">
                                            <div className="flex items-center gap-2">
                                                <button className="px-4 py-2 border-[1px] bg-white rounded-[8px] text-[14px] dark:bg-black">
                                                    Buy
                                                </button>
                                                <div className="hidden md:hidden lg:block">
                                                    <button className="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>                        </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination totalNumberOfPage={totalNumberOfPage} currentPage={currentPage} setCurrentPage={setCurrentPage} justify="between" />
                    </div>
                )}
            </div>
        </div>
    );
};

export const Prices = () => {
    return <PageLayout Pagecontent={<CurrentPage />} />;
};
