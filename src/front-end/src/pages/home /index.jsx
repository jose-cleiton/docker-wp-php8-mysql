import React from 'react'

import StyledMain from './styles';
import sonho from '../../img/img-sonho.jpg'

const Home = () => {
  return (
    <StyledMain>
      <div className="header">
        <div className="headerTitles">
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>
        
        </div>
        <img className='headerImg' src={sonho} alt="" />
      </div>
      
    </StyledMain>
  )
}

export default Home
