import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';

import CropModal from './cropComponents/CropModal';

const InputPhoto = (
    {
        error,
        label,
        name,
        placeholder,
        value,
        onChange,
        setFieldValue,
        setFileSelected
    }
) => {

    const [src, setSrc] = useState();
    const [isOpenCropModal, setIsOpenCropModal] = useState(false);

    const renderError = error ? (
        <strong>{error}</strong>
    ) : null;

    const inputFileRef = useRef();

    const triggerFileUpload = () => {
        inputFileRef.current.click();
    };

    const readFile = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => resolve(reader.result), false);
            reader.readAsDataURL(file);
        })
    }

    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFileSelected(file);
            const imageDataUrl = await readFile(file);
            setSrc(imageDataUrl);
            setIsOpenCropModal(true);
        }
    }

    const updateImage = (data) => {
        setFieldValue(name, data);
        setIsOpenCropModal(false);
    }

    return (
        <>
            <div className="mb-5 text-center form-group tooltip-end-top position-relative">
                <input
                    className="input-file-detail"
                    type="file"
                    name="photo"
                    ref={inputFileRef}
                    onChange={onFileChange} />
                <br />
                {
                    value ?
                        <img onClick={triggerFileUpload} className="img-detail" alt="" src={value} />
                        :
                        <img onClick={triggerFileUpload} className="img-detail-thumbnail" alt="" src="/img/no-thumbnail.png" />
                }
                {error && <div className="d-block invalid-tooltip">{error}</div>}
            </div>
            <CropModal
                src={src}
                setSrc={setSrc}
                updateImage={updateImage}
                isOpenCropModal={isOpenCropModal}
                setIsOpenCropModal={setIsOpenCropModal}
            />
        </>
    );
};
export default InputPhoto;