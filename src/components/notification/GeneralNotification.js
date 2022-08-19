import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const GeneralNotification = ({ icon, title, description, height, weight, count }) => (
    <>
        <div className="mb-2">
            <CsLineIcons icon={icon} width="20" height="20" className="cs-icon icon text-primary me-3 align-middle" />
            <span className="align-middle text-primary heading font-heading">
                {title}
            </span>
        </div>
        <div className="text-muted mb-2">
            {description}
        </div>
        {
            count &&
            <div className="text-muted mb-2">
                Total favorites: {count}
            </div>
        }
        {
            height &&
            <div className="text-muted mb-2">
                Average height: {height.toFixed(2)}
            </div>
        }
        {
            weight &&
            <div className="text-muted mb-2">
                Average weight: {weight.toFixed(2)}
            </div>
        }
    </>
);