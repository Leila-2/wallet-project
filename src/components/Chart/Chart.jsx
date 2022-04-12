import React from 'react';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../store/transactions/transaction-selectors';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import ChartBalance from './ChartBalance';

import StyledChart from './StyledChart';

const statistics = {
  categories: {
    main: 500,
    food: 1000,
    car: 1300,
    me: 4000,
    children: 370,
    house: 130,
    education: 850,
    leisure: 2350,
    other: 1230,
  },
};

const Chart = () => {
  const totalBalance = useSelector(transactionsSelectors.getBalance);
  const state = useSelector(transactionsSelectors.getStatistics);

  console.log(state);
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  const chart = {
    labels: [...Object.keys(statistics.categories)],
    datasets: [
      {
        data: statistics.categories
          ? Object.values(statistics.categories)
          : null,
        label: '# of Votes',
        backgroundColor: [
          '#FED057',
          '#F7A594',
          '#FCBEB1',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderColor: [
          '#FED057',
          '#FFD8D0',
          '#FCBEB1',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 1,
        hoverOffset: 1,
        cutout: 100,
      },
    ],
  };

  return (
    <StyledChart>
      <h3 className="title">Статистика</h3>
      <div className="chart">
        <div className="containerChart">
          <ChartBalance balance={totalBalance} />
          <div className="doughnut">
            <Doughnut options={options} height={280} width={280} data={chart} />
          </div>
        </div>
      </div>
    </StyledChart>
  );
};

export default Chart;
