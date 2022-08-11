import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from 'components/list/List';
import ConfirmationModal from 'components/modals/ConfirmationModal';

import { toast } from 'react-toastify';
import { GeneralNotification } from 'components/notification/GeneralNotification';

import {
  modalShowingGeneralModal,
  modalChangeNewMessage
} from 'components/modals/modalSlice';

import { getRecords, deleteRecord } from './functions/general';

const ProductsList = () => {

  const { currentBrand, currentBranch, currentUser, userType } = useSelector((state) => state.auth);

  const title = 'Productos';
  const description = 'Gestionar producto';
  const editURL = '/producto-detalle';
  const returnURL = '/inventario/productos';
  const ApiURL = 'product';

  const dispatch = useDispatch();

  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [tempRecord, setTempRecord] = useState({});

  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableProperties, setTableProperties] = useState([]);
  const [formProperties, setFormProperties] = useState([]);
  const [records, setRecords] = useState([]);
  const [recordsSearchText, setRecordsSearchText] = useState("");
  const [recordsQuantity, setRecordsQuantity] = useState(10);
  const [recordsPage, setRecordsPage] = useState(1);
  const [renderRecords, setRenderRecords] = useState(1);
  const [pages, setPages] = useState(1);

  const confirmationDeleteRecord = async (record) => {
    setTempRecord(record);
    setModalTitle("¡Alerta!");
    setModalMessage("¿Deseas eliminar este registro?");
    setShowConfirmationModal(true);
  }

  const executeDeleteRecord = async () => {
    const response = await deleteRecord({
      url: `${ApiURL}/${tempRecord._id}`,
      tempRecord,
      dispatch,
      modalShowingGeneralModal,
      modalChangeNewMessage
    });
    toast(
      <GeneralNotification
        icon="check"
        title="¡Excelente!"
        description="Se borró este registro"
      />,
      { className: 'success' }
    );
    setShowConfirmationModal(false);
    setRenderRecords(renderRecords + 1);
  }

  useEffect(async () => {
    const response = await getRecords({
      url: ApiURL,
      data: {
        quantity: recordsQuantity,
        page: recordsPage,
        search: recordsSearchText,
        currentBrand,
        currentBranch,
        currentUser,
        userType
      },
      dispatch,
      modalShowingGeneralModal,
      modalChangeNewMessage
    });
    console.log("Productos:",response);
    if (response.data?.tableInfo?.table_headers) {
      setTableHeaders(response.data.tableInfo.table_headers);
    }
    if (response.data?.tableInfo?.table_properties) {
      setTableProperties(response.data.tableInfo.table_properties);
    }
    if (response.data?.tableInfo?.form_properties) {
      setFormProperties(response.data.tableInfo.form_properties);
    }
    if (response.data?.records) {
      setRecords(response.data.records);
    }
    if (response.data?.count) {
      setPages(Math.ceil(response.data.count / recordsQuantity));
    }
  }, [recordsQuantity, recordsPage, recordsSearchText, renderRecords]);

  return (
    <>
      <List
        title={title}
        description={description}
        ApiURL={ApiURL}
        editURL={editURL}
        returnURL={returnURL}
        tableHeaders={tableHeaders}
        tableProperties={tableProperties}
        formProperties={formProperties}
        records={records}
        recordsSearchText={recordsSearchText}
        recordsQuantity={recordsQuantity}
        recordsPage={recordsPage}
        pages={pages}
        setRecordsSearchText={setRecordsSearchText}
        setRecordsQuantity={setRecordsQuantity}
        setRecordsPage={setRecordsPage}
        confirmationDeleteRecord={confirmationDeleteRecord}
      />
      <ConfirmationModal
        title={modalTitle}
        message={modalMessage}
        showConfirmationModal={showConfirmationModal}
        setShowConfirmationModal={setShowConfirmationModal}
        acceptConfirmation={executeDeleteRecord}
      />
    </>
  );
};

export default ProductsList;
