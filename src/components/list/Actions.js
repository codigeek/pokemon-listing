
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown, Tooltip, OverlayTrigger } from 'react-bootstrap';

const Actions = ({ record, openRecord, confirmationDeleteRecord }) => {

    const history = useHistory();

    const triggerDeleteRecord = () => {
        confirmationDeleteRecord(record);
    }

    return (
        <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
            <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={
                <Tooltip id="tooltip-top">
                    Acciones
                </Tooltip>}>
                <Dropdown.Toggle variant="stf-acciones" className="shadow sw-13">
                    Acciones
                </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu className="shadow dropdown-menu-end">
                <Dropdown.Item onClick={openRecord}>
                    Editar
                </Dropdown.Item>
                <Dropdown.Item onClick={triggerDeleteRecord}>
                    Eliminar
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default Actions;
