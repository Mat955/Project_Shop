import React from 'react';
import FooterMenu from '../../layout/FooterMenu/FooterMenu';
import './Footer.scss';

class FooterNav extends React.Component {

  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/products', title: 'Products' },
      { path: '/faq', title: 'FAQ' },
      { path: 'contact', title: 'Contact' },
    ],
  }

  render() {
    const { links } = this.state;

    return (
      <footer className='footer'>
        <div className='footer-text'>
          <p>Mateusz Lewartowski | All Rights Reserved</p>
          <FooterMenu links={links} />
        </div>
      </footer>
    );
  }
}

export default FooterNav;