import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Nav: React.FC = () => {
  return (
    <header className="site-header">
      <div className="nav-inner container">
        <div className="brand">
          {/* If logo.png is present in assets/, it will be used; otherwise the import will fail during build. See assets/README.md. */}
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="KaCert" className="logo" style={{height:40}} />
          </NavLink>
        </div>
        <nav>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Начало</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>Услуги</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Контакти</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
