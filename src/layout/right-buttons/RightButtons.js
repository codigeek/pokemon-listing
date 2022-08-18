/* Theme Settings & Niches Buttons */
import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';


const RightButtons = () => {
  return (
    <>
      <div className="settings-buttons-container">
        <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Marca</Tooltip>} placement="left">
          <Button variant="primary" className="settings-button p-0">
            <span>
              <CsLineIcons icon="building-large" className="position-relative" />
            </span>
          </Button>
        </OverlayTrigger>
      </div>
    </>
  );
};
export default RightButtons;
