import StyledTableStatistic from './StyledTableStatistic';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../store/transactions/transaction-selectors';

export default function TableStatistic({}) {
  const transactions = useSelector(transactionsSelectors.getChartStatistics);
  const expenses = useSelector(transactionsSelectors.getChartBalance);
  const incomes = useSelector(transactionsSelectors.getChartBalanceIncomes);

  const backgroundColor = {
    main: '#FED057',
    food: '#F7A594',
    car: '#FCBEB1',
    me: '#C5BAFF',
    children: '#6E78E8',
    house: '#4A56E2',
    education: '#81E1FF',
    other: '#00AD84',
  };
  const categories = {
    main: 'Основной',
    food: 'Еда',
    car: 'Авто',
    me: 'Развитие',
    children: 'Дети',
    house: 'Дом',
    education: 'Образование',
    other: 'Остальные',
  };
  return (
    <StyledTableStatistic>
      <table className="global-table">
        <thead>
          <tr className="header-table">
            <th className="first-table">Категория</th>
            <th className="last-table">Сумма</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(transactions).map((key, index) => (
            <tr className="table-list" key={index}>
              <td className="table-categori">
                <div
                  className="square"
                  style={{ background: `${backgroundColor[key]}` }}
                ></div>
                <span className="text">{categories[key]}</span>
              </td>
              <td className="table-data">{transactions[key]}</td>
            </tr>
          ))}

          <tr className="table-list">
            <th className="table-title">Расходы:</th>
            <td className="last-data">{expenses}</td>
          </tr>
          <tr className="table-list">
            <th className="table-title">Доходы:</th>
            <td className="last-data">{incomes}</td>
          </tr>
        </tbody>
      </table>
    </StyledTableStatistic>
  );
}
