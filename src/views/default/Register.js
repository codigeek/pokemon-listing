import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';

import axios from 'axios';
import GeneralModal from 'modals/GeneralModal';
import { API_CONFIG } from 'constants.js';

import { setCurrentUser } from 'auth/authSlice';

const Register = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const title = 'Register';
  const description = 'Register Page';

  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [messageGeneralModal, setMessageGeneralModal] = useState('');
  const [titleGeneralModal, setTitleGeneralModal] = useState('');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Tu nombre es requerido'),
    email: Yup.string()
      .required('Tu correo es requerido')
      // eslint-disable-next-line
      .matches(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[_a-z0-9-]+(\.[a-z0-9-]+)*$/, 'Tu correo es inválido'),
    password: Yup.string().min(6, 'Tu contraseña debe tener al menos 6 caracteres').required('Tu contraseña es requerida'),
    terms: Yup.bool().required().oneOf([true], 'Acepta los términos para continuar'),
  });

  const initialValues = { name: '', email: '', password: '', terms: false };

  const onSubmit = async (values) => {
    const response = await axios.post(`${API_CONFIG.reus_api}/authentication/signup`, values).catch((error) => {
      setShowGeneralModal(true);
      setTitleGeneralModal("Alerta");
      setMessageGeneralModal(error);
    });
    console.log({response});
    if (response?.status === 201) {
      dispatch(setCurrentUser(response?.data?.user));
      history.push('/quintas');
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const rightSide = (
    <div className="sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-50 px-5">
        <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div>
        <div className="mb-5">
          <h2 className="cta-1 mb-0 text-primary">Bienvenido,</h2>
          <h2 className="cta-1 text-primary">crea tu perfil en Pokemon!</h2>
        </div>
        <div className="mb-5">
          <p className="h6">Completa el formulario para crear tu perfil.</p>
          <p className="h6">
            Si ya tienes una cuenta <NavLink to="/login"><b>inicia sesión aquí</b></NavLink>.
          </p>
        </div>
        <div>
          <form id="registerForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="user" />
              <Form.Control type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} />
              {errors.name && touched.name && <div className="d-block invalid-tooltip">{errors.name}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="email" />
              <Form.Control type="text" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
              {errors.email && touched.email && <div className="d-block invalid-tooltip">{errors.email}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="lock-off" />
              <Form.Control type="password" name="password" onChange={handleChange} value={values.password} placeholder="Password" />
              {errors.password && touched.password && <div className="d-block invalid-tooltip">{errors.password}</div>}
            </div>
            <div className="mb-3 position-relative form-group">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="terms" onChange={handleChange} value={values.terms} />
                <label className="form-check-label">
                  He leído y acepto los{' '}
                  <NavLink to="/registro" target="_blank">
                    términos y condiciones.
                  </NavLink>
                </label>
                {errors.terms && touched.terms && <div className="d-block invalid-tooltip">{errors.terms}</div>}
              </div>
            </div>
            <Button size="lg" type="submit">
              Continuar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage right={rightSide} />
      <GeneralModal
        closeModal={() => {
          setShowGeneralModal(false);
        }}
        title={titleGeneralModal}
        message={messageGeneralModal}
        show={showGeneralModal}
        setShow={setShowGeneralModal}
      />
    </>
  );
};

export default Register;
