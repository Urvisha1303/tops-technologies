import React, { useState } from "react";
import "./Login.css";
import {useLogin} from './LoginContext'
import { useTheme } from "./Themeprovider";

const Login = () => {

    const {loginContext, setLoginContext} = useLogin()
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const {theme, setTheme} = useTheme()

    const loginbtn = () =>{
        setLoginContext("light")
        console.log('Login:', loginContext);
    }

  return (
    <div className={`box ${theme ==="light"? "light": "dark"}`} >
      <div className="header">
        <h4>Amazing Service</h4>
        <button className="theme" onClick={()=>{
            setTheme((e)=> (e=== 'light'? 'Dark': 'light'))
        }}>switch to {theme === "light"? "Dark": "Light"}</button>
        
      </div>
      <h3>Log in</h3>
      <label htmlFor="" >Email</label>
      <br />
      <input type="text" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} className={`${theme === 'light'?'inputlight' : 'inputdark' }`}/>
      <br />
      <br />
      <label htmlFor="" >Password</label>
      <input type="text"value={Password} onChange={(e)=> setPassword(e.target.value)} className={`${theme === 'light'?'inputlight' : 'inputdark' }`}/>
      <br />
      <br />
      <button onClick={()=>{
        loginbtn()
      }}>Log in</button>
      <p>
        <sup>________________________</sup>OR<sup>________________________</sup>
      </p>

      <button className="createaccount">Create Account</button>
    </div>
  );
};

export default Login;
