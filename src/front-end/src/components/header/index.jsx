import React from 'react';
import StyledHeader from './styles';
import HeaderMenuItems from '../menu/index';
import HeaderState from './HeaderState';
import logo from '../../img/blog-logo.png';
import keu from '../../img/imagem-keu.jpeg';

const Header = () => {
  return (
    <HeaderState>
      {({ menuActive, handleMenuClick, handleMenuItemClick }) => (
        <StyledHeader>
          
         
          <nav className='container'>
            <a href='/'>
              <img src={logo} alt='Logo em construção' id='logo' />
            </a>
            
            {menuActive && <div id='menu-overlay' onClick={handleMenuClick}></div>}
            <HeaderMenuItems
            menuActive={menuActive}
            handleMenuItemClick={handleMenuItemClick}
            />
            <div className='image-searche-top'>
                <img className="topImg" src={keu} alt="" />
                <i class="fa-solid fa-magnifying-glass"></i>
            
            </div>
            <i class="fa-solid fa-bars" onClick={handleMenuClick} id='menu-button' ></i>
          </nav>
        </StyledHeader>
      )}
    </HeaderState>
  );
};

export default Header;
