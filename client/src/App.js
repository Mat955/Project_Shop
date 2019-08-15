import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

//import routes
import Home from './components/pages/Home/HomePage';
import Products from './components/pages/Products/ProductsPage';
import TermsOfUse from './components/pages/TermsOfUse/TermsOfUse';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import SinglePage from './components/pages/SingleProduct/SingleProductPage';
import Cart from './components/pages/Cart/CartPage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={SinglePage} />
          <Route path="/terms-of-use" exact component={TermsOfUse} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
};

export default App;
