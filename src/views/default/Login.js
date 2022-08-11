import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';
import GeneralModal from 'components/modals/GeneralModal';

import axios from 'axios';
import { API_CONFIG } from 'constants.js';
import { DEFAULT_USER } from 'config.js';

import {
  setCurrentUser,
  setUserType,
  setCurrentBrand,
  setCurrentBranch
} from 'auth/authSlice';

import { analyzePermissions, getRoles } from './functions/loginFunctions';

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const title = 'Iniciar sesión';
  const description = 'Página de iniciar sesión';
  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [messageGeneralModal, setMessageGeneralModal] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required('Completa el correo electrónico'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres.').required('Completa tu contraseña'),
  });

  const initialValues = { email: '', password: '' };

  const onSubmit = async (values) => {
    dispatch(setCurrentUser(DEFAULT_USER));
    history.push("/catalogos");
    // try {
    //   axios.post(
    //     `${API_CONFIG.base_url}authentication`,
    //     values
    //   )
    //     .then(res => {
    //       if (res.status === 200) {
    //         const userLogin = res?.data?.data;
    //         userLogin.role = getRoles(userLogin);
    //         setShowGeneralModal(true);
    //         setMessageGeneralModal(res?.data?.message);
    //         dispatch(setCurrentUser(userLogin));
    //         dispatch(setUserType(userLogin?.user_type_id));
    //         dispatch(setCurrentBrand(res?.data?.brand));
    //         dispatch(setCurrentBranch(res?.data?.branch));
    //         analyzePermissions(userLogin, history);
    //       } else {
    //         setShowGeneralModal(true);
    //         setMessageGeneralModal(res?.data?.message);
    //       }
    //     })
    // } catch (err) {
    //   setShowGeneralModal(true);
    //   setMessageGeneralModal("Error inesperado al intentar iniciar sesión, por favor intenta más tarde");
    // }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const leftSide = (
    <>
    </>
    // <div className="min-h-100 d-flex align-items-center">
    //   <div className="w-100 w-lg-75 w-xxl-50">
    //     <div>
    //       <div className="mb-5">
    //         <h1 className="display-3 text-white">Stuffys</h1>
    //         <h1 className="display-3 text-white">Tu aliado tecnológico</h1>
    //       </div>
    //       <p className="h6 text-white lh-1-5 mb-5">
    //         Stuffys es una herramienta administrativa con la misión de ayudarte a gestionar todos los procesos de tu negocio y constantemente volverlos más
    //         simples
    //       </p>
    //       <div className="mb-5">
    //         <Button size="lg" variant="outline-white" href="/">
    //           Contáctanos
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );

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
          <h2 className="cta-1 text-primary">a tu administrador digital</h2>
        </div>
        <div className="mb-5">
          <p className="h6">Por favor ingresa tus credenciales para acceder.</p>
          {/* <p className="h6">
            Si no eres miembro aún, por favor <NavLink to="/register">regístrate</NavLink>.
          </p> */}
        </div>
        <div>
          <form id="loginForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="email" />
              <Form.Control type="text" name="email" placeholder="Correo electrónico" value={values.email} onChange={handleChange} />
              {errors.email && touched.email && <div className="d-block invalid-tooltip">{errors.email}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="lock-off" />
              <Form.Control type="password" name="password" onChange={handleChange} value={values.password} placeholder="Contraseña" />
              <NavLink className="text-small position-absolute t-3 e-3" to="/dashboard">
                Recuperar contraseña
              </NavLink>
              {errors.password && touched.password && <div className="d-block invalid-tooltip">{errors.password}</div>}
            </div>
            <Button size="lg" type="submit">
              Iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} />
      <GeneralModal closeModal={() => { setShowGeneralModal(false); }} message={messageGeneralModal} show={showGeneralModal} setShow={setShowGeneralModal} />
    </>
  );
};

export default Login;
