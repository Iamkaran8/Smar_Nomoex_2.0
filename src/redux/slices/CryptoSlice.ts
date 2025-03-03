import { createSlice } from "@reduxjs/toolkit";
import btc from "../../assets/Dummy_images/Bitcoin.svg";
import Ethereum from "../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../assets/Dummy_images/Xrp.svg";
import litecoin from "../../assets/Dummy_images/Litecoin.svg";
import Tether from "../../assets/Dummy_images/Tether.svg";
import SOL from '../../assets/Dummy_images/Solana.svg'
import { RootState } from "../store";
import btc from "../../assets/Dummy_images/Bitcoin.svg";
import eth from "../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../assets/Dummy_images/Xrp.svg";
import ltc from "../../assets/Dummy_images/Litecoin.svg";
import usdt from "../../assets/Dummy_images/Bitcoin.svg";
import doge from "../../assets/Dummy_images/Ethereum.svg";
import sol from "../../assets/Dummy_images/Solana.svg";
import dot from "../../assets/Dummy_images/Solana.svg";
import ada from "../../assets/Dummy_images/Solana.svg";
import shib from "../../assets/Dummy_images/Solana.svg";
import avax from "../../assets/Dummy_images/Solana.svg";
import link from "../../assets/Dummy_images/Solana.svg";
import uni from "../../assets/Dummy_images/Solana.svg";

const initialState = {
  cryptodata: [
    { rank: 1, name: "Bitcoin", symbol: "BTC", price: "$23,869.5", change: "+1.53%", marketCap: "$552B", supply: "19M BTC", icon: btc, category: "All coins" },
    { rank: 2, name: "Ethereum", symbol: "ETH", price: "$1,400.36", change: "+1.27%", marketCap: "$236B", supply: "120M ETH", icon: eth, category: "All coins" },
    { rank: 3, name: "XRP", symbol: "XRP", price: "$0.333", change: "+10.93%", marketCap: "$19.7B", supply: "48B XRP", icon: xrp, category: "Top Gainers" },
    { rank: 4, name: "Litecoin", symbol: "LTC", price: "$46.52", change: "+4.98%", marketCap: "$4.7B", supply: "70M LTC", icon: ltc, category: "Utility" },
    { rank: 5, name: "Tether", symbol: "USDT", price: "$0.996", change: "-0.25%", marketCap: "$74B", supply: "73B USDT", icon: usdt, category: "Top Losers" },
    { rank: 6, name: "Dogecoin", symbol: "DOGE", price: "$0.087", change: "+1.21%", marketCap: "$15.4B", supply: "132B DOGE", icon: doge, category: "Meme Coins" },
    { rank: 7, name: "Solana", symbol: "SOL", price: "$34.67", change: "+5.12%", marketCap: "$11.2B", supply: "412M SOL", icon: sol, category: "Ethereum Alternatives" },
    { rank: 8, name: "Polkadot", symbol: "DOT", price: "$8.55", change: "+2.34%", marketCap: "$9.1B", supply: "987M DOT", icon: dot, category: "Metaverse" },
    { rank: 9, name: "Cardano", symbol: "ADA", price: "$0.45", change: "+3.78%", marketCap: "$14.5B", supply: "35B ADA", icon: ada, category: "DeFi" },
    { rank: 10, name: "Shiba Inu", symbol: "SHIB", price: "$0.000012", change: "+9.02%", marketCap: "$8.3B", supply: "589T SHIB", icon: shib, category: "Meme Coins" },
    { rank: 11, name: "Avalanche", symbol: "AVAX", price: "$22.5", change: "+6.45%", marketCap: "$7.9B", supply: "220M AVAX", icon: avax, category: "Ethereum Alternatives" },
    { rank: 12, name: "Chainlink", symbol: "LINK", price: "$15.2", change: "+4.36%", marketCap: "$6.2B", supply: "467M LINK", icon: link, category: "Utility" },
    { rank: 13, name: "Uniswap", symbol: "UNI", price: "$8.9", change: "+3.21%", marketCap: "$5.4B", supply: "453M UNI", icon: uni, category: "DeFi" },
    // Add 87 more cryptocurrencies with unique data, spread across different categories...
  ],
  categories: [
    "All coins",
    "Watchlist",
    "Top Gainers",
    "Top Losers",
    "Metaverse",
    "Ethereum Alternatives",
    "DeFi",
    "Utility",
    "Meme Coins"
  ],
  watchList:[
    {
      id: 1,
      title: "Top gainer (24h)",
      name: "Ethereum",
      symbol: "ETH",
      image: Ethereum,
      percentage: "+1.53%",
    },
    {
      id: 2,
      title: "Highest vol (24h)",
      name: "Solana",
      symbol: "SOL",
      image: SOL,
      percentage: "+2.43%",
    },
    {
      id: 3,
      title: "New listing",
      name: "Litecoin",
      symbol: "LTC",
      image: litecoin,
      percentage: "+12.53%",
    },
    {
      id: 4,
      title: "Highest vol (24h)",
      name: "Bitcoin",
      symbol: "BTC",
      image: Ethereum,
      percentage: "+12.53%",
    },
    {
      id: 5,
      title: "Highest vol (24h)",
      name: "Bitcoin",
      symbol: "BTC",
      image: SOL,
      percentage: "+12.53%",
    },
    {
      id: 6,
      title: "Highest vol (24h)",
      name: "Bitcoin",
      symbol: "BTC",
      image: litecoin,
      percentage: "+12.53%",
    },
    {
      id: 7,
      title: "Highest vol (24h)",
      name: "Bitcoin",
      symbol: "BTC",
      image: SOL,
      percentage: "+12.53%",
    },
    {
      id: 8,
      title: "Top gainer (24h)",
      name: "Ethereum",
      symbol: "ETH",
      image: Ethereum,
      percentage: "+1.53%",
    },
    {
      id: 9,
      title: "Highest vol (24h)",
      name: "Solana",
      symbol: "SOL",
      image: SOL,
      percentage: "+2.43%",
    },
    {
      id: 10,
      title: "Top gainer (24h)",
      name: "Ethereum",
      symbol: "ETH",
      image: Ethereum,
      percentage: "+1.53%",
    },
    {
      id: 11,
      title: "Highest vol (24h)",
      name: "Solana",
      symbol: "SOL",
      image: SOL,
      percentage: "+2.43%",
    },
 
  ]
};

const CryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
});

export default CryptoSlice.reducer;
export const selectcryptodata = (state: RootState) => state.crypto.cryptodata;
export const selectWatchListdata = (state:RootState) => state.crypto.watchList; 
