import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCoinData = createAsyncThunk("coins/fetchCoinData", async () =>{
    const API_URL = 
    const API_KEY =
    const response = await axio
})

const initialState = {
    coinData:[],
    loading: false,
    error:null
}

export const FetchCoinSlice = createSlice({
    name: "coins",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase()
    }
})