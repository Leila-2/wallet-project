import StyledTableStatistic from './StyledTableStatistic';

export default function TableStatistic() {
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
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Основные расходы</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Продукты</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Машина</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Забота о себе</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Забота о детях</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Товары для дома</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Образование</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Досуг</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <td className="table-categori">
              <div className="square"></div>
              <span className="text">Другие расходы</span>
            </td>
            <td className="table-data">5000</td>
          </tr>
          <tr className="table-list">
            <th className="table-title">Расходы:</th>
            <td className="last-data">5000</td>
          </tr>
          <tr className="table-list">
            <th className="table-title">Доходы:</th>
            <td className="last-data">5000</td>
          </tr>
        </tbody>
      </table>
    </StyledTableStatistic>
  );
}
