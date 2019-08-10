import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import SingleProductContainer from '../../features/SingleProduct/SingleProductContainer';

const SingleProductPage = (props) => (
  <div>
    <PageTitle>Single Product</PageTitle>
    <SingleProductContainer id={props.match.params.id} />
  </div>
);

export default SingleProductPage;