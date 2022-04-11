import Media from 'react-media';
import TableBalans from './Table/TableBalans';
import TableBalansMobail from './Table/TableBalansMobail';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../store/transactions/transaction-selectors';

export default function TableBalansElement() {
  const transactions = useSelector(transactionsSelectors.getTransactions);
  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767.9px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && <TableBalansMobail transactions={transactions} />}
            {matches.medium && <TableBalans transactions={transactions} />}
          </>
        )}
      </Media>
    </>
  );
}
