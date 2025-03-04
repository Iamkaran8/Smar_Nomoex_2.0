import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { toggleTheme } from "../../redux/slices/ThemeSlice";


export const ThemeBtn = () =>{
    const isDark = useSelector((state:RootState)=>state.theme.isDark)
    const dispatch:AppDispatch = useDispatch();
    return(
        <button className={`border border-[#CFDBD5] dark:border-Soft_Gray_20  m-3 rounded-md p-3 `} onClick={()=>dispatch(toggleTheme())}>
            {isDark ? <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M483.11-96q-80.49 0-150.92-30.66-70.42-30.66-122.65-82.88-52.22-52.23-82.88-122.65Q96-402.62 96-483.11 96-623 184-730.5T412-864q-17 99 11.5 188T521-518q67 67 158 95t185 11q-24 138-132.5 227T483.11-96Zm-.11-72q88 0 164-45t115-122q-83-5-158.5-39.5T469-468q-60-60-94-135t-40-159q-77 41-122 116.18-45 75.19-45 162.82 0 131.25 91.88 223.12Q351.75-168 483-168Zm-14-300Z"/></svg>}
        </button>
    )
}