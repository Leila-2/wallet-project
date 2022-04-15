import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

const StyledFormLink = styled.div`
  width: 300px;
  height: 50px;

  background: ${baseTheme.colors.white};
  border: 1px solid ${baseTheme.colors.purple};
  box-sizing: border-box;
  border-radius: 20px;

  display: flex;
  align-items: center;

  .link {
    width: 100%;
    font-family: ${baseTheme.fonts.mainFont};
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${baseTheme.colors.purple};
  }

  @media screen and ${baseTheme.media.mobileMax} {
    width: 280px;
  }
`;

export default StyledFormLink;
