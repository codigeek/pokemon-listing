import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Table, Card, Pagination, Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

import HtmlHead from 'components/html-head/HtmlHead';
import Title from 'components/general/Title';
import InputSelect from 'components/list/fields/InputSelect';

import {
  modalShowingGeneralModal,
  modalChangeNewMessage
} from 'components/modals/modalSlice';

import { getRecords } from 'views/list/functions/general';

const Inventory = () => {

  const { currentBrand, currentBranch, currentUser, userType } = useSelector((state) => state.auth);
  const [selectedWarehouse, setSelectedWarehouse] = useState();
  const [inventory, setInventory] = useState();

  const dispatch = useDispatch();

  const title = "Inventario";
  const description = "";

  useEffect(async () => {
    if (selectedWarehouse) {
      const response = await getRecords({
        url: `inventory/warehouse/${selectedWarehouse}`,
        data: {
          currentBrand,
          currentBranch,
          currentUser,
          userType
        },
        dispatch,
        modalShowingGeneralModal,
        modalChangeNewMessage
      });
      console.log("Inventario", response);
      setInventory(response?.data[0]);
    }
  }, [selectedWarehouse]);

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          <Title title={title} />
        </Row>
      </div>
      {
        selectedWarehouse &&
        <Row className="mb-3">
          <Col md="12" lg="12" xxl="12" className="mb-1 text-end">
            <Button onClick={() => console.log("Transferir inventario")} variant="outline-primary" className="btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
              <CsLineIcons icon="plus" />
              <span>
                Transferir inventario
              </span>
            </Button>
          </Col>
        </Row>
      }
      <Row>
        <Col>
          <div className="mb-5">
            <InputSelect
              error={undefined}
              label="Bodega:"
              name="warehouse"
              setFieldValue={(name, id) => setSelectedWarehouse(id)}
              displayValue="name"
              getURL="warehouse"
              dispatch={dispatch}
              modalShowingGeneralModal={modalShowingGeneralModal}
              modalChangeNewMessage={modalChangeNewMessage}
            />
          </div>
          {/* Basic Start */}
          {inventory &&
            <section className="scroll-section" id="basic">
              <h2 className="small-title">Detalle del inventario</h2>
              <Card body className="mb-5">
                <Table>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio compra</th>
                      <th scope="col">Precio venta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      inventory.products.map((record) => {
                        return <tr key={record._id}>
                          <th scope="row">{record._id}</th>
                          <td>{record.name}</td>
                          <td>{record.quantity}</td>
                          <td>{record.purchase_price}</td>
                          <td>{record.sale_price}</td>
                        </tr>
                      })
                    }
                  </tbody>
                </Table>
              </Card>
            </section>
          }
          {/* Basic End */}

          {/* Striped Rows Start */}
          {/* <section className="scroll-section" id="stripedRows">
            <h2 className="small-title">Striped Rows</h2>
            <Card body className="mb-5">
              <Table striped>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Striped Rows End */}

          {/* Hoverable Rows Start */}
          {/* <section className="scroll-section" id="hoverableRows">
            <h2 className="small-title">Hoverable Rows</h2>
            <Card body className="mb-5">
              <Table hover>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Hoverable Rows End */}

          {/* Active Tables Start */}
          {/* <section className="scroll-section" id="activeTables">
            <h2 className="small-title">Active Tables</h2>
            <Card body className="mb-5">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2" className="table-active">
                      Larry the Bird
                    </td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Active Tables End */}

          {/* Bordered Tables Start */}
          {/* <section className="scroll-section" id="borderedTables">
            <h2 className="small-title">Bordered Tables</h2>
            <Card body className="mb-5">
              <Table bordered>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Bordered Tables End */}

          {/* Tables Without Borders Start */}
          {/* <section className="scroll-section" id="tablesWithoutBorders">
            <h2 className="small-title">Tables Without Borders</h2>
            <Card body className="mb-5">
              <Table borderless>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Tables Without Borders End */}

          {/* Small Tables Start */}
          {/* <section className="scroll-section" id="smallTables">
            <h2 className="small-title">Small Tables</h2>
            <Card body className="mb-5">
              <Table size="sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Small Tables End */}

          {/* Vertical Alignment Start */}
          {/* <section className="scroll-section" id="verticalAlignment">
            <h2 className="small-title">Vertical Alignment</h2>
            <Card body className="mb-5">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col" className="w-25">
                      Heading 1
                    </th>
                    <th scope="col" className="w-25">
                      Heading 2
                    </th>
                    <th scope="col" className="w-25">
                      Heading 3
                    </th>
                    <th scope="col" className="w-25">
                      Heading 4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td>
                      This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in
                      the preceding cells.
                    </td>
                  </tr>
                  <tr className="align-bottom">
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: bottom;</code>
                      from the table row
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: bottom;</code>
                      from the table row
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: bottom;</code>
                      from the table row
                    </td>
                    <td>
                      This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in
                      the preceding cells.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td className="align-top">This cell is aligned to the top.</td>
                    <td>
                      This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in
                      the preceding cells.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Vertical Alignment End */}

          {/* Nesting Start */}
          {/* <section className="scroll-section" id="nesting">
            <h2 className="small-title">Nesting</h2>
            <Card body className="mb-5">
              <Table striped bordered>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <Table className="mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">A</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope="row">B</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope="row">C</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                        </tbody>
                      </Table>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Nesting End */}

          {/* Head and Foot Start */}
          {/* <section className="scroll-section" id="headAndFoot">
            <h2 className="small-title">Head and Foot</h2>
            <Card body className="mb-5">
              <Table>
                <thead className="table-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Footer</td>
                    <td>Footer</td>
                    <td>Footer</td>
                    <td>Footer</td>
                  </tr>
                </tfoot>
              </Table>
            </Card>
          </section> */}
          {/* Head and Foot End */}

          {/* Always Responsive Start */}
          {/* <section className="scroll-section" id="alwaysResponsive">
            <h2 className="small-title">Always Responsive</h2>
            <Card body className="mb-5">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section> */}
          {/* Always Responsive End */}

          {/* Breakpoint Specific Responsive Start */}
          {/* <section className="scroll-section" id="breakpointSpecificResponsive">
            <h2 className="small-title">Breakpoint Specific Responsive</h2>
            <Card body>
              <div className="mb-5">
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mb-5">
                <Table responsive="md" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mb-5">
                <Table responsive="lg" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mb-5">
                <Table responsive="xl" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Table responsive="xxl" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </section> */}
          {/* Breakpoint Specific Responsive End */}
        </Col>
      </Row>
    </>
  );
};

export default Inventory;
