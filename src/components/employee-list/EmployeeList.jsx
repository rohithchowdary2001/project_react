import React from 'react';
 import './EmployeeList.css';
 import { Link, useNavigate } from 'react-router-dom';
import Employee from '../../Employee';

function EmployeeList(){

let history = useNavigate();
  
  const handleDelete=(id)=>{
    var index=Employee.map(function(e)
    {
        return e.id
    }).indexOf(id);
    Employee.splice(index,1);
    history('/employe');
}

const handleEdit=(id,name,age,city)=>{
    localStorage.setItem('id',id)
    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('City',city)
    history('/employe');
}

  
    return (
      <div>

<table>
  <tr>
    <th>No.</th>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>City</th>

    {/* <th>SALARY</th>
    <th>DEPARTMENT</th> */}
  </tr>
  
  {Employee
          ? Employee.map((item, i) => (
            <>
              <tr>
                <td>  {i+1} {' '}</td>
                <td>  {item.id} {' '}</td>
                <td>  {item.Name} {' '}</td>
                <td>  {item.Age} {' '}</td>
                <td>  {item.City} {' '}</td>
                {/* <td>  {item.name.first} {item.name.last}{' '}</td>
                <td>  {item.gender} {' '}</td>
                <td>  {item.email} {' '}</td>
                <td>  {item.registered.age} {' '}</td> */}
                {/* <td>  {''} {' '}</td>
                <td>  {''} {' '}</td> */}
                <td>
                    <Link to={'/editEmployee'}>
                 <button  onClick={()=>handleEdit(item.id,item.Name,item.Age)}>Edit</button>
                 </Link>
                 
                &nbsp;
                 <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </td>
                {/* <td><a class="btn btn-primary" href="/Edit" role="button">Edit</a></td>
                <td><a class="btn btn-primary" href="#" role="button">Delete</a></td> */}


                </tr>
            </>
           
            ))
          : null}


</table>

<Link to={'/AddEmployee'}>
                 <button >Add</button>
                 </Link>

        
      </div>
    );
  
}

export default EmployeeList;
