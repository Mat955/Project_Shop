import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import './ProductSummary.scss'

const ProductSummary = ({ id, photo, title, price }) => (
  <div className="product-summary">
    <img src={require(`../../../img/${photo}`)} alt="" />
    <SmallTitle>{title}</SmallTitle>
    <p className="product-price">Price: {price}$</p>
    <Button variant="primary"><Link to={`/products/${id}`}>More Information</Link></Button>
  </div>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
};

export default ProductSummary;