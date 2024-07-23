import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../reducer/reducerlogin";
import "./Login.css";
import { useSelector } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(state => state.auth.message);
  const loginhandle = () => {
    // e.preventDefault()
    dispatch(loginUser({name, password}));
    console.log(name, password);
  
  };
  return (
    <div>
      {" "}
      <div className="box box_h">
        <h3>Login</h3>
        {message && alert(message)}
        <label>Name: </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">Password: </label>
        <input
          type="password"
          placeholder="Password"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='btn'>
          <button
            className="regibtn"
            onClick={() => {
              loginhandle();
            }}
          >
            Login{" "}
          </button>
          <button>
            <Link to="/register" className='linkbtn'>Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
