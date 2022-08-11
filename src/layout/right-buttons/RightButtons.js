/* Theme Settings & Niches Buttons */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

import {
  setCurrentBrand,
  setCurrentBranch
} from 'auth/authSlice';

import BrandModal from './BrandModal';
import BranchModal from './BranchModal';
import BrandConfirmationModal from './BrandConfirmationModal';

const RightButtons = () => {

  const dispatch = useDispatch();
  const { currentBrand, currentBranch, userType, currentUser } = useSelector((state) => state.auth);

  const [isShowBrandModal, setIsShowBrandModal] = useState(false);
  const [isShowBranchModal, setIsShowBranchModal] = useState(false);
  const [isShowBrandConfirmationModal, setIsShowBrandConfirmationModal] = useState(false);
  const [brandSelected, setBrandSelected] = useState();
  const [branchSelected, setBranchSelected] = useState();

  const showBranchModal = () => {
    setIsShowBranchModal(true);
  };
  const closeBranchModal = () => {
    setIsShowBranchModal(false);
    document.documentElement.click();
  };
  const updateBranch = (branch) => {
    setBranchSelected(branch);
    dispatch(setCurrentBranch(branch));
    closeBranchModal();
  };

  const showBrandConfirmationModal = () => {
    setIsShowBrandConfirmationModal(true);
  };
  const closeBrandConfirmationModal = () => {
    setIsShowBrandConfirmationModal(false);
    document.documentElement.click();
  };
  const updateOption = (option) => {
    closeBrandConfirmationModal();
    if (option === 2) {
      showBranchModal();
    }
  }

  const showBrandModal = () => {
    setIsShowBrandModal(true);
  };
  const closeBrandModal = () => {
    setIsShowBrandModal(false);
    document.documentElement.click();
  };
  const updateBrand = (brand) => {
    setBrandSelected(brand);
    dispatch(setCurrentBrand(brand));
    dispatch(setCurrentBranch(undefined));
    closeBrandModal();
    showBrandConfirmationModal();
  };

  return (
    <>
      <div className="settings-buttons-container">
        <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Marca</Tooltip>} placement="left">
          <Button variant="primary" className="settings-button p-0" onClick={showBrandModal}>
            <span>
              <CsLineIcons icon="building-large" className="position-relative" />
            </span>
          </Button>
        </OverlayTrigger>
      </div>
      <BrandModal show={isShowBrandModal} setBrandSelected={(brand) => updateBrand(brand)} handleClose={closeBrandModal} />
      <BranchModal show={isShowBranchModal} setBranchSelected={(branch) => updateBranch(branch)} handleClose={closeBranchModal} />
      <BrandConfirmationModal show={isShowBrandConfirmationModal} setOptionSelected={(option) => updateOption(option)} handleClose={setIsShowBrandConfirmationModal} />
    </>
  );
};
export default RightButtons;
