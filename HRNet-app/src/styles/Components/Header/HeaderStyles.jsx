import styled from 'styled-components';
import { colors } from '../../Theme/colors';

export const HeaderContainer = styled.header`
  background-color: ${colors.headerBg};
  padding: 20px;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;

  @media (min-width: 768px) {
    /* Tablet devices */
    max-width: 80%;
  }

  @media (min-width: 992px) {
    /* Desktop devices */
    max-width: 60%;
  }
`;
