import React from 'react';

import './styles.css';

function Header({ changeMenuOption }) {

  return (
    <header className="menu">
      <nav>
        <ul className="menu-list">
          <li className="menu-item">
            <button
              className="menu-button"
              onClick={() => changeMenuOption(0)}>
              Devs
            </button>
          </li>
          <li className="menu-item">
            <button
              className="menu-button"
              onClick={() => changeMenuOption(1)}>
              Mapa
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;







