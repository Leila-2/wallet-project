import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavLink from './StyledNavLink';
import StyledCurrencyLink from './StyledCurrencyLink';
import StyledNavList from './StyledNavList';
import MainSvg from '../icons/MainSvg';
import StatSvg from '../icons/StatSvg';
import CurrSvg from '../icons/CurrSvg';

export default function Navigation() {
  return (
    <nav>
      <StyledNavList>
        <StyledNavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'linkStyleActive' : 'linkStyle'
            }
          >
            <MainSvg />
            <span>Главная</span>
          </NavLink>
        </StyledNavLink>

        <StyledNavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? 'linkStyleActive' : 'linkStyle'
            }
          >
            <StatSvg />
            <span>Статистика</span>
          </NavLink>
        </StyledNavLink>

        <StyledCurrencyLink>
          <NavLink
            to="/currency"
            className={({ isActive }) =>
              isActive ? 'linkStyleActive' : 'linkStyle'
            }
          >
            <CurrSvg />
            <span>Валюта</span>
          </NavLink>
        </StyledCurrencyLink>
      </StyledNavList>
    </nav>
  );
}
