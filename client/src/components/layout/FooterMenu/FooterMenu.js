import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './FooterMenu.scss';

const FooterMenu = ({ links, location }) => (
  <ul className="footer-menu">
    {links.map((link, index) =>
      <li key={index}>
        <Link className={(location.pathname === link.path) || ''} to={link.path}>{link.title}</Link>
      </li>
    )}
  </ul>
);

FooterMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default withRouter(props => <FooterMenu {...props} />);
