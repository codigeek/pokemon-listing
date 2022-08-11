import React, { useEffect } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { MENU_PLACEMENT } from 'constants.js';
import { layoutShowingNavMenu } from 'layout/layoutSlice';

const MENU_NAME = 'NavBusinessSwitcher';

const NavBusinessSwitcher = () => {

  const dispatch = useDispatch();
  const { currentBrand, currentBranch, currentUser } = useSelector((state) => state.auth);

  const {
    behaviourStatus: { behaviourHtmlData },
    placementStatus: { view: placement },
    attrMobile,
    attrMenuAnimate,
  } = useSelector((state) => state.menu);

  const { color } = useSelector((state) => state.settings);
  const { showingNavMenu } = useSelector((state) => state.layout);

  const onSelectBusiness = (record) => {

  };

  const onToggle = (status, event) => {
    if (event && event.stopPropagation) event.stopPropagation();
    else if (event && event.originalEvent && event.originalEvent.stopPropagation) event.originalEvent.stopPropagation();
    dispatch(layoutShowingNavMenu(status ? MENU_NAME : ''));
  };

  useEffect(() => {
    dispatch(layoutShowingNavMenu(''));
    // eslint-disable-next-line
  }, [attrMenuAnimate, behaviourHtmlData, attrMobile, color]);

  return (
    <div className="language-switch-container business-container">
      <Dropdown onToggle={onToggle} show={showingNavMenu === MENU_NAME} align="end">
        <Dropdown.Toggle
          variant="empty"
          className={classNames('language-button', {
            show: showingNavMenu === MENU_NAME,
          })}
        >
          <div className="business-label">
            Administrando:
          </div>
          <br/>
          TODOS
        </Dropdown.Toggle>

        <Dropdown.Menu
          popperConfig={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: () => {
                    if (placement === MENU_PLACEMENT.Vertical) {
                      return [6, 7];
                    }
                    return [0, 7];
                  },
                },
              },
            ],
          }}
        >
          {/* {businesses.map((record) => (
            <Dropdown.Item key={record._id} onClick={() => onSelectBusiness(record)}>
              {record.description}
            </Dropdown.Item>
          ))} */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default React.memo(NavBusinessSwitcher);
