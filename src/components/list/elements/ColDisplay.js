import React from 'react';
import { Col } from 'react-bootstrap';

import Actions from 'components/list/Actions';

const ColDisplay = (record, propertyRecord, i, openRecord, confirmationDeleteRecord) => {

    const {
        xs,
        lg,
        orderLg,
        link,
        nested,
        nestedValue,
        actions,
        order,
        tag,
        photo,
        status,
        property
    } = propertyRecord;

    if (link) {
        return <Col key={i} xs={xs} lg={lg} className={`d-flex flex-column justify-content-center mb-2 mb-lg-0 order-${order} order-lg-${orderLg} h-lg-100 position-relative`}>
            <div className="text-muted text-small d-lg-none">{tag}</div>
            <div onClick={() => openRecord(record)} className="stf-list-link text-truncate h-100 d-flex align-items-center">
                {
                    // eslint-disable-next-line
                    record[property]
                }
            </div>
        </Col>;
    }

    if (actions) {
        return <Col key={i} xs={xs} lg={lg} className={`d-flex flex-column justify-content-center mb-2 mb-lg-0 order-${order} order-lg-${orderLg}`}>
            <div className="text-muted text-small d-lg-none">{tag}</div>
            <Actions record={record} openRecord={() => openRecord(record)} confirmationDeleteRecord={confirmationDeleteRecord} />
        </Col>
    }

    if (status) {
        return <Col key={i} xs={xs} lg={lg} className={`d-flex flex-column justify-content-center mb-2 mb-lg-0 order-${order} order-lg-${orderLg}`}>
            <div className="text-muted text-small d-lg-none">{tag}</div>
            {
                record.active ? "Activo" : "Desactivado"
            }
        </Col>
    }

    // eslint-disable-next-line
    if (photo && record.photo) {
        return <Col xs="auto" className="position-relative">
            <div>
                <img alt="photo" className="card-img card-img-horizontal sw-11 h-100" src={
                    // eslint-disable-next-line
                    record.photo
                }
                />
            </div>
        </Col>;
    }

    return <Col key={i} xs={xs} lg={lg} className={`d-flex flex-column justify-content-center mb-2 mb-lg-0 order-${order} order-lg-${orderLg}`}>
        <div className="text-muted text-small d-lg-none">{tag}</div>
        <div className="text-alternate">
            {
                nested ?
                    // eslint-disable-next-line
                    record[property][nestedValue]
                    :
                    // eslint-disable-next-line
                    record[property]
            }
        </div>
    </Col>;


}

export default ColDisplay;