import React from 'react'
import Header from '../header/Header';
import Posts from '../../posts';
import Sidebar from '../sidebar';
import StyledHome from './styles';

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
  
      </div>
      
    </StyledHome>
      

  )
}

export default Home
