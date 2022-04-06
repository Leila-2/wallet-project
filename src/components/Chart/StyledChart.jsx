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
    width: 280px;
    height: 280px;

    @media screen and ${baseTheme.media.tabletMin} {
      width: 320px;
      height: 320px;
      position: relative;
      margin: 0;
    }
  }

  .doughnut {
    width: 280px;
    height: 280px;

    @media screen and ${baseTheme.media.tabletMin} {
      width: 320px;
      height: 320px;
    }
  }
`;

export default StyledChart;
