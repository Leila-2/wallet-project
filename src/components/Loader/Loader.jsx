import { StyledLoader } from './Loader.styled';
import { Container } from '../../styles/Container';

export default function Loader() {
  return (
    <Container>
      <StyledLoader>
        <div className="loader"></div>
      </StyledLoader>
    </Container>
  );
}



