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
         linkurl: '/Autht/SALogin',        
         visibility: ["Applicant",'CA','NMA']
    },
    {
         linkName: 'CA Login',
         linkurl: '/Autht/CALogin',        
         visibility: ["Applicant",'CA','NMA']
    },
    {
         linkName: 'NMA Login',
         linkurl: '/Autht/NMALogin',        
         visibility: ["Applicant",'CA','NMA']
    }
]
const PublicTopbar=()=>{
    return (       
              <div className="flex topbar w-screen h-15 place-content-end px-2">
                {objtop.filter((topItem)=>{return topItem.visibility.includes('NMA','CA')}).map((topItem)=>
                    { return (
                        <Link to ={topItem.linkurl}>
                            <div className="topbar  p-3 hover:bg-red-200 rounded-md underline-offset-2 text-bold">
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