import StyledHeading from './StyledHeading';
import StyledText from './StyledText';
import StyledBox from './StyledBox';
import { Container } from '../../styles/Container';

export default function NotFound() {
  return (
    <>
      <StyledBox>
        <Container>
          <StyledHeading>404</StyledHeading>
          <StyledText>Page not found!</StyledText>
        </Container>
      </StyledBox>
    </>
  );
}
