import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';
import { Container } from '../../styles/Container';

import Currency from '../../components/Currency/Currency';
import MobileBg from '../../components/MobBg/MobBg';

export default function CurrencyMobPage() {
  return (
    <>
      <Header />

      <MobileBg>
        <Container>
          <Navigation />
          <Currency />
        </Container>
      </MobileBg>
    </>
  );
}
