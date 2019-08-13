import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Products from '../../features/Products/ProductsContainer';

const HomePage = () => (
  <div>
    <PageTitle>FC Barcelona Shop</PageTitle>
    <Products pagination={false} />
  </div>
);

export default HomePage;