import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorHandling = ({ message, onClose }) => {
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="error-popup">
        <div className="error-content flex items-center">
          <FaExclamationTriangle className="mr-2" />
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandling;
