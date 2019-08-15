import React from 'react'
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = ({ links, location }) => (
  <Link to={`/`}><img src={require('../../../images/logo.png')} alt="logo" /></Link>
);

export default Logo;
