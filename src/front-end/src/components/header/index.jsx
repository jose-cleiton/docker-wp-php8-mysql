import React, { useState } from 'react';
import StyledHeader from './styles';
import HeaderMenuItems from '../menu/index';
import logo from '../../img/blog-logo.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleMenuItemClick = () => {
    setMenuActive(false);
  };

  return (
    <StyledHeader>
      <nav className='container'>
        <a href='/'>
          <img src={logo} alt='Logo em construção' id='logo' />
        </a>
        <i class="fa-solid fa-bars" onClick={handleMenuClick}  id='menu-button' ></i>
      
        {menuActive && <div id='menu-overlay' onClick={handleMenuClick}></div>}
        <HeaderMenuItems menuActive={menuActive} handleMenuItemClick={handleMenuItemClick} />
        <img
        className="topImg"
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
            />
      </nav>
    </StyledHeader>
  );
};

export default Header;
