import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../model";

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
export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
