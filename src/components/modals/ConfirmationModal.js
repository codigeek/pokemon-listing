import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ConfirmationModal = ({ title, message, showConfirmationModal, setShowConfirmationModal, acceptConfirmation }) => {
  return (
    <Modal id="GeneralModal" className="modal-under-nav" show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)} >
      <Modal.Header closeButton>
        <Modal.Title as="h5">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-5 pe-5 pb-0 border-0">
        {message}
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button onClick={()=>setShowConfirmationModal(false)} variant="alternate" className="btn-icon btn-icon-start">
          <CsLineIcons icon="close" /> <span>Cerrar</span>
        </Button>
        <Button onClick={acceptConfirmation} variant="primary" className="btn-icon btn-icon-start">
          <CsLineIcons icon="check" /> <span>Aceptar</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
