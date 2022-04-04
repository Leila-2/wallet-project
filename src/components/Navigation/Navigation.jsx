import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.linkStyleActive : styles.linkStyle
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? styles.linkStyleActive : styles.linkStyle
            }
          >
            Статистика
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
