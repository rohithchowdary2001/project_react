import React, {useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import {v1 as uuid} from "uuid"; 
import Employee from '../../Employee';
import { Link, useNavigate } from 'react-router-dom';
// import './AddEmployee.css';
const EditEmployee = () => {
    
const[name,setName] = useState('');
const[age,setAge] = useState('');
const[id,setId] = useState('');
const[city,setCity] = useState('');
// const[name,setName] = useState('');

useEffect(()=>{

    // setName(localStorage.getItem('Name'));
    // setAge(localStorage.getItem('Age'))
    setId(localStorage.getItem('id'))
})
let history = useNavigate();

var index=Employee.map(function(e)
{
    return e.id
}).indexOf(id);

const handleSubmit=(e)=>{
    e.preventDefault();
    let a = Employee[index]
    a.Name = name;
    a.Age = age;
    a.City=city;
    history('/employe')
}

  return (<>
<Form>
    <Form.Group>
    <Form.Control type='text' placeholder='Enter the name' defaultValue="" value={name} required onChange={(e)=> setName(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the age' defaultValue="" value={age} required onChange={(e)=> setAge(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the city' defaultValue="" value={city} required onChange={(e)=> setCity(e.target.value)}></Form.Control>
    </Form.Group>
    <Button onClick={(e)=>handleSubmit(e)} type='submit' >Update</Button>
</Form>

    {/* <div className='edit'>
      <h1>Edit Page</h1>
      <form>
  <div className="form-group">
    <label for="editid">ID</label>
    <input type="text" className="form-control" id="editid" aria-describedby="emailHelp" placeholder="Enter ID"/><br/>
    <label for="editname">Name</label>
    <input type="text" className="form-control" id="editname" aria-describedby="emailHelp" placeholder="Enter name"/><br/>
    <label for="editname">Age</label>
    <input type="text" className="form-control" id="editname" aria-describedby="emailHelp" placeholder="Enter Age"/><br/>
  </div><br/>
  <input className="btn btn-primary" type="submit" value="Submit"></input>
  </form>
    </div> */}
    </>
  )
}

export default EditEmployee;
