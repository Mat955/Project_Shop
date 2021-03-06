import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './NavBar.scss';

class NavBar extends React.Component {

  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/products', title: 'Products' },
      { path: '/terms-of-use', title: 'Terms Of Use' },
      { path: '/contact', title: 'Contact' },
      { path: '/cart', title: 'Cart' }
    ],
  }

  render() {
    const { links } = this.state;

    return (
      <nav className='navbar'>
        <Logo />
        <MainMenu links={links} />
      </nav>
    );
  }
}

export default NavBar;