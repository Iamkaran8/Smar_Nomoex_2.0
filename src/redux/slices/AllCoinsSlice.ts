import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { getAllCoins } from "../apis/coinsApi";

interface CoinsState {
    AllCoinsData: any[],
    isLoading: boolean
}
const initialState: CoinsState = {
    AllCoinsData: [],
    isLoading: true
}


export const AllCoinsSlice = createSlice({

    name: 'AllCoins',
    initialState,
    reducers: {
        addAllCoin: (state, action: PayloadAction<any[]>) => {
            state.AllCoinsData = action.payload
        },
        addLoading: (StaticRange, action: PayloadAction<boolean>) => {
            StaticRange.isLoading = action.payload
        }
    }, extraReducers:(builder) =>{
        builder.addCase(getAllCoins.fulfilled, (state,action)=>{
            state.AllCoinsData = action.payload
        })
    }
})

export const { addAllCoin, addLoading } = AllCoinsSlice.actions;
export default AllCoinsSlice.reducer;

export const SelectAllCoinsData = (state: RootState) => state.allCoins.AllCoinsData
export const SelectIsLoading = (state: RootState) => state.allCoins.isLoading