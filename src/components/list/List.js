import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Dropdown, Form, Card, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import debounce from 'lodash.debounce';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

import Title from 'components/general/Title';
import AddListButton from './elements/AddListButton';
import ExportCSV from './elements/ExportCSV';
import ColDisplay from './elements/ColDisplay';

// Variables

const List = ({
    // Statics
    title,
    description,
    ApiURL,
    editURL,
    returnURL,
    // Records
    tableHeaders,
    tableProperties,
    formProperties,
    records,
    recordsSearchText,
    recordsQuantity,
    // Paginations
    recordsPage,
    pages,
    // Set Functions
    setRecordsSearchText,
    setRecordsQuantity,
    setRecordsPage,
    // Api Functions
    confirmationDeleteRecord
}) => {

    const history = useHistory();

    // Logica

    const setRecordSearchHandler = event => {
        setRecordsSearchText(event);
    };

    const debounceSearch = useCallback( // eslint-disable-line
        debounce(setRecordSearchHandler, 1000)
        , []);

    const openRecord = (record) => {
        history.push({
            pathname: editURL,
            state: {
                pathname: editURL,
                returnPathname: returnURL,
                formData: formProperties,
                record,
                title,
                description,
                ApiURL
            }
        });
    }

    return (
        <>
            <div className="page-title-container">
                <Row className="g-0">
                    <Title title={title} />
                </Row>
            </div>

            <Row className="mb-3">
                <Col md="5" lg="3" xxl="2" className="mb-1">
                    {/* Search Start */}
                    <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
                        <Form.Control type="text" placeholder="Búsqueda" onChange={(e) => debounceSearch(e.target.value)} />
                        <span className="search-magnifier-icon">
                            <CsLineIcons icon="search" />
                        </span>
                        <span className="search-delete-icon d-none">
                            <CsLineIcons icon="close" />
                        </span>
                    </div>
                    {/* Search End */}
                </Col>
                <Col md="7" lg="9" xxl="10" className="mb-1 text-end">

                    <AddListButton openRecord={openRecord} label="Agregar" icon="plus" />

                    {/* Export Dropdown Start */}
                    <ExportCSV csvData={records} fileName="Organization" />
                    {/* Export Dropdown End */}

                    {/* Length Start */}
                    <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
                        <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={
                            <Tooltip id="tooltip-top">
                                Cantidad de registros
                            </Tooltip>}>
                            <Dropdown.Toggle variant="foreground-alternate" className="shadow sw-13">
                                R: {recordsQuantity}
                            </Dropdown.Toggle>
                        </OverlayTrigger>
                        <Dropdown.Menu className="shadow dropdown-menu-end">
                            <Dropdown.Item onClick={() => setRecordsQuantity(10)}>10 registros</Dropdown.Item>
                            <Dropdown.Item onClick={() => setRecordsQuantity(50)}>50 registros</Dropdown.Item>
                            <Dropdown.Item onClick={() => setRecordsQuantity(100)}>100 registros</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* Length End */}

                </Col>
            </Row>

            {/* List Header Start */}
            <Row className="g-0 h-100 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
                {
                    tableHeaders.map((header, i) => {
                        return <Col key={i} lg={header.lg} className="d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-small cursor-pointer">
                                {header.header}
                            </div>
                        </Col>
                    })
                }
            </Row>
            {/* List Header End */}

            {/* List Items Start */}
            {
                records.map((record, index) =>
                    <Card key={record._id} className="mb-2">
                        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
                            <Row className="g-0 h-100 align-content-center">
                                {
                                    tableProperties.map((propertyRecord, i) => {
                                        return ColDisplay(record, propertyRecord, i, openRecord, confirmationDeleteRecord);
                                    })
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                )
            }
            {/* List Items End */}

            {/* Pagination Start */}
            <div className="d-flex justify-content-center mt-5">
                <Pagination>
                    {
                        recordsPage > 1 &&
                        <Pagination.Prev onClick={() => setRecordsPage(recordsPage - 1)} className="shadow">
                            <CsLineIcons icon="chevron-left" />
                        </Pagination.Prev>
                    }
                    {
                        pages > 1 && records.length > 0 ?
                            [...Array(pages)].map((e, i) => {
                                return <Pagination.Item key={i + 1} onClick={() => setRecordsPage(i + 1)} className="shadow"
                                    active={recordsPage === (i + 1)}>
                                    {i + 1}
                                </Pagination.Item>
                            }) : <></>
                    }
                    {
                        recordsPage !== pages && records.length > 0 ?
                            <Pagination.Next onClick={() => setRecordsPage(recordsPage + 1)} className="shadow">
                                <CsLineIcons icon="chevron-right" />
                            </Pagination.Next> : <></>
                    }

                </Pagination>
            </div>
            {/* Pagination End */}
        </>
    );
};

export default List;
