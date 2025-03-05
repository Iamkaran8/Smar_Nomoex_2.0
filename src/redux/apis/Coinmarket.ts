import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchCoindata = createAsyncThunk("coinmarket/FetchCoindata", async () => {
    try {
        const API_URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
        const API_KEY = `976fe7f4-79a7-4d9b-9ace-e9f500e510a2`;

        const response = await axios.get(API_URL, {
            headers: {
                "X-CMC_PRO_API_KEY": API_KEY,
                Accept: "application/json",
            },
        });
        return response.data;

    } catch (error: any) {
        console.error(error.message);
        return (error.response?.data || "Failed to fetch data");
    }
});

