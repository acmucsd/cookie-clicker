import React from 'react';
import './style.less';

interface ModalProps {
  showModal: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { showModal } = props;

  return (
    <>
      (
      {showModal ? (
        <div className="Modal">
          <div className="Header">
            <p>Grandma</p>
            <p>666</p>
          </div>
          <p>-each grandma produces x per second</p>
          <p>-x grandmas produce x per second</p>
          <p>-x bread produced so far</p>
        </div>
      ) : null}
      )
    </>
  );
};

export default Modal;
