import React, { useState } from 'react';
import './style.less';
import Modal from '../Modal';

interface ManagerProps {
  image: string;
  name: string;
  description: string;
  number: number;
}

const Manager: React.FC<ManagerProps> = (props) => {
  const { image, name, description, number } = props;
  const [showModal, setShowModal] = useState(true);

  const hoverEffect = () => {
    setShowModal(true);
  };

  const endHoverEffect = () => {
    setShowModal(false);
  };

  return (
    <div className="manager">
      <Modal showModal={showModal} />
      <img
        src={image}
        className="manager-image"
        alt={name}
        onMouseEnter={() => hoverEffect}
        onMouseLeave={() => endHoverEffect}
      />
      <div className="manager-text">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </div>
      <p className="number">{number}</p>
    </div>
  );
};

export default Manager;
