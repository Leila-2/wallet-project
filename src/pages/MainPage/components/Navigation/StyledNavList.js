import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledNavList = styled.ul`
  @media screen and ${baseTheme.media.mobileMax} {
    display: inline-flex;

    li:not(:last-child) {
      margin-right: 38px;
    }

    svg {
      width: 38px;
      height: 38px;
      border-radius: 6px;
    }
  }
`;

export default StyledNavList;
