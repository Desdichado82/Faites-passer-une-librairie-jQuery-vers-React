import {  fetchEmployeesSuccess, addEmployee } from '../Slices/employeeSlice';
import { generateMockEmployees } from '../../Data/MockEmployees'; // Import the mock data generation function

// Function to initialize the application
export const initializeApp = (dispatch) => {
  // Generate mock employees (replace 10 with the desired number of employees)
  const mockEmployees = generateMockEmployees(10);
  
  // Update the Redux store with the generated mock employees
  dispatch(fetchEmployeesSuccess(mockEmployees));
};


export const saveEmployee = (employee) => (dispatch) => {
  try {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    dispatch(addEmployee(employee));
    // Optionally, dispatch other actions for success/error handling

    console.log('Employee saved successfully:', employee); // Log the saved employee data
  } catch (error) {
    console.error('Error saving employee:', error); // Log any errors during the process
    // Handle errors (e.g., show an error message to the user)
  }
};
