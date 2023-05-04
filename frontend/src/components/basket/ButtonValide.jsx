/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

function ButtonValide() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(!isOpen);
  return (
    <div className="btn-valid">
      <button type="button" className="buttonValide" onClick={openModal}>
        Valider ma commande
      </button>
      {isOpen && (
        <div className="modal-shadow">
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <span className="close" onClick={openModal}>
                  &times;
                </span>
                <h2>&#128079; Confirmation &#128079;</h2>
              </div>
              <div className="modal-body">
                <p>Votre commande a bien été validée</p>
              </div>
              <div className="modal-footer">
                <h3>Bonne journée et à bientôt</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonValide;
