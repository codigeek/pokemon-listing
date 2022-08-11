import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const GeneralModal = ({ show, setShow, title, message, closeModal }) => {

  let titleModal = '¡Alerta!';
  if (title && title !== '') {
    titleModal = title;
  }

  return (
    <Modal id="GeneralModal" className="modal-under-nav" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">
          <div className="logo-default logo-in-header" />
          {titleModal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-5 pe-5 pb-0 border-0">{message}</Modal.Body>
      <Modal.Footer className="border-0">
        <Button onClick={closeModal} variant="primary" className="btn-icon btn-icon-start">
          <CsLineIcons icon="close" /> <span>Cerrar</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GeneralModal;
