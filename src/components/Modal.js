import React from "react";

const Modal = ({show, onClose}) => {

  if(!show) return null

  return (
            <div className="model-overlay" onClick={onClose}>
              <div className="model" onClick={e => e.stopPropagation()}>
              <button className="model-close" onClick={onClose}>Close</button>
              <p className="model-p">This is the content of the modal.</p>
              </div>
          </div>
  )
}

export default Modal