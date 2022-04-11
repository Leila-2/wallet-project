import { StyledBalance } from './Balance.styled';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../store/transactions/transaction-selectors';

export default function Balance() {
  const balance = useSelector(transactionsSelectors.getBalance);

  return (
    <StyledBalance>
      <span>ВАШ БАЛАНС</span>
      <p>₴ {balance}</p>
    </StyledBalance>
  );
}
