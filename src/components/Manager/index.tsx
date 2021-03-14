import React from 'react';
import './style.less';

interface ManagerProps {
  image: string;
  name: string;
  description: string;
  number: number;
}

const Manager: React.FC<ManagerProps> = (props) => {
  const { image, name, description, number } = props;

  return (
    <div className="manager">
      <img src={image} className="manager-image" alt={name} />
      <div className="manager-text">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </div>
      <p className="number">{number}</p>
    </div>
  );
};

export default Manager;
