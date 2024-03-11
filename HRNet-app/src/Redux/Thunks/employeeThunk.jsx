// Import necessary actions from the employee slice and the mock data generation function
import { fetchEmployeesSuccess, addEmployee } from '../Slices/employeeSlice';
import { generateMockEmployees } from '../../Data/MockEmployees';

// Function to initialize the application
export const initializeApp = (dispatch) => {
  // 1. Generate mock employee data:
  //   - Call the generateMockEmployees function to create 10 (or any desired number) of mock employee objects
  const mockEmployees = generateMockEmployees(10);

  // 2. Update the Redux store with mock employees:
  //   - Dispatch the fetchEmployeesSuccess action to signal successful data fetching
  //     and update the employee slice with the generated mock employees
  dispatch(fetchEmployeesSuccess(mockEmployees));
};

// Function to save a new employee to local storage and Redux store
export const saveEmployee = (employee) => (dispatch) => {
  try {
 

    // 1. Update the Redux store:
    //   - Dispatch the addEmployee action to add the new employee to the Redux store as well
    dispatch(addEmployee(employee));

    // 2. Log success and potentially dispatch success/error actions for further handling
    console.log('Employee saved successfully:', employee);

    // 3. (Optional) Dispatch additional actions for success or error handling

  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error saving employee:', error);
    // 4. Implement error handling (e.g., show an error message to the user)
  }
};
