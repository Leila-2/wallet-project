import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledCurrencyLink = styled.li`
  display: none;

  @media screen and ${baseTheme.media.mobileMax} {
    display: block;
    margin-bottom: 12px;

    font-family: ${baseTheme.fonts.cyrylic};
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    margin-bottom: 12px;

    .linkStyle {
      font-weight: 400;
      color: ${baseTheme.colors.black};
      display: flex;
      align-items: center;
    }

    svg {
      
      border-radius: 2px;
      fill: ${baseTheme.colors.blue};
    }

    .linkStyleActive {
      font-weight: 700;
      color: ${baseTheme.colors.black};
      display: flex;
      align-items: center;

      svg {
        box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
        fill: ${baseTheme.colors.purple};
      }
    }

    span {
      display: none;
    }
  }
`;

export default StyledCurrencyLink;
