import React from 'react';

const Header = () => (
  <header className='header'>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='' alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);
export default Header;
 