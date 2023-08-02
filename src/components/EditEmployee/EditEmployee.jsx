import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
// import Employee from '../../Employee';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./EditEmployee.css";
import { Link } from 'react-router-dom';
const EditEmployee = () => {
  const { eid } = useParams();
  const [id, idchange] = useState('');
  const [name, setName] = useState('');
  // const [img, setImg] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');
  useEffect(() => {
    getUser();
  }, []);
  let history = useNavigate();
  const getUser = async () => {
    const res = await axios.get(`http://localhost:8081/api/v1/details/:id` + eid);
    setName(res.data.name);
    // setImg(res.data.img);
    setAge(res.data.age);
    setSex(res.data.sex);
    setDob(res.data.dob);
    setCity(res.data.city);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const empdata = { id, name, age, sex, dob, city };
    // await axios.put(`http://localhost:8081/api/v1/details/` + eid, empdata);
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
      await axios.put(`http://localhost:8081/api/v1/details/` + eid, empdata);

      window.location.replace("/employe");
    }
  }
  return (
    <div className='edit'>
      <Link to={'/employe'}>
        <button className='add'>Back</button>
      </Link>
      <div className='hii'>
        <h3>Edit Employee</h3>
        <label>Name :</label>
        <input type='text' placeholder='Enter the name' value={name} required onChange={(e) => setName(e.target.value)}></input>
        <br /><br />
        {/* <label>Select image:</label>
        <input type='file' value={name} required onChange={(e) => setImg(e.target.value)}></input>
        <br /><br /> */}
        <label>Age :</label>
        <input type='number' placeholder='Enter the age' value={age} required onChange={(e) => setAge(e.target.value)}></input>
        <br /><br />
        <div>
          <label>Sex :</label>
          <input type='radio' required value="M" name="Sex" onChange={(e) => setSex(e.target.value)}></input>Male
          <input type='radio' required value="F" name="Sex" onChange={(e) => setSex(e.target.value)}></input>Female</div>
        <br />
        <label>DOB :</label>
        <input type='date' required value={dob} onChange={(e) => setDob(e.target.value)}></input>
        <br /><br />
        <label>Location :
          <select name="City" onChange={(e) => setCity(e.target.value)}><option>None</option>
            <option>Vijayawada</option>
            <option>Chennai</option>
            <option>Banglore</option>
            <option>Pune</option></select>
        </label>
        <br />
        <br /><br />
        <Button onClick={(e) => handleSubmit(e)} type='submit' >Update</Button>
      </div>
    </div>
  )
}
export default EditEmployee;