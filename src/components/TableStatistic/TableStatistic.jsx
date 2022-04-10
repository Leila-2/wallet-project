import StyledTableStatistic from './StyledTableStatistic';

export default function TableStatistic() {
  return (
    <StyledTableStatistic>
      <table className="global-table">
        <thead className="header-table">
          <tr>
            <th className="first-table">Категория</th>
            <th className="last-table">Сумма</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table-list">
            <td className='table-categori'>Основные расходы</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <td className='table-categori'>Продукты</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <td className='table-categori'>Машина</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <td className='table-categori'>Забота о себе</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <td className='table-categori'>Забота о детях</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <td className='table-categori'>Товары для дома</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <td className='table-categori'>Образование</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <td className='table-categori'>Досуг</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <td className='table-categori'>Другие расходы</td>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <th className='table-title'>Расходы:</th>
            <td className='table-data'>5000</td>
          </tr>
          <tr className="table-list">
            <th className='table-title'>Доходы:</th>
            <td className='table-data'>5000</td>
          </tr>
        </tbody>
      </table>
    </StyledTableStatistic>
  );
}
