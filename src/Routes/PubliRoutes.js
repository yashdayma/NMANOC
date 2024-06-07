import React from 'react';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import UrbanGuidelines from '../Pages/UrbanGuidelines';
import Procedure from '../Pages/Procedure';
import ApplicantLogin from '../Pages/ApplicantLogin';
import DetailsProjects from '../Pages/DetailsProjects';
import Registration from '../Pages/Registration';
import PublicLayout from '../Layouts/PublicLayout';
import AuthLayout from '../Layouts/Auth/AuthLayout';
import DashboardLayout from '../Layouts/Dashboard/Dashboard';
import Index from '../Pages';
import Maps from '../Pages/Maps';
import Feedback from '../Pages/Feedback.js';
import Faq from '../Pages/FAQ';
import DetailsLargeProjects from '../Pages/DetailsLargeProjects.js';
import Contact from '../Pages/Contact.js';
import HeightDelhi from '../Pages/HeightDelhi.js';
import HeightMumbai from '../Pages/HeightMumbai.js';
import Circulars from '../Pages/Circulars.js';
import Geo from '../Pages/Geo.js';
const PublicRoutes =()=>{
    
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/dash" element={<DashboardLayout/>}/>  
        <Route path="/" element ={ <PublicLayout/>}>            
            <Route path="/Procedure" element ={ <Procedure/>}/>
            <Route path="" element ={ <Index/>}/>           
            <Route path="/Urban" element ={ <UrbanGuidelines/>}/>
            <Route path="/Details" element ={ <DetailsProjects/>}/>
            <Route path="/DetailsLargeProjects" element ={ <DetailsLargeProjects/>}/>
            <Route path="/Feedback" element ={ <Feedback/>}/>
            <Route path="/contact" element ={ <Contact/>}/>
            <Route path="/maps" element ={ <Maps/>}/>
            <Route path="/FAQ" element ={ <Faq/>}/>
            <Route path="/heightDelhi" element ={ <HeightDelhi/>}/>
            <Route path="/heightMumbai" element ={ <HeightMumbai/>}/>
            <Route path="/Circulars" element ={ <Circulars/>}/>
            <Route path="/Geo" element ={ <Geo/>}/>
            <Route path="/Smarac " element ={ <>Smarac Application </>}/>
        </Route>  
        <Route path="/Auth" element ={ <AuthLayout/>}>         
            <Route path='Applicantlogin' element={<ApplicantLogin/>}/>
            <Route path="CALogin" element ={<>CA Login page....!</>}/>
            <Route path="SALogin" element ={<>SA Login page.!</>}/>
            <Route path="Registration" element ={ <Registration/>}/>
            <Route path="NMALogin" element ={ <>NMA Login page....!</>}/>
       </Route> 
      </Routes>
      </BrowserRouter>
   )
}
export default PublicRoutes;
