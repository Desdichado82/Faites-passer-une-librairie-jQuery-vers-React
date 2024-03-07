import styled from 'styled-components';
import { colors } from '../../Theme/colors';

export const TableContainer = styled.div`
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: ${colors.headerBg};
  color: ${colors.headerText};
  padding: 10px;
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const Input = styled.input`
  font-size: 1.1rem;
  border: 0;
  padding: 5px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const PaginationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 14px;
  border-radius: 5px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationInput = styled.input`
  width: 50px;
  padding: 5px;
  margin: 0 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryBg};
`;

export const PaginationText = styled.span`
  margin: 0 5px;
  font-size: 14px;
`;

export const PaginationSelect = styled.select`
  padding: 5px;
  margin: 0 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryBg};
`;


// Add more styled-components for pagination, buttons, etc. as needed
