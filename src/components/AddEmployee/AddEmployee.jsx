import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AddEmployee.css";
const AddEmployee = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const empdata = { name, img, age, sex, dob, city };
    // await axios.post(
    //   `http://localhost:8081/api/v1/create`,empdata
    // );
    if (empdata.name.length === 0) {
      alert("Please Enter Your Name !!");
    } else if (empdata.age.length === 0) {
      alert("Age Not Be Empty!!");
    }
    else if (empdata.sex.length === 0) {
      alert("Please Enter Your Gender !!");
    }
    else if (empdata.dob.length === 0) {
      alert("Please Enter Your Date Of Birth !!");
    }
    else if (empdata.city.length === 0) {
      alert("Please Enter Your City !!");
    } else if (window.confirm("Do you want to save ?")) {
      // Perform login logic here
      await axios.post(
        `http://localhost:8081/api/v1/create`, empdata
      );
      window.location.replace("/employe");
    }
  }
  return (<>
    <div className='edit'>
      <Link to={'/employe'}>
        <button className='add'>Back</button>
      </Link>
      <div className='hii' >
        <h3>Add Employee</h3>
        <br />
        <label>Name :</label>
        <input type='text' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required></input>
        <br /><br />
        <label>Select image :</label>
        <input type='file' accept="image/*" onChange={(e) => setImg(e.target.value)} required></input>
        <br /><br />
        <label>Age :</label>
        <input type='number' placeholder='Enter Your Age' required onChange={(e) => setAge(e.target.value)}></input>
        <br /><br />
        <div>
          <label>Sex :</label>
          <input type='radio' required value="M" name="Sex" onChange={(e) => setSex(e.target.value)}></input>Male
          <input type='radio' required value="F" name="Sex" onChange={(e) => setSex(e.target.value)}></input>Female</div>
        <br />
        <label>DOB:</label>
        <input type='date' required value={dob} onChange={(e) => setDob(e.target.value)}></input>
        <br /><br />
        <label> Location :
          <select name="City" onChange={(e) => setCity(e.target.value)}><option>None</option>
            <option>Vijayawada</option>
            <option>Chennai</option>
            <option>Banglore</option>
            <option>Pune</option></select>
        </label>
        <br /><br />
        <Button onClick={(e) => handleSubmit(e)} type='submit' >Submit</Button> </div>
    </div>
  </>
  )
}
export default AddEmployee;