import React, { useState } from 'react';
import Portal from '../Portal';
import '../modal.scss';
const Confirmation= (props) => {
  const { isOpen, children: Children } = props;
  return (
    <div className={isOpen ? 'modalRoot d-flex justify-content-center align-items-center' : ''}>
      <div className={`modal bg-white overflow--h padding-md fadeIn-animation border-r-5`}>
        <div className="d-flex column"> {Children} </div>
      </div>
    </div>
  );
}

const useCenterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const CenterModal = ({ children }) => {
    return isOpen && (
      <Portal component={Confirmation} closeModal={closeModal} isOpen={isOpen}>
        {children}
      </Portal>
    )
  }
  return { closeModal, openModal, isOpen, CenterModal }
}

export default useCenterModal;
