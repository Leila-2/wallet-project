import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

const StyledChart = styled.div`
  .title {
    font-family: ${baseTheme.fonts.titleFont};
    font-size: 30px;
    line-height: 45px;
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
  }

  .doughnut {
    width: 288px;
    height: 288px;

    @media screen and ${baseTheme.media.tabletMax} {
      width: 336px;
      height: 336px;
    }
  }
`;

export default StyledChart;
