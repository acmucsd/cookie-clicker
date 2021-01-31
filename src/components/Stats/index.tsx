import React from 'react';
import './style.css';
import bread from '../../assets/bread.png';

const Stats: React.FC = () => {
  return (
    <div className="Stats">
      <h2>666 Bread</h2>
      <p>333 Bread/Second</p>
      <img src={bread} className="bread" alt="bread" />
    </div>
  );
};

export default Stats;
