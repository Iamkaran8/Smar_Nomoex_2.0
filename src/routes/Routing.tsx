import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Signin } from "../pages/AuthPages/SignIn";
import { ForgetPassword } from "../pages/AuthPages/ForgetPassword";
import { SignUp } from "../pages/AuthPages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Assets } from "../pages/Assets";
import { Transactions } from "../pages/Transactions";
import { Prices } from "../pages/Prices";
import { Settings } from "../pages/Settings";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<Signin />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="assets" element={<Assets />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="settings" element={<Settings />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
