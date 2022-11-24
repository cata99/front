import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../LoginPage";

const LoginRoute = () =>{
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />}/>
        </Routes>
    )
}

export default LoginRoute