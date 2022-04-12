import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';
import { Container } from '../../styles/Container';
import StyledCurrencyPage from '../../pages/CurrencyMobPage/StyledCurrencyPage';
import Currency from '../../components/Currency/Currency';

export default function CurrencyMobPage() {
  return (
    <>
      <Header />
      <Container>
        <StyledCurrencyPage>
          <Navigation />
          <Currency />
        </StyledCurrencyPage>
      </Container>
    </>
  );
}
