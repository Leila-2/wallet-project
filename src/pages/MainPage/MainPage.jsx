import MainBg from '../../components/MainBg/MainBg';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

import { Container } from '../../styles/Container';

export default function MainPage() {
  return (
    <>
      <Header />
      <Navigation />
      <MainBg>
        <Container>
          <h1>MainPage</h1>
        </Container>
      </MainBg>
    </>
  );
}
