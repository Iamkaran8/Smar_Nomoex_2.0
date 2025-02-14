import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { SignUpModule } from "../components/Registration/SignUpModule/SignUpModule"


export const Routing = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="signup" element={<SignUpModule/>}/>
            </Routes>
        </BrowserRouter>
    )
}