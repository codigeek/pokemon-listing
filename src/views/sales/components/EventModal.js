import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Row, Col, Button, Badge, Card, Modal } from 'react-bootstrap';

import Clamp from 'components/clamp';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import {
    modalShowingGeneralModal,
    modalChangeNewMessage
} from 'components/modals/modalSlice';

const EventModal = ({ handleClose, show = false, event }) => {

    const dispatch = useDispatch();

    return (
        <>
            <Modal
                show={show}
                id="EventModal"
                onHide={handleClose}
                className="scroll-out-negative"
                dialogClassName=""
                aria-labelledby="settings"
                tabIndex="-1"
                size="lg"
                scrollable
            >
                <Modal.Header>
                    <Modal.Title as="h5">{event.title}</Modal.Title>
                    <button type="button" className="btn-close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md="6" >
                            <Button onClick={handleClose} type="button" variant="outline-secondary" className="btn-icon btn-icon-start w-100 w-sm-auto">
                                <span>Cancelar cita</span>
                            </Button>
                        </Col>
                        <Col md="6" >
                            <Button onClick={handleClose} type="button" variant="outline-primary" className="btn-icon btn-icon-start w-100 w-sm-auto">
                                <span>Confirmar asistencia</span>
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal >
        </>
    );
};

export default EventModal;
