// Popup.js
import "./popup.css";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
