import React from "react";
import { Outlet, Link } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";
import PublicTopbar from "./publicTopbar";
import logo from './Dashboard/logo.png';
import ajanta from './Dashboard/ajanta.jpg'
import sarnath from './Dashboard/sarnath.jpg'

const PublicLayout=()=>(
  <div className="PublicLayout flex flex-col h-screen mx-auto bg-blue-200 ">
    <header class="header  flex h-24 bg-blue-500">
      <div className=" w-[500px] h-full "> <img src={logo} alt="logo" /> </div>
      <div class="flex place-content-end w-full justify-end">
        <div className="w-[150px] h-full"> <img src={sarnath} alt="sarnath" /> </div>
        <div className="w-[150px] h-full"> <img src={ajanta} alt="ajanta" /> </div>
      </div>
    </header>
    <div>
       <marquee className="marquee w-screen h-[24px] bg-yellow-200 text-red-600 decoration-8 font-bold ">
          Traversal of wrong plot by the Architect/Applicant either by omission or comission or by
          "mistake" will attract penal action / black listing.
    </marquee>
    <topbar className="  bg-white  "> <PublicTopbar/>
        </topbar>
    </div>
    
    <section className="mainContent flex grow bg-green-200  ">
      <sidebar className="sidebar w-1/6 bg-orange-500 ">
        <div className="publicnavbar">
          <PublicNavbar />
        </div>
      </sidebar>
      <main className="main ">
        <Outlet />
      </main>
    </section>
    <footer className="footer h-[50px] p-4 mx-auto">
      Content Provided and Maintained by National Monuments Authority, Ministry of Culture, Government of India
    </footer>
  </div>



)

    export default PublicLayout;