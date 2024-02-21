import { useState } from 'react';
import { saveEmployee } from '../../Redux/Thunks/employeeThunk';
import { useDispatch } from 'react-redux';
import { HRNetForm, InputGroup, Label, Input } from '../../styles/Components/inputStyles/inputs';

import {Title} from '../../styles/Pages/CreateEmployee/CreateEmployeeStyles';

let counter = 0;

const generateUniqueId = () => {
  return `emp_${counter++}`;
};

 export const CreateEmployeeForm = ({ onEmployeeCreate }) => {
  const dispatch = useDispatch(); // Get the dispatch function

  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
  
    const newEmployee = { ...formData, id: generateUniqueId() };
    // Dispatch the new employee data to the Redux store
    dispatch(saveEmployee(newEmployee));
    // Once the submission is successful, set isModalOpen to true
   // Call the onEmployeeCreate callback to indicate that a new employee has been created
   onEmployeeCreate();
    console.log('New Employee:', newEmployee);
  };



  return (
    <HRNetForm onSubmit={handleSubmit}>
      <Title>Create Employee</Title>
      <InputGroup>
        <Label htmlFor="first-name">First Name</Label>
        <Input type="text" id="first-name" name="firstName" onChange={handleInputChange} />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="last-name">Last Name</Label>
        <Input type="text" id="last-name" name="lastName" onChange={handleInputChange} />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="date-of-birth">Date of Birth</Label>
        <Input type="date" id="date-of-birth" name="dateOfBirth" onChange={handleInputChange} />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="start-date">Start Date</Label>
        <Input type="date" id="start-date" name="startDate" onChange={handleInputChange} />
      </InputGroup>
      <fieldset className="address">
        <legend>Address</legend>
        <InputGroup>
          <Label htmlFor="street">Street</Label>
          <Input type="text" id="street" name="street" onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" name="city" onChange={handleInputChange} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="state">State</Label>
          <select id="state" name="state" onChange={handleInputChange}>
            <option value="">Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
          </select>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="zip-code">Zip Code</Label>
          <Input type="number" id="zip-code" name="zipCode" onChange={handleInputChange} />
        </InputGroup>
      </fieldset>
      <InputGroup>
        <Label htmlFor="department">Department</Label>
        <select id="department" name="department" onChange={handleInputChange}>
          <option value="">Select Department</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
        </select>
      </InputGroup>
      <input type="submit" onClick={handleSubmit} value="Save" />
    </HRNetForm>
  );
};

export default CreateEmployeeForm;

