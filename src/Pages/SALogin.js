import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SALogin =()=>{
    const[username,setUsername]=useState ('')
    const [password, setPassword]=useState('')
    const [usernameError,setUsernameError]=useState('')
    const [passwordError,setPasswordError]=useState('')
    const navigate =useNavigate()

    const onButtonClick=()=>{

    }
    return (
        <div className="login rounded-md p-2">
            <div className="titleContainer font-extrabold text-3xl bg-yellow-400 text-red-600 p-1">

               SA Login
            </div>
            <div className="mt-12 ">
                Username/Email
            </div>
            <div className="inputContainer border border-black-500 font-bold text-steal-700 mb-4">
                <input value={username} 
                placeholder=" Enter your User Name"
                onChange={(ev)=>setUsername(ev.target.value)}
                className="inputBox w-full p-3 border border-grey-500 rounded-md "/>
                <label className="errorLabel"> {usernameError} </label>
               
            </div>
            <div className="">Password</div>
            <div className=" inputContainer border border-black-500 rounded-sm font-bold">
                <input 
                value={password}
                placeholder="Please enter your Password"
                onChange={(ev) =>setPassword(ev.target.value)}
                className="border-black inputBox w-full p-3 border border-gray-300 rounded-lg "/>
                 <label className="errorLabel">{passwordError}</label>
            </div>
            <div className="grid place-item-center mt-12 ">
            <input className="inputbutton bg-blue-400 p-2 rounded-md hover:bg-blue-700 hover:font-bold hover:text-white " type="button" onClick={onButtonClick} value={'Log in'} />
            </div>

        </div>
    )
}
export default SALogin;