import React from 'react'
import StyledSideBar from './styles';
import keu from '../../img/imagem-keu.jpeg';

const Sidebar = () => {
  return (
    <StyledSideBar>
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidbarTitle">ABOUT ME</span>
          <img   src={keu}  alt=""  />
          <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </p>
        </div>
        <div className="sidebarItem">
            <span className="sidbarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              <i className="sidebarIcon fab fa-facebook-square"></i>
              <i className="sidebarIcon fab fa-twitter-square"></i>
              <i className="sidebarIcon fab fa-pinterest-square"></i>
              <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
          </div>
    </div>    
    </StyledSideBar>
  )
}

export default Sidebar
