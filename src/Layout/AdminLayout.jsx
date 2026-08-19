import { Outlet } from "react-router-dom";
import AdminNavBar from "./AdminNavBar.jsx";

export default function Layout(){
    return(
        <>
        <AdminNavBar/>
        <Outlet/>
        </>
    )
}