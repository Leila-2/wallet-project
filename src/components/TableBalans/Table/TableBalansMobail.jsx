import StyledTableBalansMobail from './StyledTableBalansMobail';

export default function TableBalansMobail({ transactions }) {
  return (
    <StyledTableBalansMobail>
      {transactions.map(transaction => (
        <div key={transaction.id}>
          <table className="global-table-mob">
            <tbody>
              <tr>
                <th className="table-title-mob">Дата</th>
                <td className="table-date-mob">{transaction.date}</td>
              </tr>
              <tr>
                <th className="table-title-mob">Тип</th>
                <td className="table-date-mob">
                  {transaction.type === 'expenses' ? '-' : '+'}
                </td>
              </tr>
              <tr className="table-string-mob">
                <th className="table-title-mob">Категория</th>
                <td className="table-date-mob">{transaction.category}</td>
              </tr>
              <tr>
                <th className="table-title-mob">Комментарий</th>
                <td className="table-date-mob">{transaction.comment}</td>
              </tr>
              <tr>
                <th className="table-title-mob">Сумма</th>
                <td className="table-date-mob">{transaction.amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </StyledTableBalansMobail>
  );
}
