import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledAuthContentContainer = styled.div`
  .register-form-container {
    padding: 36px 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: ${baseTheme.colors.white};

    @media screen and ${baseTheme.media.mobileMax} {
      max-width: 480px;
    }

    @media screen and ${baseTheme.media.tabletMin} {
      padding: 40px 65px 60px 65px;
      width: 540px;
      max-width: 540px;
      border-radius: 20px;
    }
  }
`;

export default StyledAuthContentContainer;
