import React from "react";

const Feedback=()=>{
    return (

       <div className="feedback ml-8 border border-2 border-grey size-full p-8">
         <div className="font-extrabold text-3xl border-b border-black p-4 bg-orange-300">Feedback </div>
         <div className="p-4 w-full">
            <label className="lable font-bol mt-8"> Name <span className="text-red-700">*</span></label>
            <input class="form-control w-full h-8 hover:border-2 border-green-400 " id="applicant_name" 
              pattern="^[a-zA-Z ]+$" 
              title="A-Z a-z ' '" name="applicant_name" placeholder="Enter Name" 
              required="true">
            </input>
         </div>
         <div className="p-4 w-full">
            <label className="label mt-8">Email Id<span className="text-red-700">*</span></label>
            <input className="form-control w-full h-8 hover:border-2 border-green-400 " id="applicant_email" 
                pattern="^[a-z0-9]+@[a-z]"
                placeholder="Enter Your Email" required="true">
            </input>
         </div>
         <div className="p-4 w-full"> 
            <label className="label">Mobile Number<span className="text-red-700">*</span></label>
            <input className="form-control num h-8 w-full hover:border-2 border-green-400 " id="applicant_mobile" 
            placeholder="Enter Your Mobile number" minLength={10}
            maxLength={10} required="true">
            </input>
         <div>Please enter 10 digit mobile number excluding 0 and +91</div>

          </div>
         <div className="p-4 w-full">
          <label className="label">Address <span className="text-red-700">*</span></label>
          <textarea class="form-control address w-full hover:border-2 border-green-400" id="address" name="address"
            placeholder="Enter your Address" required="true" rows="5">
          </textarea>
         </div> 
         <div className="p-4 w-full">
          <label className="label">Comment<span className="text-red-700">*</span></label>
          <textarea class="form-control comment w-full hover:border-2 border-green-400" id="comment" name="comment"
            placeholder="Enter your feedback or comment " required="true" rows="5">
          </textarea>
         </div> 
         <div className="p-4 w-full">
            <label className="label mr-10">Competent Authority<span className="text-red-700">*</span></label>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="border border-2 text-hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex 
            items-center bg-blue-300 hover:text-white  hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Competent Authority
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
         </div>
         <div className="ml-36 p-4 w-full justify-content-center">
            <button className=" text-center w-24 hover:bg-blue-800 hover:text-white hover:font-bold font-medium rounded-md text-lg dark:bg-blue-600 bg-blue-400"
            onClick={SubmitEvent} type="button"> Submit</button>
         </div>
          
       </div>
      
      

    )
}

    export default Feedback;