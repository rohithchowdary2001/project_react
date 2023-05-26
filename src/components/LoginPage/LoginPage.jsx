import React, { useState } from 'react';
import './LoginPage.css';
// import { Link } from 'react-router';
// import EmployeeList from '../employee-list/EmployeeList';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z]+[^0-9]/, '').toUpperCase();

    setUsername(result);
  };
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();





    // Perform validation
    if (username === '') {
      setError('Please enter your username and password.');
    } else if (password === '') {
      setError('Please enter your password.');
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
            <label>Username:</label>
            <input
              type="text"
              maxLength={7}
              value={username}
              // onChange={handleUsernameChange}
              onChange={handleChange}
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
          {error && <p className="error">{error}</p>}
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

export default Login;
