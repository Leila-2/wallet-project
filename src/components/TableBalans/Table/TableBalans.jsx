import StyledTableBalans from './StyledTableBalanse';


export default function TableBalans({ transactions }) {
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
    <StyledTableBalans>
      <table className="global-table">
        <thead className="header-table">
          <tr>
            <th className="first-table">Дата</th>
            <th>Тип</th>
            <th className="table-title">Категория</th>
            <th className="table-title">Комментарий</th>
            <th className="sum-title">Сумма</th>
            <th className="last-table">Баланс</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map(transaction => (
            <tr className="table-list" key={transaction.id}>
              <td className="table-date">{dataNormalath(transaction.date)}</td>

              <td className="title-type">
                {transaction.type === 'expenses' ? '-' : '+'}
              </td>
              <td className="table-title">
                {categories[transaction.category]}
              </td>
              <td className="table-title">{transaction.comment}</td>
              <td
                className="amount"
                style={{
                  color: `${
                    transaction.type === 'expenses' ? '#FF6596' : '#24CCA7'
                  }`,
                }}
              >
                {transaction.amount
                  .toFixed(2)
                  .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}
              </td>

              <td className="balance">
                {transaction.balance
                  .toFixed(2)
                  .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableBalans>
  );
}
