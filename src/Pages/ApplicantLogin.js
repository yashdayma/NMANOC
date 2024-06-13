import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicantLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // I'll update this function later...
  }

  return (
    <div className="login bg-white rounded-md  p-2 ">
   
      <div className={'titleContainer'}>
        <div className=' font-extrabold  text-4xl grid place-items-center'>Applicant Login</div>
      </div>
      <br />
      <div className=' '> Username/Emalid</div>
      <div className="inputContainer border-black-500 font-bold text-steal-700 grid place-items-center ">
       
        <input
          value={email}
          placeholder="Enter your username"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox w-full p-3 border border-gray-300 rounded  '}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className=''> Password</div>
      <div className="inputContainer border-black-500 font-bold text-steal-700 grid place-items-center">
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={' border-black inputBox "w-full p-3 border border-gray-300 rounded w-full'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer p-4 grid place-items-center'}>
        <input className="inputbutton bg-blue-400 p-2 rounded-md hover:bg-blue-700 hover:font-bold hover:text-white " type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default ApplicantLogin;

    