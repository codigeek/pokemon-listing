import React from 'react';
import { Form } from 'react-bootstrap';

const InputText = (
    {
        error,
        label,
        name,
        placeholder,
        value,
        onChange
    }
) => {

    const renderError = error ? (
        <strong>{error}</strong>
    ) : null;

    return (
        <>
            <div className="mb-3 form-group tooltip-end-top position-relative">
                <Form.Label>{label}</Form.Label>
                <Form.Control name={name} type="text" value={value} onChange={onChange} />
                {error && <div className="d-block invalid-tooltip">{error}</div>}
            </div>
        </>
    );
};
export default InputText;