import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { MENU_PLACEMENT } from 'constants.js';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { layoutShowingNavMenu } from 'layout/layoutSlice';

import {
  setCurrentUser,
  resetUserType
} from 'auth/authSlice';

const NavUserMenuContent = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(setCurrentUser(undefined));
    dispatch(resetUserType(undefined));
    history.push("/login");
  }

  return (
    <>
      <div>
        <Row className="mb-3 ms-0 me-0">
          <Col xs="12" className="ps-1 mb-2">
            <div className="text-extra-small text-primary">ACCOUNT</div>
          </Col>
          <Col xs="6" className="ps-1 pe-1">
            <ul className="list-unstyled">
              <li>
                <a href="#/!">User Info</a>
              </li>
              <li>
                <a href="#/!">Preferences</a>
              </li>
              <li>
                <a href="#/!">Calendar</a>
              </li>
            </ul>
          </Col>
          <Col xs="6" className="ps-1 pe-1">
            <ul className="list-unstyled">
              <li>
                <a href="#/!">Security</a>
              </li>
              <li>
                <a href="#/!">Billing</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-1 ms-0 me-0">
          <Col xs="12" className="p-1 mb-2 pt-2">
            <div className="text-extra-small text-primary">APPLICATION</div>
          </Col>
          <Col xs="6" className="ps-1 pe-1">
            <ul className="list-unstyled">
              <li>
                <a href="#/!">Themes</a>
              </li>
              <li>
                <a href="#/!">Language</a>
              </li>
            </ul>
          </Col>
          <Col xs="6" className="pe-1 ps-1">
            <ul className="list-unstyled">
              <li>
                <a href="#/!">Devices</a>
              </li>
              <li>
                <a href="#/!">Storage</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-1 ms-0 me-0">
          <Col xs="12" className="p-1 mb-3 pt-3">
            <div className="separator-light" />
          </Col>
          <Col xs="6" className="ps-1 pe-1">
            <ul className="list-unstyled">
              <li>
                <div className="stf-link">
                  <CsLineIcons icon="gear" className="me-2" size="17" /> <span className="align-middle">Settings</span>
                </div>
              </li>
              {/* <li>
                <a href="#/!">
                  <CsLineIcons icon="help" className="me-2" size="17" /> <span className="align-middle">Help</span>
                </a>
              </li>
              <li>
                <a href="#/!">
                  <CsLineIcons icon="file-text" className="me-2" size="17" /> <span className="align-middle">Docs</span>
                </a>
              </li> */}
            </ul>
          </Col>
          <Col xs="6" className="pe-1 ps-1">
            <ul className="list-unstyled">
              <li>
                <div className="stf-link" onClick={logout}>
                  <CsLineIcons icon="logout" className="me-2" size="17" /> <span className="align-middle">Logout</span>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

const NavUserMenuDropdownToggle = React.memo(
  React.forwardRef(({ onClick, expanded = false, register, isLogin = false, user = {} }, ref) => (
    <a
      href="#/!"
      ref={ref}
      className="d-flex position-relative register-container"
      data-toggle="dropdown"
      aria-expanded={expanded}
      onClick={(e) => {
        if (isLogin) {
          e.preventDefault();
          e.stopPropagation();
          onClick(e);
        }else{
          e.preventDefault();
          e.stopPropagation();
          register();
        }
      }}
    >
      <img className="user-photo" alt="" src={ user?.photo ? user?.photo : "/img/no-user-photo.png"  } />
      <div className="name">{user?.name ? user?.name : "Regístrate" }</div>
      <div className="d-flex position-relative arrows">
        <CsLineIcons icon="chevron-top" size="13" />
        <CsLineIcons icon="chevron-bottom" size="13" />
      </div>
    </a>
  ))
);

// Dropdown needs access to the DOM of the Menu to measure it
const NavUserMenuDropdownMenu = React.memo(
  React.forwardRef(({ style, className }, ref) => {
    return (
      <div ref={ref} style={style} className={classNames('dropdown-menu dropdown-menu-end user-menu wide', className)}>
        <NavUserMenuContent />
      </div>
    );
  })
);

NavUserMenuDropdownMenu.displayName = 'NavUserMenuDropdownMenu';

const MENU_NAME = 'NavUserMenu';

const NavUserMenu = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    placementStatus: { view: placement },
    behaviourStatus: { behaviourHtmlData },
    attrMobile,
    attrMenuAnimate,
  } = useSelector((state) => state.menu);

  const { isLogin, currentUser } = useSelector((state) => state.auth);
  const { color } = useSelector((state) => state.settings);
  const { showingNavMenu } = useSelector((state) => state.layout);

  const register = () =>{
    history.push("/registro");
  }

  const onToggle = (status, event) => {
    if (event && event.stopPropagation) event.stopPropagation();
    else if (event && event.originalEvent && event.originalEvent.stopPropagation) event.originalEvent.stopPropagation();
    dispatch(layoutShowingNavMenu(status ? MENU_NAME : ''));
  };

  useEffect(() => {
    dispatch(layoutShowingNavMenu(''));
    // eslint-disable-next-line
  }, [attrMenuAnimate, behaviourHtmlData, attrMobile, color]);

  // if (!isLogin) {
  //   return <></>;
  // }
  return (
    <Dropdown className="mt-2" as="div" bsPrefix="user-container d-flex" onToggle={onToggle} show={showingNavMenu === MENU_NAME} drop="down">
      <Dropdown.Toggle as={NavUserMenuDropdownToggle} register={register} isLogin={isLogin} user={currentUser} />
      <Dropdown.Menu
        as={NavUserMenuDropdownMenu}
        className="dropdown-menu dropdown-menu-end user-menu wide"
        popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: () => {
                  if (placement === MENU_PLACEMENT.Horizontal) {
                    return [0, 7];
                  }
                  if (window.innerWidth < 768) {
                    return [-84, 7];
                  }

                  return [-78, 7];
                },
              },
            },
          ],
        }}
      />
    </Dropdown>
  );
};

export default React.memo(NavUserMenu);
