// store.js
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './Slices/employeeSlice';
export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    // Add other slices here
    // Add other reducers as needed
  },
});





export default store;