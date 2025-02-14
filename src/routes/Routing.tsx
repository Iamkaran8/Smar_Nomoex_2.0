import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { SignUp } from "../pages/SignUp"
import { Signin } from "../pages/SignIn"
import { ForgetPassword } from "../pages/ForgetPassword"


export const Routing = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="signin" element={<Signin/>}/>
                <Route path="forget-password" element={<ForgetPassword/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}