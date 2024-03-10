import styled from 'styled-components';
import { colors } from '../../Theme/colors';

export const HeaderContainer = styled.header`
  background-color: ${colors.primaryBg};
  padding: 20px;
  text-align: center;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Logo = styled.img`
  width:200px;
  height: auto;

  @media (min-width: 768px) {
    /* Tablet devices */
    max-width: 150px;
  }

  @media (min-width: 992px) {
    /* Desktop devices */
    max-width:150px;
  }
`;
