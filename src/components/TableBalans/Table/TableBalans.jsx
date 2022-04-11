import StyledTableBalans from './StyledTableBalanse';

export default function TableBalans({ transactions }) {
  return (
    <StyledTableBalans>
      <table className="global-table">
        <thead className="header-table">
          <tr>
            <th className="first-table">Дата</th>
            <th>Тип</th>
            <th>Категория</th>
            <th>Комментарий</th>
            <th>Сумма</th>
            <th className="last-table">Баланс</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr className="table-list" key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.type === 'expenses' ? '-' : '+'}</td>
              <td>{transaction.category}</td>
              <td>{transaction.comment}</td>
              <td>{transaction.amount}</td>
              <td>Ячейка 6</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableBalans>
  );
}
