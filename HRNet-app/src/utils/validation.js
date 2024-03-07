// validation.js

// Function to validate text input
export const validateTextInput = (value) => {
    return value.trim() !== '';
  };
    
  // Function to validate select input
  export const validateSelectInput = (value) => {
    return value !== '';
  };
    
  // Function to validate date input
  export const validateDateInput = (value) => {
    // Assuming date format is YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(value);
  };
    
  // Function to validate number input
  export const validateNumberInput = (value) => {
    // Check if the value is not empty and is a valid number
    return value !== '' && !isNaN(value);
};
    
  // Function to validate the entire form
  export const validateForm = (formData) => {
    const {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department
    } = formData;
  
    const errors = {};
  
    // Check each field and add errors to the errors object
    if (!validateTextInput(firstName)) {
      errors.firstName = 'First name is required';
    }
  
    if (!validateTextInput(lastName)) {
      errors.lastName = 'Last name is required';
    }
  
    if (!validateDateInput(dateOfBirth)) {
      errors.dateOfBirth = 'Date of birth is required and must be in YYYY-MM-DD format';
    }
  
    if (!validateDateInput(startDate)) {
      errors.startDate = 'Start date is required and must be in YYYY-MM-DD format';
    }
  
    if (!validateTextInput(street)) {
      errors.street = 'Street is required';
    }
  
    if (!validateTextInput(city)) {
      errors.city = 'City is required';
    }
  
    if (!validateSelectInput(state)) {
      errors.state = 'State is required';
    }
  
    if (!validateNumberInput(zipCode)) {
        errors.zipCode = "ZIP code is required and must be a valid number";
      }
  
    if (!validateSelectInput(department)) {
      errors.department = 'Department is required';
    }
  
    return errors;
  };
  