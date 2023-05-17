import React           from "react";
import {Route, Routes} from 'react-router-dom'
import Login           from "../pages/user/login/Login";
import Register        from "../pages/user/register/UserRegister";

function RoutesConfig() {

    return (
        <Routes>
            <Route path={'login'} element={<Login/>} />
            <Route path={'register'} element={<Register/>} />
        </Routes>
    )
}

export default RoutesConfig
