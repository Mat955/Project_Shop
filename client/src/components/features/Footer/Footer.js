import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div>
        <h2>All rights reserved</h2>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    );
  }
}

export default Footer;