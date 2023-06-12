import React from 'react';
import '../styles/Modal.css';
const Modal = ({ isVisible, setIsVisible, children }) => {
  const handlerClick = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div id="modal" className="">
          {children}
          <button
            onClick={() => {
              handlerClick();
            }}
            className="button_exit"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
