import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { NavlinkProps } from "../../model";

const initialState:NavlinkProps[] = [
    { name: "Prices", url: "/prices" },
    { name: "Market", url: "/market" },
    { name: "Exchange", url: "/exchange" },
    { name: "Learn", url: "/learn-earn" },
    { name: "Updates", url: "/updates" },
]

export const Navmenus = createSlice({
    name: 'navmenus',
    initialState,
    reducers:{

    }
})

export default Navmenus.reducer
export const NavLinks = (state:RootState)=>state.navmenus