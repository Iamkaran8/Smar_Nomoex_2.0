import { createSlice } from "@reduxjs/toolkit";
import { FetchCoindata } from "../apis/Coinmarket";
import { RootState } from "../store";

// Define State Interface
interface Coinprops {
    coinlist: any[];
    loading: "idle" | "loading" | "success" | "rejected";
    error: string | null;
}

// Initial State
const initialState: Coinprops = {
    coinlist: [],
    loading: "idle",
    error: null,
};

// Redux Slice
const CoinmarketSlice = createSlice({
    name: "coins",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchCoindata.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(FetchCoindata.fulfilled, (state, action) => {
                state.loading = "success";
                state.coinlist = action.payload.data;
            })
            .addCase(FetchCoindata.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload as string || "Unknown error occurred";
            });
    },
});

export default CoinmarketSlice.reducer;
export const coindata = (state:RootState) => state.coins.coinlist