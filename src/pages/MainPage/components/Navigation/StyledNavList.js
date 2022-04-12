import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledNavList = styled.ul`

@media screen and ${baseTheme.media.tabletMin}{
margin-bottom:28px
}
  @media screen and ${baseTheme.media.mobileMax} {
    display: flex;
    justify-content: space-around;
    margin-bottom:40px;

    /* li:not(:last-child) {
      margin-right: 38px;
    } */

    svg {
      width: 38px;
      height: 38px;
      border-radius: 6px;
    }
  }
`;

export default StyledNavList;
