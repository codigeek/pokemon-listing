import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Dropdown, Card, Badge, ProgressBar } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

import {
  modalShowingGeneralModal,
  modalChangeNewMessage
} from 'components/modals/modalSlice';

import PerformanceChart from './components/PerformanceChart';
import InventoryChart from './components/InventoryChart';
import ChartLargeLineSales from './components/ChartLargeLineSales';
import ChartLargeLineStock from './components/ChartLargeLineStock';

const Dashboard = () => {

  const dispatch = useDispatch();

  const title = 'Estadísticas de la empresa';
  const description = '';

  return (
    <>
      <HtmlHead title={title} description={description} />

      {/* Stats Start */}
      <div className="d-flex">
        <Dropdown>
          <Dropdown.Toggle className="small-title p-0 align-top h-auto me-2" variant="link">
            Hoy
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Semana</Dropdown.Item>
            <Dropdown.Item>Quincena</Dropdown.Item>
            <Dropdown.Item>Mes</Dropdown.Item>
            <Dropdown.Item>Bimestre</Dropdown.Item>
            <Dropdown.Item>Semestre</Dropdown.Item>
            <Dropdown.Item>Año</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h2 className="small-title">Stats</h2>
      </div>
      <Row className="mb-5 g-2">
        <Col xs="6" md="4" lg="2">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <CsLineIcons icon="dollar" className="text-primary" />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">GANANCIAS</div>
              <div className="text-primary cta-4">$ 30,115.20</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6" md="4" lg="2">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <CsLineIcons icon="cart" className="text-primary" />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">VENTAS</div>
              <div className="text-primary cta-4">16</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6" md="4" lg="2">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <CsLineIcons icon="server" className="text-primary" />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">COMPRAS</div>
              <div className="text-primary cta-4">4</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6" md="4" lg="2">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <CsLineIcons icon="message" className="text-primary" />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">CITAS</div>
              <div className="text-primary cta-4">5</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6" md="4" lg="2">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <CsLineIcons icon="user" className="text-primary" />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">CLIENTES</div>
              <div className="text-primary cta-4">5</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6" md="4" lg="2">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <CsLineIcons icon="user" className="text-primary" />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate text-small lh-1-25">PROVEEDORES</div>
              <div className="text-primary cta-4">3</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Stats End */}

      <Row>

        {/* Recent Orders Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Ventas recientes</h2>
          <Card className="mb-2 sh-15 sh-md-6">
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="10" md="4" className="d-flex align-items-center mb-3 mb-md-0 h-md-100">
                  <div className="body-link stretched-link">
                    Venta #54129
                  </div>
                </Col>
                <Col xs="2" md="3" className="d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                  <Badge bg="outline-primary" className="me-1">
                    EN PROCESO
                  </Badge>
                </Col>
                <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    17.35
                  </span>
                </Col>
                <Col xs="12" md="3" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                  Hoy - 13:20
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2 sh-15 sh-md-6">
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="10" md="4" className="d-flex align-items-center mb-3 mb-md-0 h-md-100">
                  <div className="body-link stretched-link">
                    Venta #54128
                  </div>
                </Col>
                <Col xs="2" md="3" className="d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                  <Badge bg="outline-secondary" className="me-1">
                    PAGADA
                  </Badge>
                </Col>
                <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    145.20
                  </span>
                </Col>
                <Col xs="12" md="3" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                  Hoy - 11:32
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2 sh-15 sh-md-6">
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="10" md="4" className="d-flex align-items-center mb-3 mb-md-0 h-md-100">
                  <div className="body-link stretched-link">
                    Venta #54127
                  </div>
                </Col>
                <Col xs="2" md="3" className="d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                  <Badge bg="outline-secondary" className="me-1">
                    PAGADA
                  </Badge>
                </Col>
                <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    110.85
                  </span>
                </Col>
                <Col xs="12" md="3" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                  Hoy - 11:20
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2 sh-15 sh-md-6">
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="10" md="4" className="d-flex align-items-center mb-3 mb-md-0 h-md-100">
                  <div className="body-link stretched-link">
                    Venta #54126
                  </div>
                </Col>
                <Col xs="2" md="3" className="d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                  <Badge bg="outline-primary" className="me-1">
                    EN PROCESO
                  </Badge>
                </Col>
                <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    58.00
                  </span>
                </Col>
                <Col xs="12" md="3" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                  Hoy - 10:20
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2 sh-15 sh-md-6">
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="10" md="4" className="d-flex align-items-center mb-3 mb-md-0 h-md-100">
                  <div className="body-link stretched-link">
                    Venta #54125
                  </div>
                </Col>
                <Col xs="2" md="3" className="d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                  <Badge bg="outline-primary" className="me-1">
                    EN PROCESO
                  </Badge>
                </Col>
                <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    22.05
                  </span>
                </Col>
                <Col xs="12" md="3" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                  Hoy - 07:30
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2 sh-15 sh-md-6">
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="10" md="4" className="d-flex align-items-center mb-3 mb-md-0 h-md-100">
                  <div className="body-link stretched-link">
                    Venta #54124
                  </div>
                </Col>
                <Col xs="2" md="3" className="d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                  <Badge bg="outline-quaternary" className="me-1">
                    PAGADA
                  </Badge>
                </Col>
                <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    14.25
                  </span>
                </Col>
                <Col xs="12" md="3" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                  Lunes - 17:30
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Recent Orders End */}

        {/* Activity Start */}
        <Col xxl="6" className="mb-5">
          <h2 className="small-title">Actividad</h2>
          <Card className="sh-35">
            <Card.Body className="scroll-out">
              <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Nuevo cliente registrado</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">3 nuevos productos agregados</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="square" className="text-secondary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Producto agotado: Producto #1</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="square" className="text-secondary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Hubo un error al capturar una venta</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">14 productos agregados</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Nueva venta: Pablo Barrera</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Nueva venta: Pablo Barrera</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="triangle" className="text-warning align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Nueva reseña de cliente</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Nueva venta: Pablo Barrera</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col className="col-auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Nueva venta: Pablo Barrera</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">Hoy</div>
                    </div>
                  </Col>
                </Row>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </Col>
        {/* Activity End */}

      </Row>

      <Row>
        <Col xs="12" className="col-xxl">
          <Row>
            {/* Performance Start */}
            <Col xl="6" className="mb-5">
              <h2 className="small-title">Ganancias</h2>
              <Card className="sh-45 h-xl-100-card">
                <Card.Body className="h-100">
                  <div className="h-100">
                    <PerformanceChart />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* Performance End */}
            <Col xl="6">
              {/* Sales Graphs Start */}
              <h2 className="small-title">Ventas</h2>
              <Card className="mb-2 h-auto sh-xl-24" id="introFirst">
                <Card.Body>
                  <Row className="g-0 h-100">
                    <ChartLargeLineSales />
                  </Row>
                </Card.Body>
              </Card>
              {/* <Card className="mb-5 h-auto sh-xl-24">
                <Card.Body>
                  <Row className="g-0 h-100">
                    <ChartLargeLineStock />
                  </Row>
                </Card.Body>
              </Card> */}
            </Col>
            {/* Sales Graphs End */}
            {/* Expenses Report Start */}
            <Col xl="6">
              <h2 className="small-title">Gastos</h2>
              <Card className="h-100-card">
                <Card.Body>
                  <Row className="g-0 align-items-center mb-4 sh-5">
                    <Col xs="auto">
                      <div className="d-flex flex-column justify-content-center align-items-center sh-5 sw-5 rounded-xl bg-gradient-light">
                        <CsLineIcons icon="building" className="text-white" />
                      </div>
                    </Col>
                    <Col className="ps-3 mt-n2">
                      <Row className="g-0">
                        <Col>
                          <div className="sh-5 d-flex align-items-center">Renta</div>
                        </Col>
                        <Col xs="auto">
                          <div className="cta-3 text-primary sh-5 d-flex align-items-center">30%</div>
                        </Col>
                      </Row>
                      <ProgressBar className="progress-sm" now={30} />
                    </Col>
                  </Row>
                  <Row className="g-0 align-items-center mb-4 sh-5">
                    <Col xs="auto">
                      <div className="d-flex flex-column justify-content-center align-items-center sh-5 sw-5 rounded-xl bg-gradient-light">
                        <CsLineIcons icon="electricity" className="text-white" />
                      </div>
                    </Col>
                    <Col className="ps-3 mt-n2">
                      <Row className="g-0">
                        <Col>
                          <div className="sh-5 d-flex align-items-center">Servicios</div>
                        </Col>
                        <Col xs="auto">
                          <div className="cta-3 text-primary sh-5 d-flex align-items-center">15%</div>
                        </Col>
                      </Row>
                      <ProgressBar className="progress-sm" now={15} />
                    </Col>
                  </Row>
                  <Row className="g-0 align-items-center mb-4 sh-5">
                    <Col xs="auto">
                      <div className="d-flex flex-column justify-content-center align-items-center sh-5 sw-5 rounded-xl bg-gradient-light">
                        <CsLineIcons icon="box" className="text-white" />
                      </div>
                    </Col>
                    <Col className="ps-3 mt-n2">
                      <Row className="g-0">
                        <Col>
                          <div className="sh-5 d-flex align-items-center">Utilidades</div>
                        </Col>
                        <Col xs="auto">
                          <div className="cta-3 text-primary sh-5 d-flex align-items-center">12%</div>
                        </Col>
                      </Row>
                      <ProgressBar className="progress-sm" now={15} />
                    </Col>
                  </Row>
                  <Row className="g-0 align-items-center mb-4 sh-5">
                    <Col xs="auto">
                      <div className="d-flex flex-column justify-content-center align-items-center sh-5 sw-5 rounded-xl bg-gradient-light">
                        <CsLineIcons icon="archive" className="text-white" />
                      </div>
                    </Col>
                    <Col className="ps-3 mt-n2">
                      <Row className="g-0">
                        <Col>
                          <div className="sh-5 d-flex align-items-center">Otros gastos</div>
                        </Col>
                        <Col xs="auto">
                          <div className="cta-3 text-primary sh-5 d-flex align-items-center">10%</div>
                        </Col>
                      </Row>
                      <ProgressBar className="progress-sm" now={10} />
                    </Col>
                  </Row>
                  <Row className="g-0">
                    <Col className="pe-4 d-flex flex-column justify-content-between align-items-end">
                      <div className="text-small text-muted sh-3 d-flex align-items-center">PRESUPUESTO</div>
                      <div className="text-small text-muted sh-3 d-flex align-items-center">GASTO</div>
                      <div className="text-small text-muted sh-5 d-flex align-items-end">BALANCE</div>
                    </Col>
                    <Col xs="auto" className="d-flex flex-column justify-content-between align-items-end">
                      <div className="text-muted sh-3 d-flex align-items-center">$120,000</div>
                      <div className="text-muted sh-3 d-flex align-items-center">- $80,750</div>
                      <div className="cta-4 text-primary sh-5 d-flex align-items-end">$30,250</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            {/* Expenses Report End */}
            {/* Recent Reviews Start */}
            <Col xxl="6" className="mb-5">
              <h2 className="small-title">Reseñas recientes</h2>
              <Card className="sh-35">
                <Card.Body className="scroll-out">
                  <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                    <Row className="g-0 sh-10 mb-3">
                      <Col>
                        <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="mb-1">
                              <div className="body-link">
                                <div>Servicio #1</div>
                                <Rating
                                  initialRating={5}
                                  emptySymbol={<i className="cs-star text-primary" />}
                                  fullSymbol={<i className="cs-star-full text-primary" />}
                                />
                              </div>{' '}
                              {/* <span className="text-muted">by</span>{' '} */}
                              <div className="body-link">
                                Pablo Barrera
                              </div>
                            </div>
                            <div className="text-small text-muted text-truncate mb-1">
                              ¡El tratamiento me sirvió bastante!
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="g-0 sh-10 mb-3">
                      <Col>
                        <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="mb-1">
                              <div className="body-link">
                                <div>Servicio #1</div>
                                <Rating
                                  initialRating={5}
                                  emptySymbol={<i className="cs-star text-primary" />}
                                  fullSymbol={<i className="cs-star-full text-primary" />}
                                />
                              </div>{' '}
                              {/* <span className="text-muted">by</span>{' '} */}
                              <div className="body-link">
                                Pablo Barrera
                              </div>
                            </div>
                            <div className="text-small text-muted text-truncate mb-1">
                              ¡El tratamiento me sirvió bastante!
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="g-0 sh-10 mb-3">
                      <Col>
                        <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="mb-1">
                              <div className="body-link">
                                <div>Servicio #1</div>
                                <Rating
                                  initialRating={5}
                                  emptySymbol={<i className="cs-star text-primary" />}
                                  fullSymbol={<i className="cs-star-full text-primary" />}
                                />
                              </div>{' '}
                              {/* <span className="text-muted">by</span>{' '} */}
                              <div className="body-link">
                                Pablo Barrera
                              </div>
                            </div>
                            <div className="text-small text-muted text-truncate mb-1">
                              ¡El tratamiento me sirvió bastante!
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="g-0 sh-10 mb-3">
                      <Col>
                        <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="mb-1">
                              <div className="body-link">
                                <div>Servicio #1</div>
                                <Rating
                                  initialRating={5}
                                  emptySymbol={<i className="cs-star text-primary" />}
                                  fullSymbol={<i className="cs-star-full text-primary" />}
                                />
                              </div>{' '}
                              {/* <span className="text-muted">by</span>{' '} */}
                              <div className="body-link">
                                Pablo Barrera
                              </div>
                            </div>
                            <div className="text-small text-muted text-truncate mb-1">
                              ¡El tratamiento me sirvió bastante!
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="g-0 sh-10 mb-3">
                      <Col>
                        <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="mb-1">
                              <div className="body-link">
                                <div>Servicio #1</div>
                                <Rating
                                  initialRating={5}
                                  emptySymbol={<i className="cs-star text-primary" />}
                                  fullSymbol={<i className="cs-star-full text-primary" />}
                                />
                              </div>{' '}
                              {/* <span className="text-muted">by</span>{' '} */}
                              <div className="body-link">
                                Pablo Barrera
                              </div>
                            </div>
                            <div className="text-small text-muted text-truncate mb-1">
                              ¡El tratamiento me sirvió bastante!
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </OverlayScrollbarsComponent>
                </Card.Body>
              </Card>
            </Col>
            {/* Recent Reviews End */}
          </Row>
        </Col>
        {/* Tips Start */}
        {/* <Col xs="12" xxl="auto" className="mb-5">
          <h2 className="small-title">Tips</h2>
          <Card className="h-100-card sw-xxl-40">
            <Card.Body className="d-flex flex-column justify-content-between align-items-start">
              <div>
                <div className="cta-3">More sales?</div>
                <div className="mb-3 cta-3 text-primary">Add new products!</div>
                <div className="text-muted mb-4">
                  Cheesecake chocolate carrot cake pie lollipop apple pie lemon cream lollipop.
                  <br />
                  Oat cake lemon drops gummi pie cake cotton.
                </div>
              </div>
              <div className="btn btn-icon btn-icon-start btn-outline-primary stretched-link">
                <CsLineIcons icon="plus" />
                <span>Add Products</span>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
        {/* Tips End */}
      </Row>

      <Row className="mt-3 gx-4 gy-5">
        {/* Top Selling Items Start */}
        <Col xl="6">
          <h2 className="small-title">Productos, Paquetes ó Servicios más vendidos</h2>
          <div className="mb-n2">
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-8">
                <Col className="col-auto">
                  <div>
                    <img src="/img/product/small/product-1.webp" alt="alternate text" className="card-img card-img-horizontal sw-11" />
                  </div>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <div>Producto #1</div>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Categoría #1
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        424 Ventas
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-8">
                <Col className="col-auto">
                  <div>
                    <img src="/img/product/small/product-2.webp" alt="alternate text" className="card-img card-img-horizontal sw-11" />
                  </div>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <div>Paquete #2</div>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Categoría #1
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        270 Ventas
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-8">
                <Col className="col-auto">
                  <div>
                    <img src="/img/product/small/product-3.webp" alt="alternate text" className="card-img card-img-horizontal sw-11" />
                  </div>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <div>Producto #3</div>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Categoría #1
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        197 Ventas
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-8">
                <Col className="col-auto">
                  <div>
                    <img src="/img/product/small/product-4.webp" alt="alternate text" className="card-img card-img-horizontal sw-11" />
                  </div>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <div>Paquete #4</div>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Categoría #1
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        154 Ventas
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
        {/* Top Selling Items End */}

        {/* Top Search Terms Start */}
        <Col xl="6">
          <h2 className="small-title">Descuentos más utilizados</h2>
          <Card className="sh-35 h-xl-100-card">
            <Card.Body className="h-100 scroll-out">
              <OverlayScrollbarsComponent
                options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }}
                className="h-100 mb-n2"
              >
                <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                  <div className="d-flex flex-column">
                    <div>#DIADELASMADRES</div>
                  </div>
                  <div className="d-flex">
                    <Badge bg="outline-secondary">18</Badge>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                  <div className="d-flex flex-column">
                    <div>#DESCUENTOPRUEBA</div>
                  </div>
                  <div className="d-flex">
                    <Badge bg="outline-secondary">15</Badge>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                  <div className="d-flex flex-column">
                    <div>#FELIZNAVIDAD</div>
                  </div>
                  <div className="d-flex">
                    <Badge bg="outline-secondary">7</Badge>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                  <div className="d-flex flex-column">
                    <div>#FEBRERO14</div>
                  </div>
                  <div className="d-flex">
                    <Badge bg="outline-secondary">6</Badge>
                  </div>
                </div>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </Col>
        {/* Top Search Terms End */}
      </Row>

      <Row className="mt-4">
        <Col xs="12" className="col-xxl">
          <Row>
            {/* Inventory Graphs Start */}
            <Col xl="6" className="mb-5">
              <h2 className="small-title">Inventario</h2>
              <Card className="sh-45 h-xl-100-card">
                <Card.Body className="h-100">
                  <div className="h-100">
                    <InventoryChart />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* Inventory Alerts Start */}
            <Col xl="6">
              <h2 className="small-title">Alertas de Inventario</h2>
              <Card className="sh-35">
                <Card.Body className="scroll-out">
                  <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                    <Row className="g-0 mb-2">
                      <Col className="col-auto">
                        <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                          <div className="sh-3">
                            <CsLineIcons icon="triangle" className="text-warning align-top" />
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="text-alternate mt-n1 lh-1-25">Producto #1 bajó en Bodega #2</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col className="col-auto">
                        <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                          <div className="sh-3">
                            <CsLineIcons icon="triangle" className="text-warning align-top" />
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="text-alternate mt-n1 lh-1-25">Producto #1 bajó en Bodega #3</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col className="col-auto">
                        <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                          <div className="sh-3">
                            <CsLineIcons icon="triangle" className="text-warning align-top" />
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="text-alternate mt-n1 lh-1-25">Producto #2 bajó en Bodega #1</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col className="col-auto">
                        <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                          <div className="sh-3">
                            <CsLineIcons icon="triangle" className="text-warning align-top" />
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex flex-column ps-3 pe-4 h-100 justify-content-center">
                          <div className="d-flex flex-column">
                            <div className="text-alternate mt-n1 lh-1-25">Producto #4 bajó en Bodega #3</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </OverlayScrollbarsComponent>
                </Card.Body >
              </Card >
            </Col>
            {/* Inventory Alerts End */}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
