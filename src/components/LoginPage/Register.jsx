import React, { useState } from 'react';
import './LoginPage.css';
// import { Link } from 'react-router';
// import EmployeeList from '../employee-list/EmployeeList';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const handleemailChange = (event) => {
  //   setemail(event.target.value);
  // };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlenameChange = (event) => {
    setName(event.target.value);
  };
  const handleemailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const empData = { name, email, password };
    if (empData.name.length === 0) {
      alert("Please Enter Your Name !!");
    } else if (empData.email.length === 0) {
      alert("Enter your email!!");
    }
    else if (empData.password.length === 0) {
      alert("Please Enter Your Password !!");
    }
    else if (window.confirm("Do you want to Register?")) {
      await axios.post("http://localhost:8081/register", empData);
      // Perform login logic here
      alert('Register successful!');
      window.location.replace("/");
    }
  };
  return (
    <div className='box'>
      <div className='login'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              required
              onChange={handlenameChange}
            />
          </div>
          <br />
          <div className='textfiled'>
            <div>
              <label>Email:</label>
              <input
                type="text"
                value={email}
                // onChange={handleemailChange}
                onChange={handleemailChange}
              />
            </div>
            <br />
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          {/* {error && <p className="error">{error}</p>} */}
          <br />
          {/* <div> */}
          {/* <button onClick={() => navigate("/employe")}>Submit</button> */}
          <button onClick={handleSubmit}>Submit</button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};
export default Register;