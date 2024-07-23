import React, { useState } from "react";
import "./Register.css";
import { registerUser } from "../reducer/reducerlogin";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const message = useSelector(state => state.auth.message);

  const registerHandle = () => {
    // e.preventDefault()

    dispatch(registerUser({ name, email, password }));
    console.log(name, email,password);
  };

  return (
    <div>
      <div className="box">
        <h3>Register</h3>
        {message && alert(message)}
        <label>Name: </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="">Email: </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="">Password: </label>
        <input
          type="password"
          placeholder="Password"
          name=""
          id=""
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="btn">
          <button
            className="regibtn"
            onClick={() => {
              registerHandle();
            }}
          >
            Register
          </button>
          <button>
            <Link to="/login" className="linkbtn">
              Cancel
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
