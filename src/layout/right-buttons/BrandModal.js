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

const BrandModal = ({ handleClose, show = false, setBrandSelected }) => {

    const dispatch = useDispatch();

    const { currentBrand, currentBranch, currentUser, userType } = useSelector((state) => state.auth);

    const [brands, setBrands] = useState([]);

    useEffect(async () => {
        const response = await getRecords({
            url: "brand",
            data: {
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
            setBrands(response.data.records);
        }
    }, []);

    const selectBrand = (brand) => {
        setBrandSelected(brand);
    }

    return (
        <>
            <Modal
                show={show}
                id="BrandModal"
                onHide={handleClose}
                className="scroll-out-negative"
                dialogClassName="full"
                aria-labelledby="settings"
                tabIndex="-1"
                size="lg"
                scrollable
            >
                <Modal.Header>
                    <Modal.Title as="h5">Selecciona una marca</Modal.Title>
                    <button type="button" className="btn-close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                        <Row>
                            {
                                brands.map((brand, i) => {
                                    return <Col className="mb-3" lg="12" key={i} onClick={()=>selectBrand(brand)}>
                                        <Card className={brand?._id === currentBrand?._id ? "card-selected" : ""}>
                                            <Row className="g-0 sh-16 sh-sm-17">
                                                <Col xs="auto" className="h-100 position-relative">
                                                    <img src={brand.photo} alt="Sin foto" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16 sw-lg-20" />
                                                </Col>
                                                <Col>
                                                    <Card.Body className="d-flex align-items-center h-100 py-3">
                                                        <div className="mb-0 h6">
                                                            <div className="cursor-pointer body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                                                                <Clamp tag="span" clamp="1">
                                                                    {brand.name}
                                                                </Clamp>
                                                            </div>
                                                            <div className="card-text mb-2">
                                                                <div>{brand.description}</div>
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

export default BrandModal;
