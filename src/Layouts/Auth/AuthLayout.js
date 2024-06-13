import React from "react";
import { Outlet } from "react-router-dom";
const user=[
   
]
const AuthLayout = () => {
  return (
    
    <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center"
     >
      <div className="font-extrabold text-6xl mb-12">Welcome to NMA</div>
      <div className="w-full max-w-[660px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
