import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { getAPI, postAPI } from 'data.service';
import Loading from 'components/loading/Loading';
import { toast } from 'react-toastify';
import { GeneralNotification } from 'components/notification/GeneralNotification';

const CustomersList = () => {

  const title = 'Pokemon List';
  const description = 'Pokemon data';

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsQuantity, setPokemonsQuantity] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [avgHeight, setAvgHeight] = useState(0);
  const [avgWeight, setAvgWeight] = useState(0);
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const markFavorite = async (pokemon, index) => {
    const response = await postAPI({
      url: '/pokemon',
      data: {
        id: pokemon?.detail?.id,
        name: pokemon?.name,
        url: pokemon?.url,
        favorite: true
      }
    });
    if (response.status === 200) {
      const pokemonsData = [...pokemons];
      if (pokemonsData[index].favorite) {
        pokemonsData[index].favorite = false;
      } else {
        pokemonsData[index].favorite = true;
      }
      setPokemons(pokemonsData);
      console.log("Set pokemon favorite toggle", pokemon);
    }
    toast(
      <GeneralNotification
        icon="check"
        title="Alerta"
        description={response.data}
      />,
      { className: response.status === 200 ? 'success' : 'error' }
    );
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonsQuantity])

  /*
    Load pokemon
  */
  useEffect(() => {
    const loadPokemon = async () => {
      setIsLoading(true);
      const response = await getAPI({
        url: '/pokemon',
        data: {
          quantity: pokemonsQuantity,
          page: currentPage
        }
      });
      console.log("Pokemons: ", response?.data);
      setIsLoading(false);
      setPokemons(response?.data?.pokemons);
      setAvgHeight(response?.data?.avgHeight);
      setAvgWeight(response?.data?.avgWeight);
      setPages(Math.ceil(response?.data?.count / pokemonsQuantity));
    }
    loadPokemon();
  }, [currentPage, pokemonsQuantity])

  return (
    <>

      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}
        </Row>
      </div>

      <Row className="mb-3">
        <Col md="4" lg="4" xxl="4" className="mb-1 text-end">
          <div>
            Average Weight: {avgWeight}
          </div>
        </Col>
        <Col md="4" lg="4" xxl="4" className="mb-1 text-end">
          <div>
            Average Height: {avgHeight}
          </div>
        </Col>
        <Col md="4" lg="4" xxl="4" className="mb-1 text-end">
          {/* Length Start */}
          <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
            <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Item Count</Tooltip>}>
              <Dropdown.Toggle variant="foreground-alternate" className="shadow sw-13">
                Showing: {pokemonsQuantity}
              </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu className="shadow dropdown-menu-end">
              <Dropdown.Item onClick={() => setPokemonsQuantity(50)}>50 Items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Length End */}
        </Col>
      </Row>

      {/* List Header Start */}
      <Row className="g-0 h-100 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col lg="2" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
          <div className="text-muted text-small cursor-pointer">PHOTO</div>
        </Col>
        <Col lg="2" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
          <div className="text-muted text-small cursor-pointer">NAME</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer">WEIGHT</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer">HEIGHT</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer">ABILITIES</div>
        </Col>
        <Col lg="1" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer">FAVORITE</div>
        </Col>
        <Col lg="1" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer">ACTIONS</div>
        </Col>
      </Row>
      {/* List Header End */}

      {
        isLoading ?
          <Loading />
          :
          <div>
            {
              pokemons.map((pokemon, i) => {
                return (<Card key={i} className={`mb-2 ${pokemon.favorite && 'selected'}`}>
                  <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
                    <Row className="g-0 h-100 align-content-center">
                      <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-1">
                        {
                          pokemon?.detail?.sprites?.front_default &&
                          <img className="card-img card-img-horizontal sw-8 h-100" src={pokemon?.detail?.sprites?.front_default} alt="" />
                        }
                      </Col>
                      <Col xs="11" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-2 h-lg-100 position-relative">
                        <div className="text-muted text-small d-lg-none">Name</div>
                        <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                          {pokemon?.name}
                        </NavLink>
                      </Col>
                      <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3">
                        <div className="text-muted text-small d-lg-none">WEIGHT</div>
                        <div className="text-alternate">{pokemon?.detail?.weight}</div>
                      </Col>
                      <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
                        <div className="text-muted text-small d-lg-none">HEIGHT</div>
                        <div className="text-alternate">{pokemon?.detail?.height}</div>
                      </Col>
                      <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-5">
                        <div className="text-muted text-small d-lg-none">ABILITIES</div>
                        <div className="text-alternate">
                          {pokemon?.detail?.abilities?.length}
                          <br />
                          <small>
                            {pokemon?.detail?.ability_concat}
                          </small>
                        </div>
                      </Col>
                      <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-center mb-2 mb-md-0 order-2 order-lg-5 text-end order-md-last">
                        <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={pokemon.favorite ? pokemon.favorite : false} onChange={() => markFavorite(pokemon, i)} />
                      </Col>
                      <Col xs="6" lg="1" className="d-flex flex-column justify-content-center align-items-center mb-2 mb-lg-0 order-5 order-lg-6">
                        <div className="text-muted text-small d-lg-none">ACTIONS</div>
                        <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                          <Button variant="outline-primary" className="btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                            <span>See details</span>
                          </Button>
                        </NavLink>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>);
              })
            }
            <div className="d-flex justify-content-center mt-5">
              <Pagination>
                {
                  currentPage > 1 &&
                  <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} className="shadow">
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                }
                {
                  pages > 1 && pokemons.length > 0 ?
                    [...Array(pages)].map((e, i) => {
                      return <Pagination.Item key={i + 1} onClick={() => setCurrentPage(i + 1)} className="shadow"
                        active={currentPage === (i + 1)}>
                        {i + 1}
                      </Pagination.Item>
                    }) : <></>
                }
                {
                  currentPage !== pages && pokemons.length > 0 ?
                    <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} className="shadow">
                      <CsLineIcons icon="chevron-right" />
                    </Pagination.Next> : <></>
                }

              </Pagination>
            </div>
          </div>
      }
    </>
  );
};

export default CustomersList;
