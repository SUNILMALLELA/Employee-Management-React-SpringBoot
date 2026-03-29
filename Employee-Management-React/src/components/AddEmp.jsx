import React, { useState } from 'react'
import { saveEmployeeAPI } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmp = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };
  const navigate = useNavigate();
 const saveEmployee = async (e)=>{
 e.preventDefault();
 try {
  const response = await saveEmployeeAPI(employee);
  console.log("Saved",response.data);
  navigate("/empList")

 } catch(error){
  console.log("Error",error);
 }
 setEmployee({
   id: "",
  firstName: "",
  lastName: "",
 emailId: ""
 })

}
  return (
    <>
      <div className='flex max-w-2xl shadow border-b mx-auto mt-6'>
        <div className='px-8 py-8 w-full'>

          <div className='font-thin text-2xl tracking-wider'>
            <h1>Add New Employee</h1>
          </div>
          <div className='my-4'>
            <label className='block text-gray-600 text-sm'>
              First Name
            </label>
            <input
              className='h-10 w-full border mt-2 px-2 py-2'
              type='text'
              name='firstName'
              value={employee.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='my-4'>
            <label className='block text-gray-600 text-sm'>
              Last Name
            </label>
            <input
              className='h-10 w-full border mt-2 px-2 py-2'
              type='text'
              name='lastName'
              value={employee.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='my-4'>
            <label className='block text-gray-600 text-sm'>
              Email
            </label>
            <input
              className='h-10 w-full border mt-2 px-2 py-2'
              type='email'
              name='emailId'
              value={employee.emailId}
              onChange={handleChange}
            />
          </div>
          <div className='space-x-4 pt-4'>
            <button className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700' onClick={saveEmployee}>
              Save
            </button>
            <button
              className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700'
              onClick={() =>
                setEmployee({
                  id: "",
                  firstName: "",
                  lastName: "",
                  emailId: ""
                })
              }
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddEmp
