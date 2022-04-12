import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

const StyledChart = styled.div`
  .title {
    font-family: ${baseTheme.fonts.titleFont};
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 10px;
  }

  .chart {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    margin-bottom: 30px;

    @media screen and ${baseTheme.media.tabletMin} {
      margin: 0;
      width: 320px;
    }

    @media screen and ${baseTheme.media.mobileMin} {
      margin: 0;
      width: 280px;
    }
  }

  .containerChart {
    margin-left: auto;
    margin-right: auto;
    width: 288px;
    height: 288px;

    @media screen and ${baseTheme.media.tabletMax} {
      width: 336px;
      height: 336px;
      position: relative;
      margin: 0;
    }
    @media screen and ${baseTheme.media.mobileMin} {
      width: 280px;
      height: 280px;
      position: relative;

      margin-bottom: 32px;
    }
  }

  .doughnut {
    width: 288px;
    height: 288px;

    @media screen and ${baseTheme.media.tabletMax} {
      width: 336px;
      height: 336px;
    }
    @media screen and ${baseTheme.media.mobileMin} {
      width: 280px;
      height: 280px;
    }
  }
`;

export default StyledChart;
