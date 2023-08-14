import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
// import Employee from '../../Employee';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./EditEmployee.css";
import { Link } from 'react-router-dom';

const EditEmployee = () => {
  const { eid } = useParams();
  console.log("eid:", eid);

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

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8081/api/v1/employees/${eid}`);
      console.log(res.data); // Log the response to the console
      const employeeData = res.data[0];
      setName(employeeData.name);
      setAge(employeeData.age);
      setSex(employeeData.sex);
      setDob(employeeData.dob);
      setCity(employeeData.city);
    } catch (error) {
      console.error(error); // Log any errors to the console
    }
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
        <input type='text' placeholder='Enter the name' defaultValue={name} required onChange={(e) => setName(e.target.value)}></input>
        <br /><br />
        {/* <label>Select image:</label>
        <input type='file' value={name} required onChange={(e) => setImg(e.target.value)}></input>
        <br /><br /> */}
        <label>Age :</label>
        <input type='number' placeholder='Enter the age' value={age} required onChange={(e) => setAge(e.target.value)}></input>
        <br /><br />
        <div>
          <label >Sex :</label>
          <input type='radio' required value={sex || ""} name="Sex" onChange={(e) => setSex(e.target.value)}></input>Male
          <input type='radio'  required value={sex || ""} name="Sex" onChange={(e) => setSex(e.target.value)}></input>Female</div>
        <br />
        <label>DOB :</label>
        <input type='date' required value={dob} onChange={(e) => setDob(e.target.value)}></input>
        <br /><br />
        <label>Location :
          <select name="City" value={city} onChange={(e) => setCity(e.target.value)}><option>None</option>
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

