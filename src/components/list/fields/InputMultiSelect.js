import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { getRecords } from 'views/list/functions/general';

const InputMultiSelect = (
    {
        error,
        label,
        name,
        placeholder,
        value,
        onChange,
        handleBlur,
        setFieldValue,
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
    const [selectedRecords, setSelectedRecords] = useState([]);

    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "transparent" : null,
                color: "#333333"
            };
        }
    };

    const operation = (list1, list2, isUnion = false) => {
        return list1.filter(a => isUnion === list2.some(b => a._id === b));
    }

    const inBoth = (list1, list2) => operation(list1, list2, true);
    const inFirstOnly = operation;
    const inSecondOnly = (list1, list2) => inFirstOnly(list2, list1);

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
            if( value?.length > 0 ){
                setSelectedRecords(inBoth(response?.data?.records, value));
            }            
            // const tempRecords = [];
            // for( let i = 0; i<response?.data?.records?.length; i+= 1 ){
            //     if(value){
            //         for( let j = 0; j<value.length; j+= 1 ){
            //             if( response?.data?.records[i]._id === value[j] ){
            //                 tempRecords.push(response?.data?.records[i]);
            //             }
            //         }
            //     } 
            // }
            // setSelectedRecords(tempRecords);
        }
    }, []);

    return (
        <>
            <div className="mb-3 form-group tooltip-end-top position-relative">
                <Form.Label>{label}</Form.Label>
                <Select
                    id={name}
                    name={name}
                    isMulti
                    onChange={options => {
                        setSelectedRecords(options);
                        setFieldValue(name, options);
                    }}
                    value={selectedRecords}
                    options={records}
                    placeholder="Busca una opción"
                    getOptionLabel={(option) => `${option.name}`}
                    getOptionValue={(option) => option._id}
                    styles={colourStyles}
                />
                {error && <div className="d-block invalid-tooltip">{error}</div>}
            </div>
        </>
    );
};
export default InputMultiSelect;