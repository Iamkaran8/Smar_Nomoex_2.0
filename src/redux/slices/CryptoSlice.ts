import { createSlice } from "@reduxjs/toolkit";
import btc from "../../assets/Dummy_images/Bitcoin.svg";
import Ethereum from "../../assets/Dummy_images/Ethereum.svg";
import xrp from "../../assets/Dummy_images/Xrp.svg";
import litecoin from "../../assets/Dummy_images/Litecoin.svg";
import Tether from "../../assets/Dummy_images/Tether.svg";
import { RootState } from "../store";

const initialState = {
  cryptodata: [
    {
      rank: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$23,869.5",
      change: "+1.53%",
      marketCap: "$552,825,084,843",
      supply: "19,048,487 BTC",
      icon: btc,
    },
    {
      rank: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$1400.36",
      change: "+1.27%",
      marketCap: "$236,365,494,058",
      supply: "120,908,795 ETH",
      icon: Ethereum,
    },
    {
      rank: 3,
      name: "XRP",
      symbol: "XRP",
      price: "$0.33398",
      change: "+10.93%",
      marketCap: "$19,749,990,029",
      supply: "48,343,101,197 XRP",
      icon: xrp,
    },
    {
      rank: 4,
      name: "Litecoin",
      symbol: "LTC",
      price: "$46.521",
      change: "+4.98%",
      marketCap: "$4,756,757,353",
      supply: "70,357,381 LTC",
      icon: litecoin,
    },
    {
      rank: 5,
      name: "Tether",
      symbol: "USDT",
      price: "$0.99655",
      change: "-0.25%",
      marketCap: "$74,120,427,924",
      supply: "73,275,094 USDT",
      icon: Tether,
    },
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
  ]
};

const CryptoSlice = createSlice({
  name: `crypto`,
  initialState,
  reducers: {

  }
})

export default CryptoSlice.reducer;
export const selectcategories = (state: RootState) => state.crypto.categories;
export const selectcryptodata = (state: RootState) => state.crypto.cryptodata;
