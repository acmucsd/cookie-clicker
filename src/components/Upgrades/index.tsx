import React from 'react';
import './style.less';
import mixer from '../../assets/mixer.png';
import oven from '../../assets/oven.png';
import pinroll from '../../assets/PinRoll.png';
import whisk from '../../assets/Whisk.png';
import fireplace from '../../assets/fireplace.png';


const Upgrades: React.FC = () => {
  return (
    <div className="upgrades">
      <div className="upgrade">
        <img src={image} className="manager-image" alt={name} />
      </div>
      <div className="upgrade"></div>
      <div className="upgrade"></div>
      <div className="upgrade"></div>
      <div className="upgrade"></div>
    </div>
  );
};

export default Upgrades;
