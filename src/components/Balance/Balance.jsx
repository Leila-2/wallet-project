import { StyledBalance } from './Balance.styled';

export default function Balance({ balance }) {
  return (
    <StyledBalance>
      <span>ВАШ БАЛАНС</span>
      <p>₴ {balance}</p>
    </StyledBalance>
  );
}
