// Import the createSlice function from the @reduxjs/toolkit library
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the modal slice in the Redux store
const initialState = {
  isOpen: false, // Boolean flag indicating whether the modal is open (true) or closed (false)
};

// Create a Redux slice named 'modal' using createSlice
export const modalSlice = createSlice({
  name: 'modal',  // Name of the slice for easy identification
  initialState,     // Define the initial state of the slice

  // Define reducers (functions that update the slice state)
  reducers: {
    openModal: (state) => {
      // Set the isOpen flag to true, indicating the modal is now open
      state.isOpen = true;
    },
    closeModal: (state) => {
      // Set the isOpen flag to false, indicating the modal is now closed
      state.isOpen = false;
    },
  },
});

// Export individual action creator functions for easier usage in components
export const { openModal, closeModal } = modalSlice.actions;

// Export the reducer function of the modal slice for integration with Redux store
export default modalSlice.reducer;

