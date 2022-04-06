import StyledH1 from './StyledH1';
import { Container } from '../../styles/Container';

export default function NotFound() {
  return (
    <>
      <Container>
        <StyledH1>
          <h1>Error 404: Page not found!</h1>
        </StyledH1>
      </Container>
    </>
  );
}
