import  { useState } from 'react';
import { saveEmployee } from '../../Redux/Thunks/employeeThunk';
import { useDispatch } from 'react-redux';
import { SelectComponent } from '../common/Select/selectComponent';
import { optionsState, optionsDepartment } from '../../Data/selectData';
import { HRNetForm, InputGroup, Label, Input, ErrorMessage, SaveButton } from '../../styles/Components/inputStyles/inputs';
import { Title } from '../../styles/Pages/CreateEmployee/CreateEmployeeStyles';
import { validateForm } from '../../utils/validation';

let counter = 0;

const generateUniqueId = () => {
  return `emp_${counter++}`;
};

const CreateEmployeeForm = ({ onEmployeeCreate }) => {
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

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Validate form data
    const formErrors = validateForm(formData);
  
    // Set the errors state with the validation errors
    setErrors(formErrors);

    // Check if there are any errors
    if (Object.keys(formErrors).length === 0) {
      const newEmployee = { ...formData, id: generateUniqueId() };
      // Dispatch the new employee data to the Redux store
      dispatch(saveEmployee(newEmployee));
      // Once the submission is successful, set isModalOpen to true
      // Call the onEmployeeCreate callback to indicate that a new employee has been created
      onEmployeeCreate();
      console.log('New Employee:', newEmployee);
      // Reset form after submission
      setFormData({
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
    }
  };


  return (
    <HRNetForm onSubmit={handleSubmit} id="wealthHealthForm">
      <Title>Create Employee</Title>
      <InputGroup>
        <Label htmlFor="first-name">First Name</Label>
        <Input type="text" id="first-name" name="firstName" onChange={handleInputChange} value={formData.firstName} />
        {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="last-name">Last Name</Label>
        <Input type="text" id="last-name" name="lastName" onChange={handleInputChange} value={formData.lastName} />
        {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="date-of-birth">Date of Birth</Label>
        <Input type="date" id="date-of-birth" name="dateOfBirth" onChange={handleInputChange} value={formData.dateOfBirth} />
        {errors.dateOfBirth && <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="start-date">Start Date</Label>
        <Input type="date" id="start-date" name="startDate" onChange={handleInputChange} value={formData.startDate} />
        {errors.startDate && <ErrorMessage>{errors.startDate}</ErrorMessage>}
      </InputGroup>
      <fieldset className="address">
        <legend>Address</legend>
        <InputGroup>
          <Label htmlFor="street">Street</Label>
          <Input type="text" id="street" name="street" onChange={handleInputChange} value={formData.street} />
          {errors.street && <ErrorMessage>{errors.street}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" name="city" onChange={handleInputChange} value={formData.city} />
          {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="state">State</Label>
          <SelectComponent
            options={optionsState}
            id="state"
            name="state"
            onChange={(e) => handleSelectChange("state", e.target.value)} // Pass the name and value
            value={formData.state} // Pass only the value
          />
          {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="zip-code">Zip Code</Label>
          <Input type="number" id="zip-code" name="zipCode" onChange={handleInputChange} value={formData.zipCode} />
          {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
        </InputGroup>
      </fieldset>
      <InputGroup>
        <Label htmlFor="department">Department</Label>
        <SelectComponent
          options={optionsDepartment}
          id="department"
          name="department"
          onChange={(e) => handleSelectChange("department", e.target.value)} // Pass the name and value
          value={formData.department} // Pass only the value
        />
        {errors.department && <ErrorMessage>{errors.department}</ErrorMessage>}
      </InputGroup>
      <SaveButton type="submit" value="Save"  />
    </HRNetForm>
  );
};

export default CreateEmployeeForm;
