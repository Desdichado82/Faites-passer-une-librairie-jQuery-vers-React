// Import the createSlice function from the @reduxjs/toolkit library
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the employee slice in the Redux store
const initialState = {
  employees: [],  // Array to store employee data
  loading: false,  // Flag indicating whether employee data is being fetched
  error: null,    // Error object in case of any issues during employee data fetching
};

// Create a Redux slice named 'employee' using createSlice
export const employeeSlice = createSlice({
  name: 'employee',  // Name of the slice for easy identification
  initialState,     // Define the initial state of the slice

  // Define reducers (functions that update the slice state)
  reducers: {
    fetchEmployeesStart(state) {
      // Set loading flag to true, indicating data fetch in progress
      state.loading = true;
      // Clear any previous error state
      state.error = null;
    },
    fetchEmployeesSuccess(state, action) {
      // Set loading flag to false, indicating data fetch completed
      state.loading = false;
      // Update the employee data with the payload (fetched employee data)
      state.employees = action.payload;
    },
    fetchEmployeesFailure(state, action) {
      // Set loading flag to false, indicating data fetch completed with error
      state.loading = false;
      // Update the error state with the payload (error information)
      state.error = action.payload;
    },
    addEmployee(state, action) {
      // Handle payload as either a single employee object or an array of employees
      const newEmployees = Array.isArray(action.payload) ? action.payload : [action.payload];
      // Add the new employee(s) to the existing employee list
      state.employees.push(...newEmployees);
    },
    resetEmployees(state) {
      // Reset the slice state to its initial values
      state.employees = [];
      state.loading = false;
      state.error = null;
    },
  },
});

// Export individual action creator functions for easier usage in components
export const { fetchEmployeesStart, fetchEmployeesSuccess, fetchEmployeesFailure, addEmployee, resetEmployees } = employeeSlice.actions;

// Export the reducer function of the employee slice for integration with Redux store
export default employeeSlice.reducer;
