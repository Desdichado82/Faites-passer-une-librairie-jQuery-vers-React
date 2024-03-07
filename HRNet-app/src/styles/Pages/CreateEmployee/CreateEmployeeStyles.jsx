import styled from 'styled-components';
import { colors } from '../../Theme/colors';

export const PageContainer = styled.main`
  background-color: ${colors.primaryBg};
  color: ${colors.defaultText};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1280px;
  margin: 0 auto;
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px; /* Set the height as needed */
  background-image: url('./src/assets/img/HRNet_Employee.webp');
  background-position: center;
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow */
`;

export const CtaLink = styled.a`
  position: absolute;
  top: 50%;
  right: 20px; /* Adjust as needed */
  transform: translateY(-50%);
  background-color: #3BD16F; /* Adjust background color */
  color: #fff; /* Text color */
  padding: 10px 20px; /* Adjust padding */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none;

  @media (max-width: 768px) {
    /* Mobile devices */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: #2f9e5f; /* Adjust hover background color */
  }
`;

export const Title = styled.h2`
  color: ${colors.headerText};
  background-color: ${colors.headerBg};
  padding: 10px;
  border-radius: 8px 8px 0 0;
  margin: 0;
`;

export const HOne = styled.h1`
  color: #3BD16F;
  text-align :center;
  padding: 10px;
  border-radius: 8px 8px 0 0;
  margin: 0;
`;

export const ViewEmployeesLink = styled.a`
  display: block;
  margin-bottom: 20px;
  color: ${props => props.theme.primaryText};
  text-decoration: none;
`;

