import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

const StyledCurrencyPage = styled.div`
  display: none;

  @media screen and ${baseTheme.media.mobileMax} {
    display: block;
    /* min-width: 100%;
    height: 100vh;
    background: none;
    padding: 15px 20px 0 20px; */
  }
`;

export default StyledCurrencyPage;
