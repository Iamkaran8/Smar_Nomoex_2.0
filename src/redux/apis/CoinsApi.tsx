import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCoins = createAsyncThunk("/crypt-data", async () => {
  try {
    const response = await fetch("http://localhost:5000/crypto-data");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

