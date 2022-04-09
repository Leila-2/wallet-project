import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';
import { Container } from '../../styles/Container';
import StyledCurrencyPage from '../../pages/CurrencyMobPage/StyledCurrencyPage';

export default function CurrencyMobPage() {
  return (
    <>
      <Header />
      <Container>
        <StyledCurrencyPage>
          <Navigation />
          <h1>CurrencyMobPage</h1>
        </StyledCurrencyPage>
      </Container>
    </>
  );
}
