import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type Coin = {
  rank: number;
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  supply: string;
  icon: string;
};

type CoinState = {
  coindata: Coin[];
  loading: boolean;
  error: string | null;
};

export const getCoinMarketdata = createAsyncThunk<Coin[], void, { rejectValue: string }>(
  "crypto/getCoinMarketdata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/crypto-data");
      return response.data.data; 
    } catch (error: any) {
      console.error("Fetching crypto data failed:", error);
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);

const initialState: CoinState = {
  coindata: [],
  loading: false,
  error: null,
};

const CoinmarketSlice = createSlice({
  name: "coinmarketcap",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoinMarketdata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCoinMarketdata.fulfilled, (state, action: PayloadAction<Coin[]>) => {
        state.loading = false;
        state.coindata = action.payload;
      })
      .addCase(getCoinMarketdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default CoinmarketSlice.reducer;

export const Coinmarketdata = (state: RootState) => state.coinmarketcap.coindata;
export const CoindataLoading = (state: RootState) => state.coinmarketcap.loading;
export const CoindataError = (state: RootState) => state.coinmarketcap.error;
