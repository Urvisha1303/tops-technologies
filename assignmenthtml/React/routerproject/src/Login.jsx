import React from 'react'
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  return (
    <div>
        <div className="box">
        <h3>Login</h3>
            <form action="">
                <input type="email"  className='input' placeholder='Email' required/><br />
                <input type="password" className='input' placeholder='Password' required/><br />
                <button className='loginbtn'><Link to={"/signup"} className=' btn'>Login </Link></button>
                
            </form>
        </div>
    </div>
  )
}

export default Login