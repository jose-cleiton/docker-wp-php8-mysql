import React from 'react';
import StyledHeader from './styles';
import sonho from '../../img/img-sonho.jpg';

const Header = () => {
  return (
    <StyledHeader>
    <div className="header">
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      
      </div>
      <img className='headerImg' src={sonho} alt="" />
    </div>
    
  </StyledHeader>
  );
};

export default Header;

