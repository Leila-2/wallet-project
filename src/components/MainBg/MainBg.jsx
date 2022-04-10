import { MainBgImage } from './MainBg.styled.jsx';
import { Container } from '../../styles/Container';

export default function MainBg({ RigthComponent, LeftComponent }) {
  return (
    <>
      <MainBgImage>
        <div className="wrapper-right">
          <Container>{RigthComponent}</Container>
        </div>
        <div>
          <Container>{LeftComponent}</Container>
        </div>
      </MainBgImage>
    </>
  );
}
