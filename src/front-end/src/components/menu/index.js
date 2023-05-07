import React from 'react';
import logo from '../../img/blog-logo.png';

const HeaderMenuItems = ({ menuActive, handleMenuItemClick }) => {
  return (
    <div id='menu-items' className={menuActive ? 'active' : ''}>
      <ul>
        <img src={logo} alt='Logo em construção' id='menu-logo' />
        <ul className="topList">
          <li className="topListItem" onClick={handleMenuItemClick}>HOME</li>
          <li className="topListItem" onClick={handleMenuItemClick}>ABOUT</li>
          <li className="topListItem" onClick={handleMenuItemClick}>CONTACT</li>
          <li className="topListItem" onClick={handleMenuItemClick}>WRITE</li>
          <li className="topListItem" onClick={handleMenuItemClick}>LOGOUT</li>
        </ul>
      </ul>
    </div>
  );
};

export default HeaderMenuItems;
