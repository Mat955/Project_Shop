import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import './ProductSummary.scss'
import HtmlBox from '../../common/HtmlBox/HtmlBox';

const ProductSummary = ({ id, title, content }) => (
  <article className="product-summary">
    <SmallTitle>{title}</SmallTitle>
    <HtmlBox>{content}</HtmlBox>
    <Button variant="primary"><Link to={`/products/${id}`}>
      More Information
    </Link></Button>
  </article>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default ProductSummary;