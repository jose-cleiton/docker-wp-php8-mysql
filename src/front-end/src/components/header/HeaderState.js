import React, { useState } from 'react';

const HeaderState = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleMenuItemClick = () => {
    setMenuActive(false);
  };

  return children({ menuActive, handleMenuClick, handleMenuItemClick });
};

export default HeaderState;
