import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Row, Col, Dropdown, Form, Card, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import AddListButton from 'components/buttons/AddListButton';
import List from 'components/list/List';
import Actions from 'components/list/Actions';
import ExportCSV from 'components/buttons/ExportCSV';
import Title from 'components/general/Title';
import { getAPI } from 'data.service';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import debounce from 'lodash.debounce';


// App General Alert
import {
  modalShowingGeneralModal,
  modalChangeNewMessage
} from 'components/modals/modalSlice';

const ProductsList = () => {

  return (
    <>
    </>
  );
};

export default ProductsList;
