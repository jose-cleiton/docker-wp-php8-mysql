import React from 'react';
import logo from '../../img/blog-logo.png';
import menuItems from './menus.js';



const HeaderMenuItems = ({ menuActive, handleMenuItemClick }) => {
  return (
    <div id='menu-items' className={menuActive ? 'active' : ''}>
      <ul>
        <img src={logo} alt='Logo em construção' id='menu-logo' />
        <ul className="topList">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className="topListItem"
              onClick={handleMenuItemClick}
            >
              {menuItem.label}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default HeaderMenuItems;
