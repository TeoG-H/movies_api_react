import React from "react";
import { Outlet } from "react-router-dom";
//"<Outlet/>" locul unde se insereaza componenta copil" 
const Layout = () => {
    return(
        <main>
            <Outlet/> 

        </main>
    )
}

export default Layout