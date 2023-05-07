import React from 'react'
import Header from './Header';
import Posts from '../../posts';
import Sidebar from '../sidebar';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
  
      </div>
      
    </>
      

  )
}

export default Home
