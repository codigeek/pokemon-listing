import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useSelector } from 'react-redux';

const PokemonDetail = () => {

  const {
    pokemon
  } = useSelector((state) => state.auth);

  const history = useHistory();

  const title = 'Pokemon Detail';
  const description = 'Pokemon data';

  useEffect(() => {
    console.log("useeffect", pokemon);
    if (!pokemon) {
      history.push({
        pathname: '/pokemon'
      });
    }
  }, [pokemon, history]);

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col xl="4">
          <h2 className="small-title">Info</h2>
          <Card className="mb-5">
            <Card.Body className="mb-n5">
              <div className="d-flex align-items-center flex-column mb-5">
                <div className="mb-5 d-flex align-items-center flex-column">
                  <div className="sw-20 sh-20 mb-3 d-inline-block d-flex justify-content-center align-items-center">
                    {
                      pokemon?.detail?.sprites?.front_default &&
                      <img className="card-img card-img-horizontal sw-20 h-100" src={pokemon?.detail?.sprites?.front_default} alt="" />
                    }
                  </div>
                  <div className="h5 mb-1">{pokemon?.name}</div>
                </div>
              </div>
              <div className="mb-5">
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="credit-card" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Height</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">{pokemon?.detail?.height}</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="cart" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Weight</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">{pokemon?.detail?.weight}</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="boxes" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Order Count</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">17</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="mb-5">
                <p className="text-small text-muted mb-2">Types</p>
                {
                  pokemon?.detail?.types.map((type, i) => {
                    return (
                      <div key={i}>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="user" size="17" className="text-primary" />
                            </div>
                          </Col>
                          <Col className="text-alternate">{ type?.type?.name }</Col>
                        </Row>
                      </div>
                    )
                  })
                }
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl="8">
          {/* Recent Orders Start */}
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Abilities</h2>
          </div>
          <div className="mb-5">
            {
              pokemon?.detail?.abilities.map((ability, i) => {
                return (
                  <div key={i}>
                    {
                      !ability.is_hidden && <Card className="mb-2">
                        <Card.Body className="sh-16 sh-md-8 py-0">
                          <Row className="g-0 h-100 align-content-center">
                            <Col xs="6" md="12" className="d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                              <div className="text-muted text-small d-md-none">Ability</div>
                              <div className="text-truncate h-100 d-flex align-items-center">
                                {ability?.ability?.name}
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    }
                  </div>
                );
              })
            }
          </div>
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Status</h2>
          </div>
          <div className="mb-5">
            {
              pokemon?.detail?.stats.map((stat, i) => {
                return (
                  <div key={i}>
                    <Card className="mb-2">
                      <Card.Body className="sh-16 sh-md-8 py-0">
                        <Row className="g-0 h-100 align-content-center">
                          <Col xs="6" md="12" className="d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                            <div className="text-muted text-small d-md-none">Stat</div>
                            <div className="text-truncate h-100 d-flex align-items-center">
                              Base stat: {stat?.base_stat} - {stat?.stat?.name}
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })
            }
          </div>
          {/* Recent Orders End */}

        </Col>
      </Row>
    </>
  );
};

export default PokemonDetail;
