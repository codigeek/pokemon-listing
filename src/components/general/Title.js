
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Title = ({ title }) => {
    return (
        <div className="page-title-container">
            <Row className="g-0">
                {/* Title Start */}
                <Col className="col-auto mb-3 mb-sm-0 me-auto">
                    <h1 className="mb-0 pb-0 display-4" id="title">
                        {title}
                    </h1>
                </Col>
                {/* Title End */}
            </Row>
        </div>
    );
};
export default Title;
