import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
        <div className="box1">
        <h3 className='sign'>Sign Up</h3>
            <form action="">
              <input type="text" className='input1' placeholder='User Name' required/>
                <input type="email"  className='input1' placeholder='Email' required/><br />
                <input type="password" className='input1' placeholder='Password'required /><br />
                <button className='loginbtn1' ><Link to={"/travel"} className=' btn'> Sign Up </Link></button>
            </form>
        </div>
    </div>
  )
}

export default Signup