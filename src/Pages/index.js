import React from "react";
import { Link } from "react-router-dom";

const Index=()=>{
    return (

       < div className="index"> 
         <Link>
            <div className=" h-34 mt-4 bg-yellow-100 text-base ml-2 mr-2">
                <div className=" text-3xl font-bold">  Form-I</div>
                This form is to be filled up by any individual applicant/firm/Govt. 
                organization who wants to get the clearance from the National Monuments Authority on 
                their proposed sites of construction/re-construction which falls within the limit of any 
                centrally protected monument/sites. The form contains the details on the proposed work with
                the enclosures on the building plans, maps, property papers etc.
                <div className="flex justify-end mr-4">
                <div className=" w-20 h-8 bg-or-200 border-black hover:bg-orange-500 hover:font-bold text-center text-lg ">
                    Apply
                </div>
                </div>
            </div> 
         </Link>
         <Link>
            <div className=" h-34 bg-orange-200 mt-4 bg- yellow-100 font- text-base self-auto ml-2 mr-2">
                <div className=" text-3xl font-bold">Form-II</div>
                This form is to be filled up by the concerned Competent Authority in respect of the applicant who has
                applied in Form-1 for NOC/clearance from National Monuments Authority. The basic details of this form
                contain the details of Form-1 as submitted by the individuals; this also includes several reports e.g. 
                inspection report, Impact Assessment report etc. with the specific comments and recommendations of the
                Competent Authority.
                <div className="flex justify-end mr-4">
                <div className="  w-20 h-8 bg-or-200 border-black hover:bg-orange-500 hover:font-bold text-center text-lg ">
                    Login
                </div>
                </div>
            </div> 
         </Link>
         <div className=" h-38 bg-orange-300 mt-4 font- text-lg self-auto ml-2 mr-2 ">
            <div className="ml-2"> Satellite Maps showing Prohibited and Regulated areas around a few monuments</div>
            <div className=" hover:underline hover:font-bold p-1">a) Sidi Saiyed’s Mosque – Ahmedabad </div>
            <div className=" hover:underline hover:font-bold p-1">b) Humayun’s Tomb and its complex – Delhi </div>
            <div className=" hover:underline hover:font-bold p-1 ">c) Jogeshwari Caves – Mumbai </div>
         </div> 
       </div>
      
      

    )
}

    export default Index;