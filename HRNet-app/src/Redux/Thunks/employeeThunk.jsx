import {  fetchEmployeesSuccess, fetchEmployeesFailure, addEmployee } from '../Slices/employeeSlice';



// Function to fetch employees from local storage
const fetchEmployeesFromLocalStorage = () => {
  try {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    return employees;
  } catch (error) {
    console.error('Error fetching employees from local storage:', error);
    return [];
  }
};

// Function to initialize the application
export const initializeApp = (dispatch) => {
  // Fetch employees from local storage
  const employees = fetchEmployeesFromLocalStorage();
  
  // Update the Redux store with the fetched employees
  if (employees) {
    dispatch(fetchEmployeesSuccess(employees));
  } else {
    dispatch(fetchEmployeesFailure('Failed to fetch employees'));
  }
};

export default initializeApp;


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
