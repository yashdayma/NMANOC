import React from "react";
import { Link } from "react-router-dom";

const objtop=[
    {
         linkName: 'Registraion',
         linkurl: '/Autht/Registraion',        
         visibility: ["Applicant",'CA','NMA']
    },
    {
         linkName: 'Login As Applicant',
         linkurl: '/Auth/Applicantlogin',        
         visibility: ["Applicant",'CA','NMA']
    },
    {
         linkName: 'SA Login',
         linkurl: '/Auth/SALogin',        
         visibility: ["Applicant",'CA','NMA']
    },
    {
         linkName: 'CA Login',
         linkurl: '/Auth/CALogin',        
         visibility: ["Applicant",'CA','NMA']
    },
    {
         linkName: 'NMA Login',
         linkurl: '/Auth/NMALogin',        
         visibility: ["Applicant",'CA','NMA']
    }
]
const PublicTopbar=()=>{
    return (       
              <div className="topbar flex w-screen h-full place-content-end px-4 bg-white ">
                {objtop.filter((topItem)=>{return topItem.visibility.includes('NMA','CA','Applicant')}).map((topItem)=>
                    { return (
                        <Link to ={topItem.linkurl}>
                            <div className="topbar p-2 hover:bg-red-200 rounded-md font-bold grid place-items-center  ">
                                <div className="icon w-6 p-1 "> {topItem.linkIcon} </div>
                                <div className=" link text-s ">{topItem.linkName} </div>
                            </div>
                        </Link>   
                        )
                    })
                } 
              </div>
       
          )
}
export default PublicTopbar;