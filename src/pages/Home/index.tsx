import React from 'react';
import Store from '../../components/Store';
import Stats from '../../components/Stats';
import './style.less';

const Home = () => {
  return (
    <div className="Home">
      <Stats></Stats>
      <Store></Store>
    </div>
  );
};

export default Home;
