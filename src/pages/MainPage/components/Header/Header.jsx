import React from 'react';
import Media from 'react-media';
import StyledHeader from './StyledHeader';
import { baseTheme } from '../../../../styles/variables';
import { Container } from '../../../../styles/Container';
import { RenderMobile, render } from './MediaComponents';
import { useState, useEffect } from 'react';
import ModalLogout from '../ModalLogout/ModalLogout';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../../../store/auth/authSelectors';
import { actionLogout } from '../../../../store/auth/authActions';

const Header = () => {
  const [m, setM] = useState(false);

  const name = useSelector(authSelectors.getUserName);
  const avatar = useSelector(authSelectors.getUserAvatar);

  const dispatch = useDispatch();

  const exit = () => {
    dispatch(actionLogout());
  };

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
              ((m && ModalLogout({ m, setM, exit })) ||
                RenderMobile({ m, setM, name, avatar }))}
            {matches.medium &&
              ((m && ModalLogout({ m, setM, exit })) ||
                render({ m, setM, name, avatar }))}
          </Container>
        )}
      </Media>
    </StyledHeader>
  );
};

export default Header;
