import React from 'react';
import './EmployeeList.css';
import { Link, useAsyncValue, useNavigate } from 'react-router-dom';
// import Employee from '../../Employee';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
function EmployeeList() {
  const [empdata, empdatachange] = useState([]);
  let history = useNavigate();
  const handleDelete = async (id) => {
    if (window.confirm("Do you want to remove?")) {
      await axios.delete(`http://localhost:8081/api/v1/delete/${id}`);
      window.location.reload();
      alert("Removed successfully.");
      history('/employe');
    }
  };
  const handleEdit = (id,name,age,sex,dob,city)=>
  {
    localStorage.setItem('id', id)
    localStorage.setItem('Name', name)
    // localStorage.setItem('Img', img)
    localStorage.setItem('Age', age)
    localStorage.setItem('Sex', sex)
    localStorage.setItem('Dob', dob)
    localStorage.setItem('City', city)
    history('/employe');
  }
  useEffect(() => {
    loadUsers();
    console.log(empdata);
  }, []);
  const LoadEdit = (id) => {
    history("/editEmployee/" + id);
  };
  const loadUsers = async () => {
    const res = await axios.get("http://localhost:8081/api/v1/details");
    empdatachange(res.data);
  };
  return (
    <div >
      {/* <div class="pill-nav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div> */}
      <div>
        <h3>Employee List</h3>
      </div>
      <Link to={'/'}>
        <button className='logout'>Logout</button>
      </Link>
      <table className='emp'>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>IMG</th>
          {/* <th>AGE</th> */}
          <th>SEX</th>
          <th>DOB</th>
          <th>Location</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {empdata &&
          empdata.map((item,index) => (
            <tr key={item.id}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              {/* <td>{item.img}</td> */}
              <td>{item.age}</td>
              <td>{item.sex}</td>
              <td>{item.dob}</td>
              <td>{item.city}</td>
              <td>
                <button onClick={() => { LoadEdit(item.id) }}>Edit</button>
              </td>
              <tb>
                <button className='delete' onClick={() => handleDelete(item.id)}>Delete</button>
              </tb>
            </tr>
          ))}
      </table>
      <div align='center' style={{ marginRight: '300px' }}>
        <Link to={'/AddEmployee'}>
          <button className='add' >Add</button>
        </Link>
      </div>
    </div>
  );
}
export default EmployeeList;