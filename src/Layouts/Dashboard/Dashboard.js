import React from "react";
import logo from './logo.png';
import ajanta from './ajanta.jpg'
import sarnath from './sarnath.jpg'
const DashboardLayout=()=>{
    return(
        <div className="dashboard h-screen w-screen flex flex-col">
         <header class="header h-25 flex  bg-green-200">
             <div className=" w-[350px] "> <img src={logo} alt="logo"/> </div>
             <div class="flex justify-end ">     
             <div className="w-[150px] "> <img src={sarnath} alt="sarnath"/> </div>
              <div className="w-[150px]"> <img src={ajanta} alt="ajanta"/> </div>
             </div>                   
           
         </header>
         <section className="mainContent flex grow bg-blue-200  ">           
           <sidebar className="sidebar w-1/6 bg-orange-400 "> sidebar Menu</sidebar>
           <main className="main "> 
                     
           </main>  
          
         </section>
        <footer className="footer h-[50px] bg-pink-500"> Footer </footer>
              
        </div>
    )
}
export default DashboardLayout;