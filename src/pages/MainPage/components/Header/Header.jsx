import React from 'react';
import Media from "react-media";
import StyledHeader from './StyledHeader';
import { baseTheme } from '../../../../styles/variables';
import { Container } from '../../../../styles/Container';
import { renderMobile, render } from './MediaComponents';

const Header = () => {
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
            {matches.small && renderMobile()}
            {matches.medium && render()}
          </Container>
        )}
        </Media>
    </StyledHeader>
  );
};

export default Header;
