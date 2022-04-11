import styled from 'styled-components';
import { baseTheme } from '../../../styles/variables';

const StyledChartBalance = styled.div`
  .balance {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: ${baseTheme.fonts.mainFont};
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    color: ${baseTheme.colors.black};
    width: 140px;
    height: 24px;
  }
`;

export default StyledChartBalance;
