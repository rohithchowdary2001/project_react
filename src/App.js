import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import EmployeeList from './components/employee-list/EmployeeList';
import LoginPage from './components/LoginPage/LoginPage';
import Edit from './components/Edit';
import AddEmployee from './components/AddEmployee/AddEmployee';
import EditEmployee from './components/EditEmployee/EditEmployee';

function App() {
  return (
    <Router>
    <Routes>
    < Route exact path="/" element={<LoginPage />} />
    <Route exact path="/employe" element={<EmployeeList />} />
    <Route exact path="/AddEmployee" element={<AddEmployee />} />
    <Route exact path="/editEmployee" element={<EditEmployee />} />

    </Routes>
  </Router>
  );
}

export default App;
