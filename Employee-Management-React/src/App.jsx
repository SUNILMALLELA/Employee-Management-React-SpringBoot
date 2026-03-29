import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddEmp from "./components/AddEmp";
import EmpList from "./components/EmpList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmpList />} />
          <Route path="/" element={<EmpList />} />
          <Route path="/empList" element={<EmpList />} />
          <Route path="/addEmployee" element={<AddEmp />} />
          <Route path="/updateEmployee/:id" element={<UpdateEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;