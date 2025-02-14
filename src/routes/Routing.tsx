import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { SignUpModule } from "../components/Registration/SignUpModule/SignUpModule"
import { SignInModule } from "../components/Registration/SignInModule/SignInModule"
import { PassWordResetModule } from "../components/Registration/PassWordReset/PassWordResetModule"
import { NotFound } from "../pages/NotFound"


export const Routing = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="signup" element={<SignUpModule/>}/>
                <Route path="signin" element={<SignInModule/>}/>
                <Route path="forget-password" element={<PassWordResetModule/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}