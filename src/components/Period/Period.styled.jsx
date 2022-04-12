import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

export const StyledPeriod = styled.div`
  @media screen and ${baseTheme.media.tabletMax} {
    margin-top: 40px;
  }
  @media screen and ${baseTheme.media.desktop} {
    margin-top: 55px;
  }
  .form {
    display: flex;
    flex-direction: column;

    @media screen and ${baseTheme.media.tabletMin} {
      flex-direction: row;
      height: 50px;
    }
  }

  .inputWrapperMonth {
    position: relative;
    margin-bottom: 20px;

    @media screen and ${baseTheme.media.tabletMin} {
      width: 160px;
      margin-bottom: 0;
      margin-right: 16px;
    }

    @media screen and ${baseTheme.media.desktop} {
      width: 182px;
      margin-right: 32px;
    }
  }

  .inputWrapperYear {
    position: relative;
    margin: 0;

    @media screen and ${baseTheme.media.tabletMin} {
      width: 160px;
    }

    @media screen and ${baseTheme.media.desktop} {
      width: 182px;
    }
  }

  .svgArrowDown {
    position: absolute;
    right: 20px;
    top: 24px;
    width: 18px;
    height: 9px;
    cursor: pointer;
    pointer-events: none;
  }
`;
