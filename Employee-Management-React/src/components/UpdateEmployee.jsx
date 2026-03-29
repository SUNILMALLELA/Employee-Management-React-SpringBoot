import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getEmployeeAPIById, updateEmployeeAPI} from "../services/EmployeeService";
const UpdateEmployee = () => {
 const navigate = useNavigate();
 const { id } = useParams();
 const [employee, setEmployee] = useState({
  id: "",
  firstName: "",
  lastName: "",
  emailId: ""
 });
 useEffect(() => {
  getEmployeeAPIById(id)
   .then((response) => {
    setEmployee(response.data);
   })
   .catch((error) => {
    console.log("Error :", error);
   });
 }, [id]);
 const handleChange = (e) => {
  const { name, value } = e.target;
  setEmployee({
   ...employee,
   [name]: value
  });
 };
 const updateEmployee = async (e) => {
  e.preventDefault();
  try {
   const response = await updateEmployeeAPI( id, employee );
   console.log("Updated :", response.data);
   alert("Employee Updated Successfully")
   navigate("/empList");
  } catch (error) {
   console.log("Error :", error);
  }
 };
 const cancelUpdate = () => {
  navigate("/empList");
 };
 return (
  <>
<div className="flex max-w-2xl shadow border-b mx-auto mt-6">
<div className="px-8 py-8 w-full">
<div className="font-thin text-2xl tracking-wider">
<h1>Update Employee</h1>
</div>
<div className="my-4">
<label className="block text-gray-600 text-sm">First Name</label>
<input className="h-10 w-full border mt-2 px-2 py-2" type="text" name="firstName" value={employee.firstName}onChange={handleChange}/>
</div>
<div className="my-4">
<label className="block text-gray-600 text-sm">Last Name</label>
<input className="h-10 w-full border mt-2 px-2 py-2" type="text" name="lastName"value={employee.lastName}onChange={handleChange}/>
</div>
<div className="my-4">
<label className="block text-gray-600 text-sm">Email</label>
<input className="h-10 w-full border mt-2 px-2 py-2" type="email"name="emailId"value={employee.emailId}onChange={handleChange}/>
</div>
<div className="space-x-4 pt-4">
<button className="rounded text-white font-semibold bg-blue-500 py-2 px-6 hover:bg-blue-700"onClick={updateEmployee}> Update Employee</button>
<button className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"onClick={cancelUpdate}>Cancel</button>
</div>
</div>
</div>
</>
 );

};

export default UpdateEmployee;