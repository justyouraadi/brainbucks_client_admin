import { Navigate, Outlet } from "react-router-dom";


const Authentication = () => {
    return localStorage.getItem("brainbucks_token") ? <Outlet /> : <Navigate to="/" />;
}

export default Authentication
