import React from 'react';

function Navigation({ menus }) {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Lazado</a>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>
            <a href={menu.url}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;