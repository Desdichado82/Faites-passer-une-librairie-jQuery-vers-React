import styled from 'styled-components';

// Define the styled select component
const StyledSelect = styled.select`
  color: #989898;
  font-size: 20px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  appearance: none; /* Remove default arrow button */
  -moz-appearance: textfield; /* Firefox */
`;

// Define the wrapper component to encapsulate the select
const SelectWrapper = styled.div`
  position: relative;
`;

// Styled arrow icon (optional)
const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none; /* Ensure the arrow doesn't interfere with select */
`;

// Styled SelectComponent
export const SelectComponent = ({ options, onChange, value }) => {
  return (
    <SelectWrapper>
      <StyledSelect onChange={onChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {/* Optional: Arrow icon */}
      <ArrowIcon>&#x25BC;</ArrowIcon>
    </SelectWrapper>
  );
};

export default SelectComponent;
