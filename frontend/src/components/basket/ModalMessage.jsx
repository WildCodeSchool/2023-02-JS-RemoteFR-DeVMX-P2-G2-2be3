/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

function ModalMessage() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <button type="button" onClick={openModal}>
        Traitement Commande
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={openModal}>
                &times;
              </span>
              <h2>Confirmation</h2>
            </div>
            <div className="modal-body">
              <p>Votre commande a bien été validée</p>
            </div>
            <div className="modal-footer">
              <h3>Bravo !</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalMessage;
