import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Row, Col, Button, Badge, Card, Modal } from 'react-bootstrap';

import Rating from 'react-rating';
import Clamp from 'components/clamp';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import {
    modalShowingGeneralModal,
    modalChangeNewMessage
} from 'components/modals/modalSlice';

import { getRecords } from '../../views/list/functions/general';

const BranchModal = ({ handleClose, show = false, setBranchSelected }) => {

    const dispatch = useDispatch();

    const { currentBrand, currentBranch, currentUser, userType } = useSelector((state) => state.auth);

    const [branches, setBranches] = useState([]);

    useEffect(async () => {
        const response = await getRecords({
            url: "branch",
            data: {
                brand: currentBrand,
                quantity: 1000,
                page: 1,
                currentBrand,
                currentBranch,
                currentUser,
                userType
            },
            dispatch,
            modalShowingGeneralModal,
            modalChangeNewMessage
        });
        if (response.data?.records) {
            setBranches(response.data.records);
        }
    }, []);

    const selectBranch = (branch) => {
        setBranchSelected(branch);
    }

    return (
        <>
            <Modal
                show={show}
                id="BranchModal"
                onHide={handleClose}
                className="scroll-out-negative"
                dialogClassName="full"
                aria-labelledby="settings"
                tabIndex="-1"
                size="lg"
                scrollable
            >
                <Modal.Header>
                    <Modal.Title as="h5">Selecciona una sucursal</Modal.Title>
                    <button type="button" className="btn-close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                        <Row>
                            {
                                branches.map((branch, i) => {
                                    return <Col className="mb-3" lg="12" key={i} onClick={() => selectBranch(branch)}>
                                        <Card className={branch?._id === currentBranch?._id ? "card-selected" : ""}>
                                            <Row className="g-0 sh-16 sh-sm-17">
                                                <Col>
                                                    <Card.Body className="d-flex align-items-center h-100 py-3">
                                                        <div className="mb-0 h6">
                                                            <div className="cursor-pointer body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                                                                <Clamp tag="span" clamp="1">
                                                                    {branch.name}
                                                                </Clamp>
                                                            </div>
                                                            <div className="card-text mb-2">
                                                                <div>{branch.description}</div>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                })
                            }
                        </Row>
                    </OverlayScrollbarsComponent>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BranchModal;
