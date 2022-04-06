import React from 'react';
import { ReactComponent as Logo } from './icons/Group.svg';
import { ReactComponent as Exit } from './icons/exit 1.svg';
import { ReactComponent as Slash } from './icons/Vector 4.svg';
import StyledHeader from './StyledHeader';
import { Container } from '../../../../styles/Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <Container className="Container">
        <Link to="/" className="FlexGroops">
          <Logo className="Logo" />
          <h1 className="Title">Wallet</h1>
        </Link>
        <div className="FlexGroops FontButton">
          <div className="Avatar"></div>
          <button
            className="HeaderButton Name"
            onClick={() => console.log('name')}
          >
            Имя
          </button>
          <Slash className="Slash Hidden" />
          <button
            className="HeaderButton ExitIcon FlexGroops"
            onClick={() => console.log('exit')}
          >
            <Exit />
            <p className="Exit Hidden">Выход</p>
          </button>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
