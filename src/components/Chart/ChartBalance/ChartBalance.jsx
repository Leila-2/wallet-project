import React from 'react';
import StyledChartBalance from './StyledChartBalance';

const ChartBalance = ({ balance }) => {
  return (
    <StyledChartBalance>
      <div>
        <p className="balance">&#8372; {balance}</p>
      </div>
    </StyledChartBalance>
  );
};

export default ChartBalance;
