import React from "react";

const Modal = ({show, onClose}) => {

  return (
    <div>
        {
          show && 
            <div className="model-overlay" onClick={onClose}>
              <button className="model-close" onClick={onClose}>Close</button>
              <div className="model">
              <p className="model-p">This is the content of the modal.</p>
              </div>
            </div>
          
        }
        </div>
  )
}

export default Modal