import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { PassWordResetModule } from "../components/Registration/PassWordReset/PassWordResetModule"
import { NotFound } from "../pages/NotFound"
import { SignUp } from "../pages/SignUp"
import { Signin } from "../pages/SignIn"


export const Routing = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="signin" element={<Signin/>}/>
                <Route path="forget-password" element={<PassWordResetModule/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}