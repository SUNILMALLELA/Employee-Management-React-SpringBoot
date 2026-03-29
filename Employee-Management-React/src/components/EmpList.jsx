import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployeeAPI, getEmployeeAPI } from "../services/EmployeeService";

const EmpList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeeAPI();
        setEmployees(response.data);
      } catch (error) {
        console.log("Error :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
 const deleteEmployee = async (id) => {
  try {
    await deleteEmployeeAPI(id);
    setEmployees(
      employees.filter((emp) => emp.id !== id)
    );
    alert( "Are you sure you want to delete?");
  } catch (error) {
    console.log("Error :", error);
  }

};

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-700 text-white px-6 py-2 font-semibold hover:bg-slate-900 transition"
        >
          Add Employee
        </button>
      </div>
      <div className="shadow-lg border-b border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Email ID
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {emp.firstName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {emp.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {emp.emailId}
                  </td>
                  <td className="px-6 py-4 text-right space-x-4">
                    <button className="text-indigo-600 hover:text-indigo-900 font-medium" onClick={() => navigate(`/updateEmployee/${emp.id}`)}>Edit</button>
                    <button className="text-red-600 hover:text-red-900 font-medium" onClick={() => deleteEmployee(emp.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpList;