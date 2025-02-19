import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Signin } from "../pages/AuthPages/SignIn";
import { ForgetPassword } from "../pages/AuthPages/ForgetPassword";
import { SignUp } from "../pages/AuthPages/SignUp";
import { DashBorad } from "../pages/Dashboard";
import { Assets } from "../pages/Assets";


export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<Signin />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="dashboard" element={<DashBorad/>}/>
        <Route path="assets" element={<Assets/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
