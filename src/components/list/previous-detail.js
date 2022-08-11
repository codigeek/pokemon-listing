import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';
import { InputText } from './elements/InputText';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useFormik } from 'formik';
import { postAPI, putAPI } from 'data.service';

// App General Alert
import {
    modalShowingGeneralModal,
    modalChangeNewMessage
} from 'components/modals/modalSlice';

const Detail = (props) => {

    const { state } = props;
    let initialValues = state;
    if (!initialValues) {
        initialValues = { name: '', description: '' };
    }

    const dispatch = useDispatch();
    const history = useHistory();

    const title = 'Detalle del módulo';
    const description = '';

    const onSubmit = async (values) => {
        if (values._id) {
            const response = await putAPI({
                url: `module/${values._id}`,
                data: values
            });
            if (response.status === 200) {
                history.push("/administracion-general/modulos");
            } else {
                dispatch(modalShowingGeneralModal(true));
                dispatch(modalChangeNewMessage("Error"));
            }
        } else {
            try {
                const response = await postAPI({
                    url: `module`,
                    data: values
                });
                if (response.status === 200) {
                    history.push("/administracion-general/modulos");
                } else {
                    dispatch(modalShowingGeneralModal(true));
                    dispatch(modalChangeNewMessage("Error al crear el registro, revisa bien el formulario."));
                }
            }
            catch (error) {
                dispatch(modalShowingGeneralModal(true));
                dispatch(modalChangeNewMessage("Error al crear el registro, revisa bien el formulario."));
            }
        }
    }

    const formData = [
        {
            id: "name",
            label: "Full name",
            placeholder: "Enter full name",
            type: "text",
            validationType: "string",
            value: "User name",
            validations: [
                {
                    type: "required",
                    params: ["this field is required"]
                },
                {
                    type: "min",
                    params: [5, "name cannot be less than 5 characters"]
                },
                {
                    type: "max",
                    params: [10, "name cannot be more than 10 characters"]
                }
            ]
        },
        {
            id: "email",
            label: "Email",
            placeholder: "Email",
            type: "text",
            validationType: "string",
            value: "email",
            validations: [
                {
                    type: "required",
                    params: ["this field is required"]
                },
                {
                    type: "min",
                    params: [5, "email cannot be less than 5 characters"]
                },
                {
                    type: "max",
                    params: [10, "email cannot be more than 10 characters"]
                },
                {
                    type: "email",
                    params: ["please enter a valid email"]
                }
            ]
        },
        {
            id: "phoneNumber",
            label: "phone number",
            type: "text",
            validationType: "number",
            value: "7878787878",
            validations: [
                {
                    type: "min",
                    params: [10, "phone number cannot be less than 10 characters"]
                },
                {
                    type: "max",
                    params: [10, "phone number cannot be more than 10 characters"]
                },
                {
                    type: "required",
                    params: ["phone number is required"]
                }
            ]
        },
        {
            id: "total",
            label: "Total People in Family",
            placeholder: "family members count",
            type: "text",
            validationType: "number",
            required: false,
            value: "1",
            validations: [
                {
                    type: "required",
                    params: ["this field is required"]
                },
                {
                    type: "min",
                    params: [1, "there should be atleast 1 family member"]
                },
                {
                    type: "max",
                    params: [5, "max family members can be 5"]
                }
            ]
        }
    ];

    const renderFormElements = props =>
        formData.map((item, index) => {
            const fieldMap = {
                text: TextField
            };
            const Component = fieldMap[item.type];
            let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
            if (item.type) {
                return (
                    <Component
                        key={index}
                        label={item.label}
                        name={item.id}
                        placeholder={item.placeholder}
                        value={props.values[item.id]}
                        onChange={props.handleChange}
                        error={error}
                    />
                );
            }
            return "";
        });

    const formik = useFormik({ initialValues, onSubmit });
    const { handleSubmit, handleChange, values, touched, errors } = formik;

    return (
        <>
            <HtmlHead title={title} description={description} />
            <div className="page-title-container">
                <Row className="g-0">
                    {/* Title Start */}
                    <Col className="col-auto mb-3 mb-sm-0 me-auto">
                        <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/administracion-general/modulos">
                            <CsLineIcons icon="chevron-left" size="13" />
                            <span className="align-middle text-small ms-1">Módulos</span>
                        </NavLink>
                        <h1 className="mb-0 pb-0 display-4" id="title">
                            {title}
                        </h1>
                    </Col>
                    {/* Title End */}
                </Row>
            </div>
            <Row>
                <form id="moduledetail" className="tooltip-end-bottom" onSubmit={handleSubmit}>
                    {/* Top Buttons Start */}
                    <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                        <div className="btn-group ms-1 w-100 w-sm-auto">
                            <Button type="submit" variant="outline-primary" className="btn-icon btn-icon-start w-100 w-sm-auto">
                                <CsLineIcons icon="save" /> <span>Guardar</span>
                            </Button>
                        </div>
                    </Col>
                    {/* Top Buttons End */}
                    <Col xl="8">
                        {/* Product Info Start */}
                        <h2 className="small-title">Información</h2>
                        <Card className="mb-5">
                            <Card.Body>
                                <div className="mb-3 form-group tooltip-end-top">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control name="name" type="text" value={values.name} onChange={handleChange} />
                                    {errors.name && touched.name && <div className="d-block invalid-tooltip">{errors.name}</div>}
                                </div>
                                <div className="mb-3 form-group tooltip-end-top">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control name="description" type="text" value={values.description} onChange={handleChange} />
                                    {errors.description && touched.description && <div className="d-block invalid-tooltip">{errors.description}</div>}
                                </div>
                            </Card.Body>
                        </Card>
                        {/* Product Info End */}
                    </Col>
                </form>
            </Row>
        </>
    );
};

export default Detail;
