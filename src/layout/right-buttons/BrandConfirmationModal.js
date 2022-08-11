import React from 'react';
import { Row, Col, Button, Badge, Card, Modal } from 'react-bootstrap';
import Clamp from 'components/clamp';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const BrandConfirmationModal = ({ handleClose, show = false, setOptionSelected }) => {

    const selectOption = (option) => {
        setOptionSelected(option);
    }

    return (
        <>
            <Modal
                show={show}
                id="BrandConfirmationModal"
                onHide={handleClose}
                className="scroll-out-negative"
                dialogClassName=""
                aria-labelledby="settings"
                tabIndex="-1"
                size="sm"
                scrollable
            >
                <Modal.Header>
                    <Modal.Title as="h5">Selecciona una opción</Modal.Title>
                    <button type="button" className="btn-close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs="12">
                            <div className="stf-link-text" onClick={() => selectOption(1)}>
                                No especificar sucursal
                            </div>
                        </Col>
                        <Col xs="12">
                            <div className="stf-link-text" onClick={() => selectOption(2)}>
                                Seleccionar una sucursal en específico
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BrandConfirmationModal;
