import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const PublicLayout=()=>{
    return (

       <div className="PublicLayout flex flex-col h-screen mx-auto bg-blue-200 "> 
        <header class="header flex h-[85px]  ">Header</header>
       
        <section className="mainContent flex grow bg-green-200  ">           
          <sidebar className="sidebar w-1/6 bg-orange-500 "> 
          
            <div className=" nav">
              <a href="/">
                <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                  <div className="icon w-6 p-1">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-4 w-4">
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                  </svg>
                  </div>
                  <div className="link"> Home</div>
                </div>
             </a>
            </div>
            <div className="nav">
               <Link to="/Procedure">
                  <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                    <div className="icon w-6 p-1">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-4 w-4">
                      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                    </svg>
                    </div>
                    <div className="link"> Procedure_NOC_NMA</div>
                  </div>
                </Link>
            </div>
            <div className="nav">
              <Link to="/Urban ">
                <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                  <div className="icon h-4 w-4">

                  </div>
                  <div className="link">Urban Guidelines</div>
                </div>
              </Link>
            </div>
            <div className="nav ">
              <Link to ="/Details">
                <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                  <div className="icon h-4 w-4">

                  </div>
                  <div className="link">Details of the Public Projects</div>
                </div>
              </Link>
            </div>
            <div className="nav">
              <Link to="/Urban ">
                <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                  <div className="icon h-4 w-4">

                  </div>
                  <div className="link">Details on Large Building Projects</div>
                </div>
              </Link>
            </div>
            <div className="nav ">
              <Link to ="/Feedback">
                <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                  <div className="icon h-4 w-4">

                  </div>
                  <div className="link">FeedBacks</div>
                </div>
              </Link>
            </div>
            <div className="nav">
              <Link to="/Contact ">
                <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                  <div className="icon h-4 w-4">

                  </div>
                  <div className="link">Contact Us</div>
                </div>
              </Link>
            </div>
            <div className="nav">
              <Link to="/Maps ">
                <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                  <div className="icon h-4 w-4">

                  </div>
                  <div className="link">Maps</div>
                </div>
              </Link>
            </div>
            <div className="nav">
              <Link to="/FAQ ">
                <div className="flex bg-red-500 hover:bg-red-400 border-b border-white">
                  <div className="icon h-4 w-4">

                  </div>
                  <div className="link">FAQ</div>
                </div>
              </Link>
            </div>
            <div className="nav">
              <div className="flex h-[25px] border-b border-white">
                
                  <div className="link">   </div>
                </div>
            
            </div>
            

          </sidebar>
          <main className="main ">  
                      <Outlet/>
           </main>  
          
        </section>
        <footer className="footer h-[50px] p-4 mx-auto"> Content Provided and Maintained by National Monuments Authority, Ministry of Culture, Government of India </footer>
              
       </div>
      
        

    )
}

    export default PublicLayout;