import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div>
        <div className="box">
        <h3>Login</h3>
            <form action="">
                <input type="email"  className='input' placeholder='Email'/><br />
                <input type="password" className='input' placeholder='Password' /><br />
                <input type="button" value="Login" className='loginbtn' />
                <input type="button" value="Sign Up" className='signupbtn' />
            </form>
        </div>
    </div>
  )
}

export default Login