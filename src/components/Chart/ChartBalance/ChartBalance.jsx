import React from 'react';
import { useSelector } from 'react-redux';
import StyledChartBalance from './StyledChartBalance';
// import authSelectors from '../../../redux/auth/auth-selectors';

const ChartBalance = () => {
  // const balance = useSelector(authSelectors.getFormatBalance);

  return (
    <StyledChartBalance>
      <div>
        <p className="balance">
          &#8372;
          {/* {balance} */}
        </p>
      </div>
    </StyledChartBalance>
  );
};

export default ChartBalance;
