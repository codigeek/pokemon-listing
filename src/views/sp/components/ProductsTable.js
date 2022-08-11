import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Card, InputGroup } from 'react-bootstrap';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ItemCounter from './ItemCounter';

import ProductsModal from './ProductsModal';

const ProductsTable = ({ updateProducts, updateTotal, record }) => {

    const [isShowProductsModal, setIsShowProductsModal] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState();
    const [total, setTotal] = useState(0);

    const selectProduct = (product) => {
        setIsShowProductsModal(false);
        const index = products.map(function (e) { return e._id; }).indexOf(product._id);
        if (index !== -1) {
            const newProducts = [...products];
            newProducts[index].quantity += 1;
            newProducts[index].total = newProducts[index].quantity * newProducts[index].sale_price;
            setProducts(newProducts);
            updateProducts(newProducts);
        } else {
            product.quantity = 1;
            product.total = product.quantity * product.sale_price;
            setProducts([product, ...products]);
            updateProducts([product, ...products]);
        }
    }

    const triggerQuantity = (quantity, index) => {
        const newProducts = [...products];
        newProducts[index].quantity = quantity;
        newProducts[index].total = newProducts[index].quantity * newProducts[index].sale_price;
        setProducts(newProducts);
        updateProducts(newProducts);
    }

    const removeProduct = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
        updateProducts(newProducts);
    }

    const onInput = (event) => {
        // setValue(event.target.value || 0);
    };

    const spinUp = (product, index) => {
        // setValue(parseInt(typeof value === 'number' ? value : 0, 10) + 1);
        triggerQuantity(parseInt(typeof product?.quantity === 'number' ? product?.quantity : 0, 10) + 1, index);
    };

    const spinDown = (product, index) => {
        // setValue(parseInt(typeof value === 'number' ? value : 0, 10) - 1);
        triggerQuantity(parseInt(typeof product?.quantity === 'number' ? product?.quantity : 0, 10) - 1, index);
    };

    useEffect(async () => {
        if (record?._id) {
            setTotal(record?.total);
            setProducts(record?.products)
        }
    }, []);

    return (
        <>
            <Row className="mt-3">
                <Col xs="12" className="col-lg order-1 order-lg-0">
                    {/* Items Start */}
                    <Row className="mb-3">
                        <Col lg="6" xs="12" className="mb-3">
                            <div>
                                <h2 className="small-title">Productos</h2>
                            </div>
                        </Col>
                        <Col lg="6" xs="12" className="mb-3 text-right">
                            <Button onClick={() => setIsShowProductsModal(true)} type="button" variant="outline-primary" className="btn-icon btn-icon-start w-100 w-sm-auto">
                                <CsLineIcons icon="plus" /> <span>Agregar producto</span>
                            </Button>
                        </Col>
                    </Row>
                    <div className="mb-5">
                        {
                            products.map((product, i) => {
                                return <Card key={i} className="mb-2">
                                    <Row className="g-0 sh-10 sh-md-10">
                                        <Col xs="auto">
                                            {
                                                product?.photo &&
                                                <img
                                                    src={product?.photo}
                                                    className="card-img card-img-horizontal h-100 sw-9 sw-sm-10"
                                                    alt="foto" />
                                            }
                                        </Col>
                                        <Col className="position-relative h-100">
                                            <Card.Body className="p-4">
                                                <Row className="h-100">
                                                    <Col md="6" className="mb-2 mb-md-0 d-flex align-items-center">
                                                        <div className="pt-0 pb-0 pe-2">
                                                            <div className="h6 mb-0">
                                                                <Clamp tag="span" clamp="1">
                                                                    {product?.name}
                                                                </Clamp>
                                                            </div>
                                                            <div className="text-muted text-small">{product?.category?.description}</div>
                                                            <div className="mb-0 sw-19">$ {product?.sale_price}</div>
                                                        </div>
                                                    </Col>
                                                    <Col xs="6" md="3" className="pe-0 d-flex align-items-center">
                                                        {/* <ItemCounter defVal={product?.quantity} triggerQuantity={(e) => triggerQuantity(e, i)} /> */}
                                                        <InputGroup className="spinner sw-11">
                                                            <InputGroup.Text id="basic-addon1">
                                                                <button type="button" className="spin-down single px-2"
                                                                    onClick={() => spinDown(product, i)}>
                                                                    -
                                                                </button>
                                                            </InputGroup.Text>
                                                            <Form.Control value={product?.quantity} onInput={onInput} placeholder="Count" className="text-center" />
                                                            <InputGroup.Text id="basic-addon2">
                                                                <button type="button" className="spin-up single px-2"
                                                                    onClick={() => spinUp(product, i)}>
                                                                    +
                                                                </button>
                                                            </InputGroup.Text>
                                                        </InputGroup>
                                                    </Col>
                                                    <Col xs="6" md="3" className="d-flex justify-content-end justify-content-md-start align-items-center">
                                                        <div className="h6 mb-0">$ {product?.total}</div>
                                                    </Col>
                                                </Row>
                                                <Button onClick={() => removeProduct(i)} size="sm" className="btn-icon btn-icon-only position-absolute t-2 e-2" variant="foreground-alternate">
                                                    <CsLineIcons icon="error-hexagon" />
                                                </Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            })
                        }
                        {
                            total > 0 &&
                            <Card className="mb-2">
                                <Row className="g-0 sh-10 sh-md-10">
                                    <Col xs="auto">
                                        <div className="h-100 sw-9 sw-sm-10" />
                                    </Col>
                                    <Col className="position-relative h-100">
                                        <Card.Body className="p-4">
                                            <Row className="h-100">
                                                <Col md="6" className="mb-2 mb-md-0 d-flex align-items-center" />
                                                <Col xs="6" md="3" className="pe-0 d-flex align-items-center">
                                                    <div className="h6 mb-0 font-weight-bold">
                                                        TOTAL
                                                    </div>
                                                </Col>
                                                <Col xs="6" md="3" className="d-flex justify-content-end justify-content-md-start align-items-center">
                                                    <div className="h6 mb-0 font-weight-bold">
                                                        $ {total}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        }
                    </div>
                    {/* Items End */}
                </Col>
            </Row>
            <ProductsModal show={isShowProductsModal} triggerSelectProduct={(product) => selectProduct(product)} handleClose={() => setIsShowProductsModal(false)} />
        </>
    );
}

export default ProductsTable;
