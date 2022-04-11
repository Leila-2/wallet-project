import React from 'react';
import Media from 'react-media';
import StyledHeader from './StyledHeader';
import { baseTheme } from '../../../../styles/variables';
import { Container } from '../../../../styles/Container';
import { RenderMobile, render } from './MediaComponents';
import { useState, useEffect } from 'react';
import ModalLogout from '../ModalLogout/ModalLogout';

const Header = () => {
  const [m, setM] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', closeModalByClickESC);

    return () => {
      window.removeEventListener('keydown', closeModalByClickESC);
    };
  }, [m]);

  const closeModalByClickESC = e => {
    if (e.code === 'Escape') setM(false);
  };
  return (
    <StyledHeader>
      <Media
        queries={{
          small: baseTheme.media.mobileMax,
          medium: `${baseTheme.media.tabletMin || baseTheme.media.desktop}`,
        }}
      >
        {matches => (
          <Container>
            {matches.small &&
              ((m && ModalLogout({ m, setM })) || RenderMobile({ m, setM }))}
            {matches.medium && ((m && ModalLogout({ m, setM })) || render({ m, setM }))}
          </Container>
        )}
      </Media>
    </StyledHeader>
  );
};

export default Header;
