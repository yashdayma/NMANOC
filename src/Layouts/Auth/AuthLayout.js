import React from "react";
import { Outlet } from "react-router-dom";
 const AuthLayout=()=>{
    return (
            
        <div className=" w-screen h-screen bg-gray-200 pt-10%">
 <div>     Welcome to NMA   </div>
                <Outlet/>
        
        </div>
    )
 }
  
 export default AuthLayout;