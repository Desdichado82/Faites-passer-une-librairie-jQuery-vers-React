import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    fetchEmployeesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEmployeesSuccess(state, action) {
      state.loading = false;
      state.employees = action.payload;
    },
    fetchEmployeesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addEmployee(state, action) {
      const newEmployees = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.employees.push(...newEmployees);
    },
    resetEmployees(state) {
      state.employees = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { fetchEmployeesStart, fetchEmployeesSuccess, fetchEmployeesFailure, addEmployee, resetEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
