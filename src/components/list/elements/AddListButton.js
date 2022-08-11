import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const AddListButton = ({ openRecord, label, icon }) => {
    return (
        <Button onClick={() => openRecord(undefined)} variant="outline-primary" className="btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
            <CsLineIcons icon={icon} />
            <span>
                {label}
            </span>
        </Button>
    );
};
export default AddListButton;
