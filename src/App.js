import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  sarnath from './Images/sarnath.jpg';
import  ajanta from './Images/ajanta.jpg';
import logo from './Images/logo.png';
import Tajmahal from './Images/Tajmahal.avif'
import MarqueeText from './component/Marqee';
import './App.css';
import './Login.css';
import ItemList from './component/ItemsList';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import NavBar from './component/Navbar';
import LoginApplicant from './component/Loginasapplicant';

function App() {
    return (
    <div className="App">
        <div>
              <header className="App-header"> 
                <div className="image-row">
                        <img src={logo} alt="Logo" className="App-logo" style={{ width: '400px', height: 'auto'}}/>
                        <img src={ajanta} alt="ajanta" className="" style={{ width: '350px', height:'90px'}}/>
                        <img src={sarnath} alt="sarnath" className=""style={{ width: '350px', height: '90px'}}/>     
                        <img src={Tajmahal} alt="Tajmahal" className=""style={{ width: '350px', height: '90px'}}/>     
                </div> 
             </header>
            <MarqueeText text="Traversal of wrong plot by the Architect/Applicant either by omission or comission or by mistake will attract penal action / black listing." />
            <div><NavBar/></div>
            <body className='App-body' 
            style={{
        backgroundColor: "RGB(36, 108, 95)",
        // height: "100vh",
        // padding: "12px",
        width:"100vw",            
        position: "sticky",
        top: 0,}}
        > 
        <div className='image-row'><Sidebar/></div>

           <div className='main-content'>
           
           
            <div ><h2> Application of the applicants For NOC </h2> </div>
            
            <h4><ItemList /></h4>
            <LoginApplicant/>
           
           </div>
           
                   
            </body>
            <footer style={{
        backgroundColor: "RGB(46, 180, 195)",
        height: "30px",
        padding: "12px",
        width:"100vw",            
        position: "sticky",
        buttom: 0,
      }}>
               <h5>  NMA NEW WEB SITE HAS STARTED TO BE DEVELOPED  </h5>
            </footer>
            </div>
        </div>
       
    );
}

export default App;



