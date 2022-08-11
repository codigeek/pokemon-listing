import React, { useState, useCallback } from 'react';
import { Form, Button, CloseButton, Modal } from 'react-bootstrap';

import Cropper from 'react-easy-crop';
import { getCroppedImg, getRotatedImage } from './CanvasUtils';

const CropModal = ({ src, setSrc, updateImage, isOpenCropModal, setIsOpenCropModal }) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixelsData) => {
        setCroppedAreaPixels(croppedAreaPixelsData);
    }, [])

    const execUpdateImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                src,
                croppedAreaPixels,
                rotation
            );
            updateImage(croppedImage);
        } catch (e) {
            console.error(e);
        };
    }, [src, croppedAreaPixels, rotation])

    return (
        <>
            <Modal dialogClassName="crop-modal" className="modal" show={isOpenCropModal} onHide={() => setIsOpenCropModal(false)}>
                <CloseButton className="position-absolute e-2 t-2 z-index-1" onClick={() => setIsOpenCropModal(false)} />
                <Modal.Header className="p-4">
                    <h4 className="m-0">
                        Imagen
                    </h4>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className="crop-container">
                            <Cropper
                                image={src}
                                crop={crop}
                                zoom={zoom}
                                aspect={3 / 3}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </div>
                        <div className="controls">
                            <input
                                type="range"
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-labelledby="Zoom"
                                onChange={(e) => {
                                    setZoom(e.target.value)
                                }}
                                className="zoom-range"
                            />
                        </div>
                        <div className="text-center mt-4" >
                            <Button type="button" onClick={execUpdateImage} variant="outline-primary">
                                Actualizar
                            </Button>
                        </div>
                    </>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CropModal;