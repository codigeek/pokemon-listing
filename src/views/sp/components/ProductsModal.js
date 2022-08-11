import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { Row, Col, Button, Badge, Card, Modal } from 'react-bootstrap';

import Rating from 'react-rating';
import Clamp from 'components/clamp';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import {
    modalShowingGeneralModal,
    modalChangeNewMessage
} from 'components/modals/modalSlice';

import { getRecords } from 'views/list/functions/general';

const ProductsModal = ({ handleClose, show = false, triggerSelectProduct }) => {

    const { currentBrand, currentBranch, currentUser, userType } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    const selectProduct = (product) => {
        triggerSelectProduct(product);
    }

    useEffect(async () => {
        const response = await getRecords({
            url: "product",
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
            setProducts(response.data.records);
        }
    }, []);

    return (
        <>
            <Modal
                show={show}
                id="ProductModal"
                onHide={handleClose}
                className="scroll-out-negative"
                dialogClassName="full"
                aria-labelledby="settings"
                tabIndex="-1"
                size="lg"
                scrollable
            >
                <Modal.Header>
                    <Modal.Title as="h5">Selecciona los productos:</Modal.Title>
                    <button type="button" className="btn-close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                        <Row>
                            {
                                products.map((product, i) => {
                                    return <Col className="mb-3" lg="12" key={i} onClick={()=>selectProduct(product)}>
                                        <Card>
                                            <Row className="g-0 sh-10 sh-sm-12">
                                                <Col xs="auto" className="h-100 position-relative">
                                                    <img src={product.photo} alt="Sin foto" className="card-img card-img-horizontal h-100 sw-11 sw-sm-11" />
                                                </Col>
                                                <Col>
                                                    <Card.Body className="d-flex align-items-center h-100 py-3 p-4">
                                                        <div className="mb-0 h6">
                                                            <div className="cursor-pointer body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                                                                <Clamp tag="span" clamp="1">
                                                                    {product?.name}
                                                                </Clamp>
                                                            </div>
                                                            <div className="card-text mb-2">
                                                                <div>{product?.category?.description}</div>
                                                            </div>
                                                            <div className="card-text mb-2">
                                                                <div>${product?.sale_price}</div>
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

export default ProductsModal;
