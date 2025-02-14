import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { CiSun } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { toggleTheme } from "../../redux/slices/ThemeSlice";


export const ThemeBtn = () =>{
    const isDark = useSelector((state:RootState)=>state.theme.isDark)
    const dispatch:AppDispatch = useDispatch();
    return(
        <button className="border border_Soft_Gray_20 rounded-md p-3" onClick={()=>dispatch(toggleTheme())}>
            {isDark ? <CiSun size={24}/> : <GoMoon size={24}/>}
        </button>
    )
}