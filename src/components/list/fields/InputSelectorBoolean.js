import React from 'react';
import { Form } from 'react-bootstrap';

const InputBoolean = (
    {
        error,
        label,
        name,
        placeholder,
        value,
        onChange
    }
) => {
    return (
        <>
            <div className="mb-3 form-group tooltip-end-top position-relative">
                <Form.Label>{label}</Form.Label>
                <Form.Check
                    id={name}
                    name={name}
                    type="switch"
                    value={value}
                    checked={value}
                    onChange={onChange}
                />
                {error && <div className="d-block invalid-tooltip">{error}</div>}
            </div>
        </>
    );
};
export default InputBoolean;