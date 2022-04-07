import Navigation from '../MainPage/components/Navigation/Navigation';
import Header from './components/Header/Header';
import { Container } from '../../styles/Container';

export default function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <Navigation />
        <h1>MainPage</h1>
      </Container>
    </>
  );
}
