import React, { useState } from 'react';
import './LoginPage.css';
// import { Link } from 'react-router';
// import EmployeeList from '../employee-list/EmployeeList';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const handleChange = event => {
    const result = event.target.value.replace(' ');
    setEmail(result);
  };
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.get(
      `http://localhost:8081/getresponse/${email}/${password}`
    );
    // Perform validation
    if (res.data === "wrong mail") {
      alert("Email doesn't exist");
    } else if (res.data === "wrong pass") {
      alert("Wrong Password");
    } else {
      // Perform login logic here
      setError('');
      navigate('/employe');
      alert('Login successful!');
    }
  };
  return (
    <div className='box'>
      <div className='login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='textfiled'>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                // onChange={handleemailChange}
                onChange={handleChange} required
              />
            </div>
            <br />
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange} required
              />
            </div>
          </div>
          {error && <p className="error">{error}</p>}
          <br />
          {/* <div> */}
          {/* <button onClick={() => navigate("/employe")}>Submit</button> */}
          <button >Submit</button>
          {/* </div> */}
        </form>
        <p>Not Registered</p><Link to='/register'>Register</Link>
      </div>
    </div>
  );
};
export default Login;