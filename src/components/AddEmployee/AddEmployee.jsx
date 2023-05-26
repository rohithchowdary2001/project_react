import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import {v1 as uuid} from "uuid"; 
import Employee from '../../Employee';
import { Link, useNavigate } from 'react-router-dom';
// import './AddEmployee.css';
const AddEmployee = () => {
    
const[name,setName] = useState('');
const[age,setAge] = useState('');
const[city,setCity] = useState('');
// const[name,setName] = useState('');
let history = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    const uniId= uuid();
    let uuids=uniId.slice(0,8);
    Employee.push({id:uuids,Name:name,Age:age,City:city})
    history('/employe')
}

  return (<>
<Form>
    <Form.Group>
    <Form.Control type='text' placeholder='Enter the name' required onChange={(e)=> setName(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the age' required onChange={(e)=> setAge(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the city' required onChange={(e)=> setCity(e.target.value)}></Form.Control>
    </Form.Group>
    <Button onClick={(e)=>handleSubmit(e)} type='submit' >Submit</Button>
</Form>
    </>
  )
}

export default AddEmployee;
