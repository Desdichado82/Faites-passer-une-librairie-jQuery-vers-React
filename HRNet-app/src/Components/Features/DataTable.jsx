import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const DataTable = () => {
  // Accessing employee data from Redux store using useSelector hook
  const employees = useSelector((state) => state.employee.employees);

  // Function to sort employees by start date in ascending order
  const sortEmployeesByStartDate = () => {
    return [...employees].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  };

  useEffect(() => {
    console.log('Employee data retrieved from Redux store:', employees);
  }, [employees]); // Log employee data when it changes

  return (
    <div>
      <h2>Employee Data</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Start Date</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Map through employee data from Redux store and render table rows */}
          {sortEmployeesByStartDate().map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.startDate}</td>
              {/* Render more employee data fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

