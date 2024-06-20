import React from "react";
import { Link } from "react-router-dom";
const Faq=()=>{
    return (

       <div className="p-2"> 
         <div className=" font-bold text-3xl">
            FAQ  
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">

         <div className=" indent-2 font-semibold mt-3">
            What is NMA 
         </div>
         <div className="md:indent-2  ">
         NMA i.e. National Monuments Authority has been established under the provisions of ‘The Ancient Monuments and
          Archaeological Sites and Remains(Amendment and Validation) Act, 2010'
         </div>
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
                <div className=" indent-2 font-semibold mt-3">
                Why do I need NOC from NMA?
                </div>
                <div className="md:indent-2  ">
                Any individual person/firm/govt. org who intends to carry out construction/reconstruction on their properties
                which fall within the Regulated Area of any centrally protected monuments/sites, need to apply for NOC
                from NMA prior to proceeding with the construction/reconstruction.
                </div>
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
         <div className=" indent-2 font-semibold mt-3">
         Which area falls under NMA jurisdiction? 
         </div>
         <div className="md:indent-2  ">
         Area beginning at the limit of Prohibited Area of any centrally protected Monuments/Sites and Remains and upto
          a distance of 200 meters in all direction are called Regulated Area and comes under NMA jurisdiction.
         </div>
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
         <div className=" indent-2 font-semibold mt-3">
         What is the provision for new construction or reconstruction or repair or renovation in regulated areas?
         </div>
         <div className="md:indent-2  ">
         No objection Certificate for construction or reconstruction or repair or renovation could be granted by
          the Competent Authority in the regulated area on the basis of recommendation of NMA.
         </div>
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
         <div className=" indent-2 font-semibold mt-3">
         What is the procedure for taking permission for any new construction or repair, renovation etc., 
         in prohibited area or regulated area?
         </div>
         <div className="md:indent-2  ">
         The interested person may apply online through NMA Online Portal (nmanoc.nic.in) or through Common 
         Application Form of the concerned ULB to the Concerned Competent Authority for grant of NOC
         </div>
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
         <div className=" indent-2 font-semibold mt-3">
         What is the Procedure of applying for NOC for construction permit through Common Application Form?
         </div>
         <div className="md:indent-2  ">
            <div >1) An applicant should select NMA section in the Common Application Form while submitting the application to the ULB; </div>
            <div > 2) Applicant should upload additional documents mentioned in the NMA Section;</div>
            <div > 3) Applicant should obtain the Geo-Coordinate of Proposed site through SMARAC App and submit along with the Application ID.</div>
         </div>
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
         <div className=" indent-2 font-semibold mt-3">
           Where to download SMARAC App?
         </div>
         <div className="md:indent-2  ">NMA NOC Portal (nmanoc.nic.in) is having the link
          for SMARAC App which can be downloaded in mobile phone having Android operating system.
         </div>
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
         <div className=" indent-2 font-semibold mt-3">
          How to use SMARAC App?
         </div>
         <div className="md:indent-2  ">
            <div >Step (i) Applicant should download SMARAC App II in mobile phone having Android operating system and install it. 
                Following Prescribed Procedure: 
            </div>
            <div >Step (ii) If the users are having android 6.0 (Marshmallow) or above, they have to give permissions to use Location,
                 Camera, Telephone and Storage specifically for the “SMARAC App II”
            </div>
            <div > Step (iii) Before accessing the “SMARAC App II” the users are required to complete the following steps:-
                <div className="flex flex-col ml-8">
                 <div>  a. Go to Settings </div>
                 <div>   b. Go to Apps</div>
                 <div>  c. Select Smarac Citizen</div>
                 <div>  d. Click on Permissions</div>
                 <div> e. Enable Location, Camera, Telephone and Storage</div>
                 <div>  f. Go back to Home Page and restart the phone</div>
            </div>
            </div>
            <div>Step (iv) Before traversing the Site:
               <div className="ml-8">
                  <div>a) Go to SMARAC App and login with registered E-mail ID, Registered Mobile Number, Token ID as password and Application ID</div>
                  <div>b) Traverse the proposed plot selecting “Polygon option” </div>
                  <div>c) Click ‘Add’ button at every corner of the plot.</div>
                  <div>d) After taking the co-ordinates of the Polygon, take two Photograph of the plot. </div>
                  <div>e) Save the data in mobile. </div>
                  <div>f) Click on “Send” button for final submission. </div>
               </div>
            </div>
         </div>
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
           <div className=" indent-2 font-semibold mt-3">
            In which cases Online application facility is not available?
           </div>
            <div className="md:indent-2  ">
               <div >a) Where the built up area is more than 2000 sqm. (Information in schedule – II is required to be submitted). </div>
               <div > b) Following 13 monuments in Delhi are not included in Color Coded Zonal Map of ISRO. 
                     Hence, all application pertaining to these monuments are to be submitted to Competent Authority in hard copy.</div>
            </div>
            <table class=" border border-slate-800 mt-4">
               <thead className="bg-orange-300 ">
                  <tr className="border-b-2 border-black">
                     <th>S.No.</th>
                     <th>Name of the Centrally Protected Monument/No. in CPM List</th>
                     <th>	Locality and District</th>
                     
                  </tr>
               </thead>
               <tbody className="tbody">
                  <tr className="">
                     <td>01</td>
                     <td>	Bastion, where a wall Jahan Panah meets the wall of Rai Pithora Fort DELDL001</td>
                     <td>	Adchini, South District</td>
                  </tr>
                  <tr>
                     <td>02</td>
                     <td>Ramp and Gateway of Rai Pithora’s fort DELDL002</td>
                     <td>	Adchini, South District</td>
                  </tr>
                  <tr>
                     <td>03</td>
                     <td>Portion of city wall near which Brig John Nicholson was mortally wounded on 14th Sept., 1857 DELDL035</td>
                     <td>Kashmere Gate, North District</td>
                  </tr>
                  <tr>
                     <td>04</td>
                     <td>	Site of Siege Battery DELDL044</td>
                     <td>In the Garden near South -west entrance to Delhi club ground, North District</td>
                  </tr>
                  <tr>
                     <td>05</td>
                     <td>	Walls of Lal Kot and Rai Pithora’s Fort from Sohan Gate to Adham Khan’s Tomb including the ditch where there is an outer wall DELDL097</td>
                     <td>Mehrauli, South District</td>
                  </tr>
                  <tr>
                     <td>06</td>
                     <td>	Walls of Lal Kot & Rai Pithora’s Fort at the point where they meet together near Jamali-Kamali DELDL098</td>
                     <td>Mehrauli, South District</td>
                  </tr>
                  <tr>
                     <td>07</td>
                     <td>Wall of Rai Pithora’s Fort including gateways and bastions, near Bagh Nazir to a bastions immediately to North of Qutb-Tughlaqabad Road. DELDL099</td>
                     <td>Mehrauli, South District</td>
                  </tr>
                  <tr>
                     <td>08</td>
                     <td>	Gates and walls of Mubarakpur , Kotla in village Mubarakpur Kotla DELDL100</td>
                     <td>Kotla Mubarak Pur Village, South East District</td>
                  </tr>
                  <tr>
                     <td>09</td>
                     <td>	i. Unnamed Mosque Munirka 321
                       <div>  ii. Unnamed Mosque Munirka 322 </div>
                        DELDL118</td>
                     <td>Munirka, South District</td>
                  </tr>
                  <tr>
                     <td>10</td>
                     <td>	Ruined line of walls, bastions & gateways of Siri Kh.No. 88,265 & 477 of village Shahpur Jat DELDL138</td>
                     <td>Shahpur Jat Village, South District</td>
                  </tr>
                  <tr>
                     <td>11</td>
                     <td>	Badaun Gates DELDL153</td>
                     <td>Lado Sarai Village, South District</td>
                  </tr>
                  <tr>
                     <td>12</td>
                     <td>	A Gateway of Lal Kot DELDL154</td>
                     <td>Lado Sarai Village, South District</td>
                  </tr>
                  <tr>
                     <td>13</td>
                     <td>Gateways of Rai Pithora’s Fort DELDL155</td>
                     <td>Lado Sarai Village, South District</td>
                  </tr>
               </tbody>
            </table>
            
         </div>
         <div className=" hover:border-2 hover:border-red-700 ">
            <Link to="https://nmanoc.nic.in/assets/site/main/form-one.pdf">
           <div className=" indent-2 font-semibold mt-3 hover:font-extrabold">
              Format for Form I
           </div>
            </Link>
         </div>
      </div>
           
      

    )
}

    export default Faq;