export const generateMockEmployees = (count) => {
    const employees = [];
  
    for (let i = 1; i <= count; i++) {
      const firstName = `Employee${i}`;
      const lastName = `LastName${i}`;
      const startDate = '2023-01-01'; // Fixed start date in YYYY-MM-DD format
      const department = `Department${Math.floor(Math.random() * 5) + 1}`;
      const dateOfBirth = getRandomDate(new Date(1960, 0, 1), new Date(2000, 11, 31)); // Random date of birth
      const street = `Street${i}`;
      const city = `City${i}`;
      const state = `FL`;
      const zipCode = `ZIP${i}`;
  
      employees.push({
        id: i,
        firstName,
        lastName,
        startDate,
        department,
        dateOfBirth: formatDate(dateOfBirth), // Format date of birth as YYYY-MM-DD
        street,
        city,
        state,
        zipCode,
      });
    }
  
    return employees;
  };
  
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  
  // Example usage:
  const numberOfEmployees = 10;
  const mockEmployees = generateMockEmployees(numberOfEmployees);
  console.log(mockEmployees);
  
  export default generateMockEmployees;
  