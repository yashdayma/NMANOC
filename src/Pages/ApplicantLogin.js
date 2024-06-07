import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicantLogin = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later...
  }

  return (
    <div className="publicLayout w-[50%] h-[56%] bg-white rounded-md grid place-items-center ">
   

      <div className={'titleContainer'}>
        <div className=' text-3xl'>ApplicantLogin</div>
      </div>
      <br />
      <div className={'inputContainer border-black-500'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={' border-black inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className="inputbutton bg-blue-400 p-2 rounded-md" type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default ApplicantLogin;

    