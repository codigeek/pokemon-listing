import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useFormik, Formik } from 'formik';
import axios from 'axios';
import { saveFile } from 'data.service';
import { API_CONFIG } from 'constants.js';

// App General Alert
import {
  modalShowingGeneralModal,
  modalChangeNewMessage
} from 'components/modals/modalSlice';

// Utils
import * as yup from "yup";
import { createYupSchema } from 'components/list/utils/yupSchemaCreator';
import { getFieldRender } from "components/list/utils/getFieldRender";
import { saveRecord } from 'components/list/utils/saveRecord';

import ProductsTable from './components/ProductsTable';

const PurchasesDetail = (props) => {

  const { currentBrand, currentBranch, currentUser, userType } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const [fileSelected, setFileSelected] = useState();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const { location } = { ...props };

  const {
    formData,
    record,
    pathname,
    returnPathname,
    title,
    description,
    ApiURL
  } = location.state;

  const processResponse = async (values, response) => {
    const fileData = new FormData();
    if (values.photo) {
      if (values.photo.includes("blob:")) {
        const filePhoto = await axios.get(values.photo, { responseType: 'blob' }).then(photoResponse => { return new File([photoResponse.data], `${API_CONFIG.file_upload_base_url}${ApiURL}_${response?.data._id}.png`); });
        fileData.append("file", filePhoto, `${API_CONFIG.file_upload_base_url}${ApiURL}_${response?.data._id}.png`);
        // fileData.append("fileName", `image`);                
        const fileResponse = await saveFile(fileData);// axios.post('http://localhost:9001/upload', fileData)
      }
    }
    history.push(returnPathname);
  }

  const onSubmit = async (values, actions) => {
    values.products = products;
    values.total = total;
    values.branch = currentBranch._id;
    values.branch_id = currentBranch._id;
    const response = await saveRecord(ApiURL, values, record?._id, dispatch, modalShowingGeneralModal, modalChangeNewMessage);
    if (response?.status === 200) {
      processResponse(values, response);
    }
  }

  const renderFormElements = params =>
    formData.map((item, index) => {
      const fieldMap = getFieldRender(item.type);
      const Component = fieldMap[item.type];
      /* eslint-disable */
      const error = params?.errors?.hasOwnProperty(item.id) && params.errors[item.id];
      if (item.type) {
        return (
          <Col key={index} lg={item.lg} xs={item.xs}>
            <Component
              label={item.label}
              name={item.id}
              placeholder={item.placeholder}
              value={params.values[item.id]}
              onChange={params.handleChange}
              setFileSelected={setFileSelected}
              setFieldValue={params.setFieldValue}
              displayValue={item.displayValue}
              fillSelect={item.fillSelect}
              fillSelectField={item.fillSelectField}
              error={error}
              getURL={item.getURL}
              dispatch={dispatch}
              modalShowingGeneralModal={modalShowingGeneralModal}
              modalChangeNewMessage={modalChangeNewMessage}
            />
            {/* 
                        handleBlur={params.handleBlur} 
                    */}
            {/* <div>
                        value: {params.values[item.id]}
                    </div> */}
          </Col>
        );
      }
      return "";
    });

  const yepSchema = formData.reduce(createYupSchema, {});
  // console.log(yepSchema);
  const validateSchema = yup.object().shape(yepSchema);

  // SET INITIAL VALUES
  const initialValues = {};

  // REVISION IF RECORD EXISTS FILL VALUES OF FORMDATA
  if (record?._id) {
    Object.keys(record).map((item, i) => {
      const index = formData.findIndex((property => property.id === item));
      if (index !== -1) {
        formData[index].value = record[item];
      }
      return "";
    });
  }

  formData.forEach(item => {
    initialValues[item.id] = item?.value;
    // initialValues[item.id] = item.value || "";
  });

  const updateProducts = (products) => {
    setProducts(products);
  }

  const updateTotal = (total) => {
    setTotal(total);
  }

  useEffect(async () => {
    if (record?._id) {
      setTotal(record?.total);
      setProducts(record?.products)
    }
  }, []);

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to={returnPathname}>
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">{title}</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {description}
            </h1>
          </Col>
          {/* Title End */}
        </Row>
      </div>

      <Row>
        <Col xl="12">
          {/* Product Info Start */}
          <h2 className="small-title">&nbsp;</h2>
          <Card className="mb-5">
            <Card.Body>
              <Formik
                className="position-relative"
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values, actions) => onSubmit(values, actions)}
              >
                {params => (
                  <form onSubmit={params.handleSubmit}>
                    <Row>
                      <Col lg="12" xs="12" className="mb-3 text-right">
                        <Button type="submit" variant="outline-primary" className="btn-icon btn-icon-start w-100 w-sm-auto">
                          <CsLineIcons icon="save" /> <span>Guardar</span>
                        </Button>
                      </Col>
                      {renderFormElements(params)}
                    </Row>
                  </form>
                )}
              </Formik>
              <ProductsTable updateProducts={(products) => updateProducts(products)} updateTotal={(total) => updateTotal(total)} record={record} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );

};

export default PurchasesDetail;
