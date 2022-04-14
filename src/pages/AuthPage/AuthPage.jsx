import StyledAuthPage from './StyledAuthPage';
import Media from 'react-media';
import { Container } from '../../styles/Container';
import { useLocation } from 'react-router-dom';
import { baseTheme } from '../../styles/variables';
import { renderDesktop, renderTablet, renderMobile } from './MediaComponents';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function AuthPage() {
  const { pathname } = useLocation();


  return (
    <StyledAuthPage>
        <ToastContainer autoClose={3000} />
      <Media
        queries={{
          small: baseTheme.media.mobileMax,
          medium: `${baseTheme.media.tabletMin} and ${baseTheme.media.tabletMax}`,
          large: baseTheme.media.desktop,
        }}
      >
        {matches => (
          <Container>
            {matches.small && renderMobile(pathname)}
            {matches.medium && renderTablet(pathname)}
            {matches.large && renderDesktop(pathname)}
          </Container>
        )}
      </Media>
    </StyledAuthPage>
  );
}
