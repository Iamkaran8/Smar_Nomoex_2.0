import useScreen from "../../customHooks/useScreen";

const marketData = [
    {  rank: 1, name: "Bitcoin", symbol: "BTC", price: "$23,869.5", change: "+1.53%", icon: "🟠" },
    {  rank: 2, name: "Ethereum", symbol: "ETH", price: "$1400.36", change: "+1.27%", icon: "🔷" },
    {  rank: 3, name: "XRP", symbol: "XRP", price: "$0.33398", change: "+10.93%", icon: "⚫" },
    {  rank: 4, name: "Litecoin", symbol: "LTC", price: "$46.521", change: "+4.98%", icon: "⚪" },
    {  rank: 5, name: "Tether", symbol: "USDT", price: "$0.99655", change: "-0.25%", icon: "🟢" },
];

export const ExploreMarket = () => {
    const isMobile = useScreen(678); // Custom hook for screen size detection

    return (
        <div className="text-center">
            <h4 className="text-lg font-bold mb-4">Explore the latest market updates</h4>

            {isMobile ? (
                // Mobile View (Only Coin, Price & Change)
                <div className="flex flex-col gap-2">
                    {marketData.map((coin, index) => (
                        <div key={index} className="py-4 px-3 rounded-lg flex justify-between items-center border border-Soft_Gray dark:border-Soft_Gray_15">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">{coin.icon}</span>
                                <h3 className="font-semibold">{coin.name} <span className="font-light">{coin.symbol}</span></h3>
                            </div>
                            <div className="flex gap-1">
                                <p className={`${coin.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{coin.change}</p>
                                <h5 className="">{coin.price}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Desktop View (Full Table)
                <div className="border border-Soft_Gray rounded-lg">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-Soft_Gray text-center">
                                <th className="p-5 text-left "><h6>Coin</h6></th>
                                <th className="p-5"><h6>Price</h6></th>
                                <th className="p-5"><h6>Change 7h</h6></th>
                                <th className="p-5"><h6>Market Cap</h6></th>
                                <th className="p-5"><h6>Supply</h6></th>
                                <th className="p-5 text-right"><h6>Action</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            {marketData.map((coin, index) => (
                                <tr key={index} className="border-b border-Soft_Gray">
                                    <td className="p-5 flex items-center gap-2">
                                    {coin.rank}  {coin.icon} <span className="font-bold">{coin.name}</span> <span className="text-Slate_Gray">{coin.symbol}</span>
                                    </td>
                                    <td className="p-5">{coin.price}</td>
                                    <td className={`p-2 ${coin.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{coin.change}</td>
                                    <td className="p-5">-</td>
                                    <td className="p-5">-</td>
                                    <td className="p-5">
                                        <button className="bg-gray-800 px-3 py-1 rounded-lg text-white">Trade</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="bg-Bright_Blue text-white py-3 px-7  rounded-md my-5 lg:my-10">Explore cryptocurrencies</button>
                </div>
            )}
        </div>
    );
};

export default ExploreMarket;
