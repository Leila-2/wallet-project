import { StyledBalance } from './Balance.styled';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../store/transactions/transaction-selectors';

export default function Balance() {
  const balance = useSelector(transactionsSelectors.getBalance);

  return (
    <StyledBalance>
      <span className="balance">ВАШ БАЛАНС</span>
      <p>
        <span className="balance-item">₴ </span>
        {balance?.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}
      </p>
    </StyledBalance>
  );
}
