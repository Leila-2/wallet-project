import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavLink from './StyledNavLink';
import styles from './NavLink.module.css';
import MainSvg from '../icons/MainSvg';
import StatSvg from '../icons/StatSvg';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <StyledNavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'linkStyleActive' : 'linkStyle'
            }
          >
            <MainSvg className={'SvgActive'} />
            Главная
          </NavLink>
        </StyledNavLink>
        <StyledNavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? 'linkStyleActive' : 'linkStyle'
            }
          >
            <StatSvg className={'SvgActive'} />
            Статистика
          </NavLink>
        </StyledNavLink>
      </ul>
    </nav>
  );
}
