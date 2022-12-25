import { Link } from 'gatsby';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = ({ activePageIndex }: { activePageIndex: 0 | 1 | 2 | 3 | 4 | 5 }) => {
  const navBarItems: { index: number; title: string; link: string }[] = [
    { index: 1, title: 'Services', link: '/services' },
    { index: 2, title: 'Works', link: '/works' },
    { index: 3, title: 'About Us', link: '/about-us' },
    { index: 4, title: 'Blog', link: '/blog' },
    { index: 5, title: 'Contact', link: '/contact' },
    { index: 6, title: 'Logout', link: '/login' },
  ];
  return (
    <div className='header-wrapper'>
      <div className='header-logo-container'>
        <Link to='/home'>
          <img src={Logo} />
        </Link>
      </div>
      <div className='header-navbar-container'>
        {navBarItems.map((item) => (
          <div className={`navbar-item ${item.index === activePageIndex ? 'active-item' : 'passive-item'}`}>
            <Link to={item.link}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(Header);
