import StyledH1 from './StyledH1';
import StyledP from './StyledP';
import { Container } from '../../styles/Container';
import StyledDiv from './StyledDiv';

export default function NotFound() {
  return (
    <>
      <StyledDiv>
        <Container>
          <StyledH1>404</StyledH1>
          <StyledP>Page not found!</StyledP>
        </Container>
      </StyledDiv>
    </>
  );
}
