import StyledTableBalans from './StyledTableBalanse';
import EditBtn from '../../EditBtn/EditBtn';
import RemoveBtn from '../../RemoveBtn/RemoveBtn';

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
          {transactions.map(transaction => (
            <tr className="table-list" key={transaction.id}>
              <td>{transaction.date}</td>

              <td className="title-type">
                {transaction.type === 'expenses' ? '-' : '+'}
              </td>
              <td className="table-title">
                {categories[transaction.category]}
              </td>
              <td className="table-title">{transaction.comment}</td>
              <td
                style={{
                  color: `${
                    transaction.type === 'expenses' ? '#FF6596' : '#24CCA7'
                  }`,
                }}
              >
                {transaction.amount}
              </td>

              <td>{transaction.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableBalans>
  );
}
