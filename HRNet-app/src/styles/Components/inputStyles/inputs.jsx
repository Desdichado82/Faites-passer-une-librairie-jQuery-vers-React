import styled from 'styled-components';
import { colors } from '../../Theme/colors';


export const InputGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.defaultText};
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: ${colors.buttonBg};
  color: ${colors.buttonText};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #5c710a; /* darker shade for hover */
  }
`;

export const SaveButton = styled.input`
background-color: ${colors.buttonBg};
  color: ${colors.buttonText};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #5c710a; /* darker shade for hover */
  }
`;

export const HRNetForm = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${colors.secondaryBg};
  border-radius: 8px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const Select = styled.select`
width: 100%;
padding: 10px;
border: 1px solid ${colors.defaultText};
border-radius: 4px;
`;


