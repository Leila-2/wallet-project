import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

const StyledH1 = styled.h1`
  font-family: ${baseTheme.fonts.titleFont};
  font-size: 35px;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledH1;
