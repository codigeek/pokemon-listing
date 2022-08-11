import React, { useMemo, useState, useEffect } from 'react';

// import redux for auth guard
import { useSelector, useDispatch } from 'react-redux';

// import layout
import Layout from 'layout/Layout';

// import routing modules
import RouteIdentifier from 'routing/components/RouteIdentifier';
import { getRoutes } from 'routing/helper';
import routesAndMenuItems from 'routes.js';
import Loading from 'components/loading/Loading';

import GeneralModal from 'components/modals/GeneralModal';

import {
  modalShowingGeneralModal
} from 'components/modals/modalSlice';

const App = () => {

  const dispatch = useDispatch();

  const { currentUser, isLogin } = useSelector((state) => state.auth);
  const routes = useMemo(() => getRoutes(
    {
      data: routesAndMenuItems,
      isLogin,
      userRole: currentUser.role
    }), [isLogin, currentUser]);

  const { showingGeneralModal, messageGeneralModal } = useSelector((state) => state.modal);
  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [CMessageGeneralModal, setCMessageGeneralModal] = useState("");

  useEffect(() => {
    if (showingGeneralModal) {
      setShowGeneralModal(true);
      setCMessageGeneralModal(messageGeneralModal);
    }
  }, [isLogin, showingGeneralModal, messageGeneralModal]);

  const resetStoreModal = (value) => {
    dispatch(modalShowingGeneralModal(value));
    setShowGeneralModal(value);
  }

  return (
    <>
      <Layout>
        <RouteIdentifier routes={routes} fallback={<Loading />} />
      </Layout>
      <GeneralModal closeModal={() => { resetStoreModal(false) }} message={CMessageGeneralModal} show={showGeneralModal} setShow={resetStoreModal} />
    </>
  );

};

export default App; 
