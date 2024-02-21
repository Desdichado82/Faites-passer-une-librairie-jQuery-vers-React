// Router.js

import { Routes, Route } from "react-router-dom";
import CreateEmployeePage from '../Pages/CreateEmployee/CreateEmployee';
import EmployeeListPage from '../Pages/EmployeeList/EmployeeList';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateEmployeePage />} />
      <Route path="/employeeList" element={<EmployeeListPage />} />
      
    </Routes>
  );
};

export default AppRoutes;