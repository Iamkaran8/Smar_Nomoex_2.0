import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../redux/slices/ThemeSlice'
import authReducer  from "./slices/AuthSlice";
import navlinksReducer from './slices/NavmenusSlice';
import cryptoReducer from './slices/CryptoSlice'

export const store = configureStore({
    reducer:{
        theme : themeReducer,
        auth : authReducer,
        navmenus: navlinksReducer,
        crypto: cryptoReducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;