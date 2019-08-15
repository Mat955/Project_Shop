import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Col, Row } from 'reactstrap';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => (
  <Container className="homepage-container">
    <Row>
      <Col lg={8} className="homepage-description-container">
        <ScrollAnimation animateIn="fadeIn" delay={700}>
          <PageTitle className="homepage-title">FC Barcelona Shop For Fans</PageTitle>
          <h2>That’s why we are more than a club, because we spend every day working hard to be the best and to make the world into a better place, by not only imagining a more prosperous future, but by really making it happen.</h2>
        </ScrollAnimation>
      </Col>
      <Col lg={4} className="homepage-button-store">
        <ScrollAnimation animateIn="fadeIn" delay={700}>
          <Button variant="primary"><Link to={`/products`}>SHOP NOW</Link></Button>
        </ScrollAnimation>
      </Col>
      <Col lg={4} className="hompage-image">
        <ScrollAnimation animateIn="zoomInRight">
          <img className="homepage-barcelona" src={require("../../../images/homepage-barcelona-squad.png")} alt="squad barcelona homepage"
          />
        </ScrollAnimation>
      </Col>
    </Row>
  </Container>
);

export default HomePage;