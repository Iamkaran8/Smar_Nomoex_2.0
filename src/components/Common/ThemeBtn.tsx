import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { CiSun } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { toggleTheme } from "../../redux/slices/ThemeSlice";


export const ThemeBtn = () =>{
    const isDark = useSelector((state:RootState)=>state.theme.isDark)
    const dispatch:AppDispatch = useDispatch();
    return(
        <button className={`border border-[#CFDBD5] dark:border-Soft_Gray_20  m-3 rounded-md p-3 `} onClick={()=>dispatch(toggleTheme())}>
            {isDark ? <CiSun size={20}/> : <GoMoon size={20}/>}
        </button>
    )
}