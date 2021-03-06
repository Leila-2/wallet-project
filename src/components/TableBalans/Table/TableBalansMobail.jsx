import StyledTableBalansMobail from './StyledTableBalansMobail';

export default function TableBalansMobail({ transactions }) {
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

  const dataNormalath = function (data) {
    let dataUpdeyt = data.split('-').reverse().join('.');
    return dataUpdeyt;
  };

  return (
    <StyledTableBalansMobail>
      {transactions?.map(transaction => (
        <div
          key={transaction.id}
          style={{
            borderLeft: `${
              transaction.type === 'expenses'
                ? '5px solid #FF6596'
                : '5px solid #24CCA7'
            }`,
          }}
        >
          <table className="global-table-mob">
            <tbody>
              <tr>
                <th className="table-title-mob">Дата</th>
                <td className="table-date-mob">
                  {dataNormalath(transaction.date)}
                </td>
              </tr>
              <tr>
                <th className="table-title-mob">Тип</th>
                <td className="table-date-mob">
                  {transaction.type === 'expenses' ? '-' : '+'}
                </td>
              </tr>
              <tr className="table-string-mob">
                <th className="table-title-mob">Категория</th>
                <td className="table-date-mob">
                  {categories[transaction.category]}
                </td>
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
