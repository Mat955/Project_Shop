import React from 'react';
import { PropTypes } from 'prop-types';
// import PageTitle from '../../common/PageTitle/PageTitle';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import './SingleProduct.scss';
import Button from '../../common/Button/Button';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadSingleProduct } = this.props;
    loadSingleProduct();
  }

  render() {
    const { singleProduct, request } = this.props;
    if (!request.pending && !!request.success && singleProduct) {
      return (
        <Container className="wrapper-product">
          <Row>
            <ScrollAnimation animateIn="fadeIn" delay={700}>
              <Col>
                <h1 className="single-product-title">{singleProduct.title}</h1>
                <img className="single-product-img" src={require(`../../../images/${singleProduct.photo}`)} alt="" />
                <HtmlBox>{singleProduct.content}</HtmlBox>
                <p className="single-product-price">Price: {singleProduct.price}$</p>
              </Col>
              <Col lg={4} className="homepage-button-store">
                <Button variant="primary"><Link to={`/cart`}>BUY NOW</Link></Button>
              </Col>
            </ScrollAnimation>
          </Row>
        </Container>
      );
    } else if (request.pending || !!request.success) {
      return (
        <div>
          <Spinner />
        </div>
      );
    } else if (!request.pending && request.error !== null) {
      return (
        <div>
          <Alert variant="error">{request.error}</Alert>
        </div>
      );
    } else if (!request.pending && request.success && !singleProduct) {
      return (
        <div>
          <Alert variant="info">No Products</Alert>
        </div>
      );
    } else {
      return (
        <div>
          <Alert variant="info">Something wrong...</Alert>
        </div>
      );
    }
  }
};

SingleProduct.propTypes = {
  singleProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  loadSingleProduct: PropTypes.func.isRequired,
};

export default SingleProduct;