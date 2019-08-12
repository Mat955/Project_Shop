import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './Footer.scss';

class NavBar extends React.Component {

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
      <nav className='footer'>
        <p>Mateusz Lewartowski | All Rights Reserved</p>
        <MainMenu links={links} />
      </nav>
    );
  }
}

export default NavBar;