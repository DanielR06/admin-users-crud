import React from 'react';

const Modal = ({ isVisible, children }) => {
  return (
    <>
      {isVisible && (
        <div className="absolute border border-red-600 inset-0 bg-[rgba(0,0,0,0.7)]">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
