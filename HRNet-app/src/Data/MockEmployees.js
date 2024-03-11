// Export a function named generateMockEmployees that creates an array of mock employee objects
export const generateMockEmployees = (count) => {
  // Create an empty array to store the generated employee objects
  const employees = [];

  // Iterate through the specified number of employees to create
  for (let i = 1; i <= count; i++) {
    // Generate basic employee information
    const firstName = `Employee${i}`;
    const lastName = `LastName${i}`;
    const startDate = '2023-01-01'; // Fixed start date in YYYY-MM-DD format
    const department = `Department${Math.floor(Math.random() * 5) + 1}`;
    const dateOfBirth = getRandomDate(new Date(1960, 0, 1), new Date(2000, 11, 31)); // Random date of birth
    const street = `Street${i}`;
    const city = `City${i}`;
    const state = `FL`;
    const zipCode = `ZIP${i}`;

    // Create an employee object with the generated data
    employees.push({
      id: i,                            // Unique employee ID
      firstName,                         // Employee's first name
      lastName,                         // Employee's last name
      startDate,                         // Employee's start date (fixed to 2023-01-01)
      department,                        // Employee's department (randomly assigned)
      dateOfBirth: formatDate(dateOfBirth), // Employee's date of birth in YYYY-MM-DD format
      street,                            // Employee's street address
      city,                              // Employee's city
      state,                             // Employee's state
      zipCode,                           // Employee's zip code
    });
  }

  // Return the array of generated employee objects
  return employees;
};

// Helper function to format a date as YYYY-MM-DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Helper function to generate a random date between a specified start and end date
const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Example usage:
const numberOfEmployees = 10;
const mockEmployees = generateMockEmployees(numberOfEmployees);
console.log(mockEmployees); // Output the generated employee data

// Export the generateMockEmployees function as the default export
export default generateMockEmployees;

  