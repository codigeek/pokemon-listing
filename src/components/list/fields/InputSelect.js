import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { getRecords } from 'views/list/functions/general';

const InputSelect = (
    {
        error,
        label,
        name,
        placeholder,
        value,
        onChange,
        handleBlur,
        setFieldValue,
        displayValue,
        fillSelect,
        fillSelectField,
        getURL,
        dispatch,
        modalShowingGeneralModal,
        modalChangeNewMessage
    }
) => {

    const { currentBrand, currentBranch, currentUser, userType } = useSelector((state) => state.auth);

    const [records, setRecords] = useState([]);

    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "transparent" : null,
                color: "#333333"
            };
        }
    };

    useEffect(async () => {
        const response = await getRecords({
            url: getURL,
            data: {
                quantity: 500,
                page: 1,
                currentBrand,
                currentBranch,
                currentUser,
                userType
            },
            dispatch,
            modalShowingGeneralModal,
            modalChangeNewMessage
        });
        if (response?.data?.records) {
            setRecords(response.data.records);
        }
    });

    return (
        <>
            <div className="mb-3 form-group tooltip-end-top position-relative">
                <Form.Label>{label}</Form.Label>
                <Select
                    id={name}
                    name={name}
                    onChange={option => {
                        if (fillSelect) {
                            setFieldValue(name, option._id);
                            setFieldValue(fillSelectField, option._id)
                        } else {
                            setFieldValue(name, option._id);
                        }
                    }}
                    value={records.find(record => record._id === value)}
                    options={records}
                    placeholder="Busca una opción"
                    getOptionLabel={(option) => `${option[displayValue]}`}
                    getOptionValue={(option) => option._id}
                    styles={colourStyles}
                />
                {error && <div className="d-block invalid-tooltip">{error}</div>}
            </div>
        </>
    );
};
export default InputSelect;