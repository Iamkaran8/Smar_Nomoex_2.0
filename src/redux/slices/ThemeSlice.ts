import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../model";
import { RootState } from "../store";

// Define initial state
const initialState: ThemeState = {
    isDark: true,
};

// Create theme slice
export const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
            localStorage.setItem("theme", state.isDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", state.isDark);
        },
    },
});

// Export the action
export default ThemeSlice.reducer;
export const { toggleTheme } = ThemeSlice.actions;
export const Dark = (state:RootState)=>state.theme.isDark 
