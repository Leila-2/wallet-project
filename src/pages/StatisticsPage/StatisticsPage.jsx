import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';
import { Container } from '../../styles/Container';
import Chart from '../../components/Chart';

export default function StatisticsPage() {
  return (
    <>
      <Header />
      <Container>
        <Navigation />
        <h1>StatisticsPage</h1>
        <Chart />
      </Container>
    </>
  );
}
